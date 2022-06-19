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
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// @ts-ignore
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useShoppingCart } from 'use-shopping-cart/react';
import { getProduct } from '../..//utils/cms/products';
import type { Product } from '../../types';
import { useLarge } from '../../utils/hooks/window';

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const large = useLarge();
  const { addItem } = useShoppingCart();

  useEffect(() => {
    if (!id) return;
    (async () => {
      setProduct(await getProduct(`${id}`));
    })();
  }, [id]);

  return product ? (
    <>
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
                  </Container>
                </Card.Body>
              </Card>
            </Row>
            <Spacer y={1} />
            <Row>
              <Button
                // flat
                auto
                color="gradient"
                onPress={() => addItem(product.attributes as any)}
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
            <Row>
              <Link href="#" icon>
                BEFORE YOU BUY
              </Link>
            </Row>
            <Spacer y={1} />
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

export default Detail;
