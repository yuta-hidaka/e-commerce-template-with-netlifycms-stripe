import { Button, Grid, Table, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart/react';
import { fetchPostJSON } from '../../utils/api-helpers';

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
  } = useShoppingCart();

  useEffect(() => {
    console.log(cartDetails);
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

    console.log(response);

    redirectToCheckout({ sessionId: `${response.id}` });
  };

  return (
    <form onSubmit={handleCheckout}>
      {errorMessage ? (
        <p style={{ color: 'red' }}>Error: {errorMessage}</p>
      ) : null}
      {/* This is where we'll render our cart */}

      <Table
        aria-label="Example table with static content"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
      >
        <Table.Header>
          <Table.Column> </Table.Column>
          <Table.Column>NAME</Table.Column>
          <Table.Column>price</Table.Column>
          <Table.Column>quantity</Table.Column>
        </Table.Header>
        <Table.Body>
          {Object.keys(cartDetails).map((key) => (
            <Table.Row key={key}>
              <Table.Cell>
                <Button size="xs" light>
                  ×
                </Button>
              </Table.Cell>
              <Table.Cell>{cartDetails[key].name}</Table.Cell>
              <Table.Cell>{cartDetails[key].formattedValue}</Table.Cell>
              <Table.Cell>{cartDetails[key].quantity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Text>
        Number of Items: {cartCount}
      </Text>
      <Text>
        Total:{formattedTotalPrice}
      </Text>
      <Grid.Container gap={2}>
        <Grid>
          <Button
            className="cart-style-background"
            type="submit"
            disabled={cartEmpty || loading}
            color="gradient"
            bordered
          >
            Checkout
          </Button>
        </Grid>
        <Grid>
          <Button
            className="cart-style-background"
            type="button"
            onClick={clearCart}
            color="gradient"
            flat
          >
            Clear Cart
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default CartSummary;
