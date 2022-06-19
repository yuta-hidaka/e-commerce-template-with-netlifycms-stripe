import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// @ts-ignore
import dynamic from 'next/dynamic';
import 'react-slideshow-image/dist/styles.css';
import { ProductType } from '../../types';
import { getProduct, getProducts } from '../../utils/cms/products';

const Product = dynamic(() => import('../../components/stripe/Product'));

type Props = {
  product: ProductType;
};

const Detail: NextPage<Props> = ({ product }: Props) => {
  return <Product product={product} />;
};

export default Detail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getProducts()).map((v) => ({
    params: { path: `/shop/${v.slug}`, id: v.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.id as string;

  const product = await getProduct(slug);

  return {
    props: {
      product,
    },
  };
};
