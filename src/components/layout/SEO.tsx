import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
};

const Layout = ({
  title = 'TypeScript Next.js Stripe Example',
  description = 'TypeScript Next.js Stripe Example',
  image = '/illustrations/shopping.svg',
  keywords = [],
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />

      {/* basic */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* <meta name="twitter:site" content="" /> */}
    </Head>
  );
};

export default Layout;
