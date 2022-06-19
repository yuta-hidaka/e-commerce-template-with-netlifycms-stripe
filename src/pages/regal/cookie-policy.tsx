import { Container } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { getPageMarkDown } from '../../utils/cms/common';

type Props = {
  contents: string;
};

const Home: NextPage<Props> = ({ contents }: Props) => {
  return (
    <Container>
      <ReactMarkdown>{contents}</ReactMarkdown>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getPageMarkDown('cookie-policy');
  return {
    props: {
      contents,
    },
  };
};
