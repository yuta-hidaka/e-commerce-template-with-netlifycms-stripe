import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const config = {
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',
  local_backend: true,
  backend: {
    name: 'git-gateway',
    branch: 'main',
    publish_mode: 'editorial_workflow',
  },
  collections: [
    {
      name: 'products',
      label: 'products',
      folder: '_products',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
      ],
    },
  ],
};

const CMS: NextPage = dynamic(
  // @ts-ignore
  () =>
    import('netlify-cms-app').then((cms: any) => {
      if (
        location.hostname === 'localhost' ||
        location.hostname === '127.0.0.1'
      ) {
        config.local_backend = true;
      }
      // @ts-ignore
      cms.init({ config });
    }),
  { ssr: false }
);

export default CMS;
