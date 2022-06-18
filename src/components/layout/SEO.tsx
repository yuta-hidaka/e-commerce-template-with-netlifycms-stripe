import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />

        <meta name="title" content="SiteTitle" />
        <meta name="description" content="DESCRIPTION" />
        <meta name="keywords" content="keyword" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thorwebdev" />
        <meta
          name="twitter:title"
          content="TypeScript Next.js Stripe Example"
        />
        <meta
          name="twitter:description"
          content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
        />
        <meta
          name="twitter:image"
          content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
