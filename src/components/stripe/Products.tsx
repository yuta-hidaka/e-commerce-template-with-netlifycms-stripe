import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart/react';
import type { ProductType } from '../../types';

type Props = {
  products: ProductType[];
};

const Products = ({ products }: Props) => {
  const { addItem } = useShoppingCart();
  const router = useRouter();

  return (
    <section className="products">
      <Grid.Container gap={2} justify="center">
        {products.map((product, i) => (
          <Grid key={`${i}`} lg={4}>
            <Card
              hoverable
              cover
              css={{ w: '100%' }}
              onClick={() => router.push(`/shop/${product.slug}`)}
            >
              <Card.Body>
                <Card.Image
                  src={product.attributes.images[0]}
                  height={400}
                  width="100%"
                  alt={product.attributes.name}
                />
              </Card.Body>
              <Card.Footer
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#000000',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      {product.attributes.name}
                    </Text>
                    <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                      {formatCurrencyString({
                        value: product.attributes.price,
                        currency: product.attributes.currency,
                      })}
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        // flat
                        auto
                        color="gradient"
                        onPress={() => addItem(product.attributes as any)}
                        disabled={product.attributes.quantity < 0}
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
