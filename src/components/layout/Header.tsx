import { Button, Collapse, Grid } from '@nextui-org/react';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';
import { Hamburger } from '../icon/Hamburger';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  const { cartCount } = useShoppingCart();
  const MenuItem = ({ text, path }: { text: string; path: string }) => {
    return (
      <Button light color="default" size="sm">
        <Link href={path}>
          <a>{text}</a>
        </Link>
      </Button>
    );
  };

  // const minimum = true;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setOpen(window.innerWidth > 768);
    console.log(open);
  }, [open]);

  return (
    <>
      <header>
        <nav>
          <Collapse.Group divider>
            <Collapse
              title="--@@BONSAI@@--"
              arrowIcon={<Hamburger />}
              animated
              divider
              expanded={open}
              // shadow
            >
              <Grid.Container gap={0} justify="center">
                <Grid key="home">
                  <MenuItem text="HOME" path="/" />
                </Grid>
                <Grid key="shop">
                  <MenuItem text="SHOP" path="/" />
                </Grid>
                <Grid key="about">
                  <MenuItem text="ABOUT" path="/" />
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
