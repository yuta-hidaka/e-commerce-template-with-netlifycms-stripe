import {
  Button,
  Container,
  Grid,
  Image,
  Spacer,
  Table,
  Text,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { MdBorderColor, MdShoppingBasket } from 'react-icons/md';
import { useShoppingCart } from 'use-shopping-cart/react';
import { fetchPostJSON } from '../../utils/stripe/api-helpers';

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
    decrementItem,
    incrementItem,
  } = useShoppingCart();

  useEffect(() => {
    setCartEmpty(!cartCount);
  }, [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    );

    if (response.statusCode > 399) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }
    redirectToCheckout({ sessionId: `${response.id}` });
  };

  const Rows = () => {
    const r = Object.keys(cartDetails).map((key) => (
      <Table.Row key={key}>
        <Table.Cell>
          <Image
            src={cartDetails[key]?.images ? cartDetails[key]?.images[0] : ''}
            alt={cartDetails[key].name}
            width={25}
            height={25}
          />
        </Table.Cell>
        <Table.Cell>{cartDetails[key].name}</Table.Cell>
        <Table.Cell>{cartDetails[key].formattedValue}</Table.Cell>
        <Table.Cell>
          <Button.Group color="gradient" ghost size="sm">
            <Button onPress={() => decrementItem(cartDetails[key].id)}>
              -
            </Button>
            <Button>{cartDetails[key].quantity}</Button>
            <Button onPress={() => incrementItem(cartDetails[key].id)}>
              +
            </Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    ));
    r.push(
      <Table.Row key="total">
        <Table.Cell> </Table.Cell>
        <Table.Cell> </Table.Cell>
        <Table.Cell>
          <Grid.Container gap={1} alignContent="center">
            <Grid alignItems="center">
            </Grid>
            <Grid>
              <MdShoppingBasket size={20} />
              <Text size={15}>{cartCount}</Text>
            </Grid>
          </Grid.Container>
        </Table.Cell>
        <Table.Cell>
          <Grid.Container gap={1} alignContent="center">
            <Grid>
              <MdBorderColor size={20} />
            </Grid>
            <Grid>
              <Text size={15}>{formattedTotalPrice}</Text>
            </Grid>
          </Grid.Container>
        </Table.Cell>
      </Table.Row>
    );

    return r;
  };

  return (
    <form onSubmit={handleCheckout}>
      <Container>
        {errorMessage ? (
          <Text style={{ color: 'red' }}>Error: {errorMessage}</Text>
        ) : null}
        <Table
          aria-label="Example table with static content"
          css={{
            height: 'auto',
            minWidth: '100%',
            marginLeft: '10px',
            marginRight: '10px',
          }}
        >
          <Table.Header>
            <Table.Column> </Table.Column>
            <Table.Column>name</Table.Column>
            <Table.Column>price</Table.Column>
            <Table.Column>quantity</Table.Column>
          </Table.Header>
          <Table.Body>{Rows()}</Table.Body>
        </Table>
        <Spacer y={2} />
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Button
              shadow
              type="submit"
              disabled={cartEmpty || loading}
              color="gradient"
              // bordered
            >
              Checkout
            </Button>
          </Grid>
          <Grid>
            <Button
              type="button"
              onClick={clearCart}
              color="gradient"
              // flat
              bordered
            >
              Clear Cart
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </form>
  );
};

export default CartSummary;
