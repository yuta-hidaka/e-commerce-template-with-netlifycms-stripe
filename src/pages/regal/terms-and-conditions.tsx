import { Container } from '@nextui-org/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPageMarkDown } from '../../utils/cms/common';

const Cart: NextPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    (async () => {
      setMarkdown(await getPageMarkDown('terms-and-conditions'));
    })();
  }, []);
  return (
    <Container>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
};

export default Cart;
