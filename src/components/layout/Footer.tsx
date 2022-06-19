import { Button, Grid } from '@nextui-org/react';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart/react';
import { useLarge } from '../../utils/hooks/window';

const Footer = () => {
  const { cartCount } = useShoppingCart();
  const large = useLarge();

  const MenuItem = ({ text, path }: { text: string; path: string }) => {
    return (
      <Grid>
        <Button size="sm" key={path} color="default" light>
          <Link href={path}>
            <a>{text}</a>
          </Link>
        </Button>
      </Grid>
    );
  };

  const pages = [
    {
      text: 'privacy-policy',
      path: '/regal/privacy-policy',
    },
    {
      text: 'cookie-policy',
      path: '/regal/cookie-policy',
    },
    {
      text: 'terms-and-conditions',
      path: '/regal/terms-and-conditions',
    },
  ];

  return (
    <footer>
      <Grid.Container justify="center" gap={2}>
        {/* <Button.Group color="default" light> */}
        {pages.map((v) => MenuItem({ text: v.text, path: v.path }))}
        {/* </Button.Group> */}
      </Grid.Container>
    </footer>
  );
};

export default Footer;
