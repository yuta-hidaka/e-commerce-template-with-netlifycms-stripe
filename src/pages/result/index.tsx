import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Grid, Image, Spacer, Text } from '@nextui-org/react';

import useSWR from 'swr';
import { fetchGetJSON } from '../../utils/api-helpers';

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load </div>;

  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Text
          h3
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 100%',
          }}
          weight="bold"
        >
          "THANK YU FOR PURCHUS"
        </Text>
        <Text>
          "After we check your order I will send products as soon as possible"
        </Text>
        <Spacer y={2} />
        <Image
          alt="Default Image"
          objectFit="cover"
          src="/illustrations/checkout-success.svg"
          css={{
            maxWidth: '500px',
          }}
          maxDelay={10000}
          showSkeleton
        />
      </Grid>
    </Grid.Container>
  );
};

export default ResultPage;
