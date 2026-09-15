import { useState } from 'react';
import ProductsHero from '../components/sections/products/ProductsHero';
import ProductOverview from '../components/sections/products/ProductOverview';
import FeaturedProductsShowcase from '../components/sections/products/FeaturedProductsShowcase';
import ProductCatalogue from '../components/sections/products/ProductCatalogue';
import EngineeringProducts from '../components/sections/products/EngineeringProducts';
import ProductSelection from '../components/sections/products/ProductSelection';
import ProductsCTA from '../components/sections/products/ProductsCTA';
import ProductMediaModal from '../components/sections/products/ProductMediaModal';
import type { ProductItem } from '../data/products';

const Products = () => {
  const [selectedProductForMedia, setSelectedProductForMedia] = useState<ProductItem | null>(null);

  return (
    <>
      <ProductsHero />
      <ProductOverview />
      <FeaturedProductsShowcase onSelectProductForMedia={setSelectedProductForMedia} />
      <ProductCatalogue onSelectProductForMedia={setSelectedProductForMedia} />
      <EngineeringProducts />
      <ProductSelection />
      <ProductsCTA />

      {selectedProductForMedia && (
        <ProductMediaModal
          key={selectedProductForMedia.id}
          product={selectedProductForMedia}
          onClose={() => setSelectedProductForMedia(null)}
        />
      )}
    </>
  );
};

export default Products;
