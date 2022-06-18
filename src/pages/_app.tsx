import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { CartProvider } from 'use-shopping-cart/react';
import Header from '../components/layout/Header';
import SEO from '../components/layout/SEO';
import Cart from '../components/stripe/Cart';
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
        <SEO title="Shopping Cart | Next.js + TypeScript Example">
          <Cart>
            <Header>
              <Component {...pageProps} />
            </Header>
          </Cart>
        </SEO>
      </CartProvider>
    </NextUIProvider>
  );
}

export default MyApp;
