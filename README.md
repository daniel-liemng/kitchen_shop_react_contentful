# Kitchen Shop
UI: ReactJS, Styled Components
Fetching data: Contentful CMS
Deploy on Netlify

[Live website](https://kitchen-shop-react-contentful.netlify.app)

## Table of Contents
* [About The Project](#about)

* [Tech Stack](#tech-stack)

* [Work flow](#work-flow)

* [Getting started](#getting-started)

## About The Project
An e-commerce web app built with ReactJS, React Hooks, Styled Components and fetching data from Contentful CMS. Deployed on Netlify

## Tech Stack
  * ##### ReactJS, React Hooks, useReducer
  * ##### Styled Components
  * ##### Contentful CMS
  
## Work Flow
* Landing page is where the customer can see all the features of the website like image slider, shop all products and shop by category

![Image](https://github.com/daniel-liemng/kitchen_shop_react_contentful/blob/master/src/screenshoot/kitchen-1.PNG)

![Image](https://github.com/daniel-liemng/kitchen_shop_react_contentful/blob/master/src/screenshoot/kitchen-2.png)

* The customers can shop all products with basic search by name and categories, sort and advanced search by price, shipping, availability in store

![Image](https://github.com/daniel-liemng/kitchen_shop_react_contentful/blob/master/src/screenshoot/kitchen-3.png)

* The customers can view the details of a single product and add to cart

![Image](https://github.com/daniel-liemng/kitchen_shop_react_contentful/blob/master/src/screenshoot/kitchen-4.png)

* The customers can view the cart page with the purchase summary

![Image](https://github.com/daniel-liemng/kitchen_shop_react_contentful/blob/master/src/screenshoot/kitchen-5.png)

## Getting started
**1.** In order to run this app, you need to have `node.js` installed.

**2.** `git clone https://github.com/daniel-liemng/kitchen_shop_react_contentful.git`

**3.** Install all dependencies and run app
npm install
```
Run app

```
npm run dev
```

##### Environment variables

Create `.env` file in root folder

```
REACT_APP_CONTENTFUL_SPACE_ID=<CONTENTFUL_SPACE_ID>
REACT_APP_CONTENTFUL_ACCESS_TOKEN=<CONTENTFUL_ACCESS_TOKEN>
```


