import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';
import type { ProductType } from '../../types';
import ProductCard from './ProductCard';
type Props = {
  products: ProductType[];
};

const Products = ({ products }: Props) => {
  const { addItem } = useShoppingCart();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="products">
      <Grid.Container gap={2} justify="center">
        {products.map((product, i) => <ProductCard key={i} product={product}/>)}
      </Grid.Container>
    </section>
  );
};

export default Products;
