import { Button, Collapse, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';
import { SITE_NAME } from '../../config';
import { useLarge } from '../../utils/hooks/window';
import { Hamburger } from '../icon/Hamburger';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  const { cartCount } = useShoppingCart();
  const large = useLarge();
  const router = useRouter();

  const MenuItem = ({ text, path }: { text: string; path: string }) => {
    return (
      <Button
        light
        color="default"
        size="sm"
        onPress={() => router.push(`${path}`)}
      >
        <Text>{text}</Text>
      </Button>
    );
  };

  return (
    <>
      <header>
        <nav>
          <Collapse.Group divider>
            <Collapse
              title={SITE_NAME}
              arrowIcon={<Hamburger />}
              animated
              divider
              expanded={large}
              // shadow
            >
              <Grid.Container gap={0} justify="center">
                <Grid key="home">
                  <MenuItem text="HOME" path="/" />
                </Grid>
                <Grid key="shop">
                  <MenuItem text="SHOP" path="/shop" />
                </Grid>
                <Grid key="about">
                  <MenuItem text="ABOUT" path="/about" />
                </Grid>
                <Grid key="cart">
                  <MenuItem text="CART" path="/cart" />
                  {/* <Avatar text={`${cartCount}`} color="primary" textColor="white" /> */}
                </Grid>
              </Grid.Container>
            </Collapse>
          </Collapse.Group>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Header;
