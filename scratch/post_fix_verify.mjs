import { spawn } from 'child_process';

async function run() {
  const profileDir = `/tmp/chrome-test-profile-${Date.now()}`;
  const chromeProcess = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${profileDir}`,
  ]);

  let wsUrl = '';
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch('http://127.0.0.1:9222/json/version');
      const data = await res.json();
      wsUrl = data.webSocketDebuggerUrl;
      if (wsUrl) break;
    } catch {}
  }

  if (!wsUrl) {
    chromeProcess.kill();
    throw new Error('Failed to connect to headless Chrome');
  }

  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);

  let msgId = 1;
  const callbacks = new Map();
  ws.onmessage = (msg) => {
    const parsed = JSON.parse(msg.data);
    if (callbacks.has(parsed.id)) {
      callbacks.get(parsed.id)(parsed.result);
      callbacks.delete(parsed.id);
    }
  };

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      callbacks.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  const VIEWPORTS = [
    { name: '375', width: 375, height: 812 },
    { name: '390', width: 390, height: 844 },
    { name: '430', width: 430, height: 932 },
    { name: '768', width: 768, height: 1024 },
    { name: '1024', width: 1024, height: 1366 },
    { name: '1280', width: 1280, height: 800 },
    { name: '1440', width: 1440, height: 900 },
    { name: '1920', width: 1920, height: 1080 }
  ];

  const ROUTES = [
    '/',
    '/about',
    '/solutions',
    '/industries',
    '/projects',
    '/products',
    '/contact',
    '/privacy',
    '/terms'
  ];

  const results = {
    viewports: {},
    home: {},
    contact: {},
    products: {},
    modalA11y: {}
  };

  // Helper to evaluate JS in page
  async function evalJs(expr) {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return res.result?.value;
  }

  // 1. Check responsiveness across all viewports
  for (const vp of VIEWPORTS) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 800,
    });
    let vpPass = true;
    for (const route of ROUTES) {
      await send('Page.navigate', { url: `http://localhost:5173${route}` });
      await new Promise(r => setTimeout(r, 600));
      const hasOverflow = await evalJs(`document.documentElement.scrollWidth > document.documentElement.clientWidth`);
      if (hasOverflow) vpPass = false;
    }
    results.viewports[vp.name] = vpPass ? 'PASS' : 'FAIL';
  }

  // Set standard desktop for functional checks
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });

  // 2. HOME verification
  await send('Page.navigate', { url: 'http://localhost:5173/' });
  await new Promise(r => setTimeout(r, 800));
  results.home = await evalJs(`(() => {
    const badges = Array.from(document.querySelectorAll('span')).filter(s => 
      s.textContent && s.textContent.includes('Representative Engineering Execution')
    );
    return {
      badgeCount: badges.length,
      sampleBadgeText: badges[0] ? badges[0].textContent.trim() : null
    };
  })()`);

  // 3. CONTACT verification
  await send('Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 800));
  results.contact = await evalJs(`(() => {
    const text = document.body.innerText;
    const hasAdvisory = text.includes('Prefer a faster response?') &&
                        text.includes('Email enquiry integration is currently being configured.');
    const waLink = document.querySelector('a[href*="wa.me/916309767400"]');
    return {
      advisoryVisible: hasAdvisory,
      hasDirectWhatsAppLink: Boolean(waLink),
      waHref: waLink ? waLink.href : null
    };
  })()`);

  // Fill form and submit to check pending state
  await evalJs(`(() => {
    const nameInput = document.querySelector('#fullName');
    const emailInput = document.querySelector('#email');
    const msgInput = document.querySelector('#message');
    const typeSelect = document.querySelector('#requirementType');
    if (nameInput) nameInput.value = 'John Demo';
    if (emailInput) emailInput.value = 'demo@ramservices.in';
    if (typeSelect) typeSelect.value = 'product-enquiry';
    if (msgInput) msgInput.value = 'Need quote on 300 KLD ETP';
    const form = document.querySelector('form');
    if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  })()`);
  await new Promise(r => setTimeout(r, 2000));

  results.contact.submissionState = await evalJs(`(() => {
    const text = document.body.innerText;
    return {
      showsPendingHeading: text.includes('Form Received — Email Delivery Pending'),
      noFakeSuccess: !text.includes('Enquiry Sent Successfully'),
      whatsappButtonPresent: Boolean(document.querySelector('a[href*="wa.me/916309767400"]'))
    };
  })()`);

  // 4. PRODUCTS verification
  await send('Page.navigate', { url: 'http://localhost:5173/products' });
  await new Promise(r => setTimeout(r, 1000));
  results.products = await evalJs(`(() => {
    const allCards = Array.from(document.querySelectorAll('div.group')).filter(c => 
      c.querySelector('a[href*="wa.me/916309767400"]')
    );

    const etp300Img = document.querySelector('img[alt="300 KLD ETP Plant"]');
    const etp25Img = document.querySelector('img[alt="25 KLD ETP & 15 KLD STP Plant"]');

    // Test WhatsApp encoding on 300 KLD RO + UF, 30 KLD ZLD, 5 KLD ETP Hospital, 60 BPM RFC, Office Container, etc.
    const testedNames = [
      '300 KLD RO + UF Plant',
      '30 KLD ZLD Plant',
      '5 KLD ETP Plant — Hospital & Restaurant Applications',
      '60 BPM RFC Machine',
      'Office Container',
      'Chemical Dosing System',
      'Domestic RO Plant',
      'Sludge Dewatering System',
      '20 BPM Bottle Packing Machine',
      'RO Plant — 250 LPH to 12,000 LPH'
    ];

    const waUrls = {};
    for (const name of testedNames) {
      const link = document.querySelector('a[href*="' + encodeURIComponent(name).replace(/%20/g, '%20') + '"]') ||
                   Array.from(document.querySelectorAll('a[href*="wa.me/916309767400"]')).find(a => 
                     decodeURIComponent(a.href).includes(name)
                   );
      waUrls[name] = link ? link.href : 'NOT_FOUND';
    }

    return {
      totalProductCardsInDOM: allCards.length,
      etp300: {
        hasImg: Boolean(etp300Img),
        src: etp300Img ? etp300Img.src : null
      },
      etp25: {
        hasImg: Boolean(etp25Img),
        src: etp25Img ? etp25Img.src : null
      },
      testedWaUrls: waUrls
    };
  })()`);

  // 5. MODAL A11y verification
  // Click on first product card image button
  await evalJs(`(() => {
    const firstBtn = document.querySelector('button[aria-label^="View "]');
    if (firstBtn) firstBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 600));

  results.modalA11y = await evalJs(`(() => {
    const dialog = document.querySelector('[role="dialog"]');
    return {
      hasRoleDialog: Boolean(dialog),
      hasAriaModal: dialog?.getAttribute('aria-modal') === 'true',
      ariaLabelledby: dialog?.getAttribute('aria-labelledby'),
      titleElementPresent: Boolean(document.getElementById('product-modal-title')),
      titleText: document.getElementById('product-modal-title')?.textContent?.trim()
    };
  })()`);

  ws.close();
  chromeProcess.kill();

  console.log(JSON.stringify(results, null, 2));
}

run().catch(console.error);
