# 100% Jamstack e-commerce web site template. 🐹
You can manage products without server.
This template manage contents on github with Netlify CMS.
So you fully no need backend resources😏

This template for small business owner or thinking start small business.

May you need some coding skill but just little😋

This stack with.

### Netlify CMS
- https://www.netlifycms.org/

### NextJS
- https://nextjs.org/

### NextUI
- https://nextui.org/

### use-shopping-cart
- https://useshoppingcart.com/


## before you started.

1. Create Github account

This for managing your CMS and save data.

https://github.com/

2. Create Stripe account

This for managing your Product.

https://stripe.com/

3. Get Stripe Secret Key, Publishable Key.

This use for cart and purchasing.

https://stripe.com/docs/keys

3. Sign in with github account on Netlify.

This for deploy your website easy.

https://www.netlify.com/

## Getting Started

First create `env.local` in root directory.
For example seed `env.sample` and replace the value `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY` what you get from Stripe.


First, run the development server:

```bash
yarn dev
```

Then, run local auth server for cms.
```bash
npx netlify-cms-proxy-server
```

Access `http://localhost:3000` will be show default products.

Access `http://localhost:3000/admin/index.html` will be show CMS view.(this is for offline contents management)

If you are deploy to Netlify you can manage your contents online.

#### Before access online page you should setup authenticator.
See https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider for setup.

And then setup has done you can access to `<YOUR WEBSITE URL>/admin` will show up login page.
