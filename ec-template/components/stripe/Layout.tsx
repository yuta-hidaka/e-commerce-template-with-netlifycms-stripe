import { Button, Collapse, Grid } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';
import { Hamburger } from '../icon/Hamburger';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => {
  const { cartCount } = useShoppingCart();
  const MockItem = ({ text, path }: { text: string; path: string }) => {
    return (
      <Button light color="primary" size="sm">
        <Link href={path}>
          <a>{text}</a>
        </Link>
      </Button>
    );
  };

  const minimum = true;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
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
      <header>
        <nav>
          {minimum ? (
            <Collapse.Group divider>
              <Collapse
                title="--@@BONSAI@@--"
                arrowIcon={<Hamburger />}
                animated
                divider
                // shadow
              >
                <Grid.Container gap={0} justify="center">
                  <Grid>
                    <MockItem text="HOME" path="/" />
                  </Grid>
                  <Grid>
                    <MockItem text="SHOP" path="/" />
                  </Grid>
                  <Grid>
                    <MockItem text="ABOUT" path="/" />
                  </Grid>
                  <Grid>
                    <MockItem text="CART" path="/cart" />
                    {/* <Avatar text={`${cartCount}`} color="primary" textColor="white" /> */}
                  </Grid>
                </Grid.Container>
              </Collapse>
            </Collapse.Group>
          ) : (
            <Grid.Container gap={0.4} justify="center">
              <Grid>
                <MockItem text="HOME" />
              </Grid>
              <Grid>
                <MockItem text="SHOP" />
              </Grid>
              <Grid>
                <MockItem text="ABOUT" />
              </Grid>
              <Grid>
                <MockItem text="CART" />
                {/* <Avatar text={`${cartCount}`} color="primary" textColor="white" /> */}
              </Grid>
            </Grid.Container>
          )}
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
