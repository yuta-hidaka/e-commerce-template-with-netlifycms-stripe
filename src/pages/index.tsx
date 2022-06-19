import { GetStaticProps, NextPage } from 'next';
import Products from '../components/stripe/Products';
import type { ProductType } from '../types';
import { getProducts } from '../utils/cms/products';

type Props = {
  products: ProductType[];
};

const Home: NextPage<Props> = ({ products }: Props) => {
  return <Products products={products} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};
