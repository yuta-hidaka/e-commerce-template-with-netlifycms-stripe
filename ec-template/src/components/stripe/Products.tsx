import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart/react';
import products from '../../data/products';

const Products = () => {
  const { addItem, removeItem } = useShoppingCart();

  return (
    <section className="products">
      <Grid.Container gap={2} justify="center">
        {products.map((product) => (
          <Grid xl={12} md={6} sm={4}>
            <Card
              cover
              css={{ w: '100%' }}
              onClick={() => console.log('detail')}
            >
              <Card.Body>
                <Card.Image
                  src={product.image}
                  height={400}
                  width="100%"
                  alt={product.name}
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      {product.name}
                    </Text>
                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      {formatCurrencyString({
                        value: product.price,
                        currency: product.currency,
                      })}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        color="gradient"
                        onPress={() => addItem(product)}
                      >
                        <Text
                          // css={{ color: 'inherit' }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          ADD CART
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </section>
  );
};

export default Products;
