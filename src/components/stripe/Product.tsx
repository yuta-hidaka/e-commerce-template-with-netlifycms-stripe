import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Link,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
// @ts-ignore
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useShoppingCart } from 'use-shopping-cart/react';
import SEO from '../../components/layout/SEO';
import type { ProductType } from '../../types';
import { useLarge } from '../../utils/hooks/window';

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const large = useLarge();
  const { addItem } = useShoppingCart();

  return product ? (
    <>
      <SEO
        title={product.attributes.name}
        description={product.attributes.description}
        image={product.attributes.images[0]}
        keywords={product.attributes.tags}
      />
      <Container>
        <Row>
          {large && (
            <>
              <Col>
                <Card
                  css={{ $$cardColor: '$colors$white', w: '100%', maxW: 550 }}
                >
                  <Card.Body>
                    {/* <Grid xs={4} lg={11} xs={8} sm={5}> */}
                    {/* // FIXME: Want change some another swipe component */}
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Slide>
                          {product.attributes.images.map(
                            (slideImage, index) => (
                              <Card.Image
                                key={index}
                                src={slideImage}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                              />
                            )
                          )}
                        </Slide>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>
              </Col>
              <Spacer x={1} />
            </>
          )}
          <Col>
            {!large && (
              <>
                <Row>
                  <Card css={{ $$cardColor: '$colors$white', w: '100%' }}>
                    <Card.Body>
                      {/* <Grid xs={4} lg={11} xs={8} sm={5}> */}
                      {/* // FIXME: Want change some another swipe component */}
                      <Card>
                        <Card.Body css={{ p: 0 }}>
                          <Slide>
                            {product.attributes.images.map(
                              (slideImage, index) => (
                                <Card.Image
                                  key={index}
                                  src={slideImage}
                                  objectFit="cover"
                                  width="100%"
                                  height="100%"
                                  alt="Relaxing app background"
                                />
                              )
                            )}
                          </Slide>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Card>
                </Row>
                <Spacer y={1} />
              </>
            )}
            <Row>
              <Card css={{ $$cardColor: '$colors$white' }}>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>
                        <Text
                          h1
                          size={40}
                          css={{
                            textGradient: '45deg, $blue600 -20%, $green600 50%',
                          }}
                          weight="bold"
                        >
                          {product.attributes.name}
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Text>{product.attributes.description}</Text>
                    </Row>
                    <Spacer y={1} />
                    <Row justify="flex-end" gap={0.5}>
                      {product.attributes.quantity === 0 ? (
                        <Text weight="bold">SORRY THIS IS OUT OF STOCK 🙇‍♂️</Text>
                      ) : (
                        <>
                          <Text weight="bold">
                            {product.attributes.quantity}
                          </Text>
                          <Text>left</Text>
                        </>
                      )}
                    </Row>
                    <Row justify="flex-end" gap={0.5}>
                      <Text weight="bold">{product.attributes.price}</Text>
                      <Text>{product.attributes.currency}</Text>
                    </Row>
                    <Spacer y={1} />
                  </Container>
                </Card.Body>
              </Card>
            </Row>
            <Spacer y={1} />
            <Container>
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
              <Spacer y={1} />
              <Row justify="flex-end">
                <Link href="#" icon>
                  BEFORE YOU BUY
                </Link>
              </Row>
              <Spacer y={1} />
            </Container>
          </Col>
        </Row>
      </Container>
      <Spacer y={2} />
    </>
  ) : (
    <Grid.Container
      justify="center"
      alignItems="center"
      alignContent="center"
      direction="column"
      xs={12}
      sm={6}
      gap={2}
    >
      <Grid></Grid>
    </Grid.Container>
  );
};

export default Product;
