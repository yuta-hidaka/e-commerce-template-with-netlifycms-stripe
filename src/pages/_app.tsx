import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { CartProvider } from 'use-shopping-cart/react';
import Cart from '../components/stripe/Cart';
import Layout from '../components/stripe/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.STRIPE_SECRET_KEY!}
        successUrl="stripe.com"
        cancelUrl="twitter.com/dayhaysoos"
        currency="USD"
        allowedCountries={['US', 'GB', 'CA']}
        billingAddressCollection={true}
      >
        <Layout title="Shopping Cart | Next.js + TypeScript Example">
          <Cart>
            <Component {...pageProps} />
          </Cart>
        </Layout>
      </CartProvider>
    </NextUIProvider>
  );
}

export default MyApp;
