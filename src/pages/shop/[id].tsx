import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getProduct } from '../../utils/products';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async () => {
      const product = await getProduct(`${id}`);
      console.log(product);
    })();
  });
  return <p>Post: {id}</p>;
};

export default Detail;
