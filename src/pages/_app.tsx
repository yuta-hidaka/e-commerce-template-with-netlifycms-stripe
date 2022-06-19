import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { CartProvider } from 'use-shopping-cart/react';
import SEO from '../components/layout/SEO';
import '../styles/globals.css';

const Header = dynamic(() => import('../components/layout/Header'));
const Footer = dynamic(() => import('../components/layout/Footer'));
const Cart = dynamic(() => import('../components/stripe/Cart'));

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
        <Cart>
          <SEO title="Shopping Cart | Next.js + TypeScript Example" />
          <Header>
            <Component {...pageProps} />
            <Footer />
          </Header>
        </Cart>
      </CartProvider>
    </NextUIProvider>
  );
}

export default MyApp;
