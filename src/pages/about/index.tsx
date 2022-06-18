import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getPageMarkDown } from '../../utils/cms/common';

const Cart: NextPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async () => {
      setMarkdown(await getPageMarkDown('about'));
    };
  }, []);

  useEffect(() => {
    console.log(markdown);
  }, [markdown]);
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default Cart;
