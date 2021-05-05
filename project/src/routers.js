import Home from './components/contents/home/Home.vue'
import Product from './components/contents/products/index.vue'
import ProductDetail from './components/contents/products/productDetail.vue'
import Cart from './components/contents/cart/Cart.vue'
//import SearchProduct from './components/contents/products/Searchproduct.vue'

export const routes = [
  {
    path: '/',
    component: Home,
    name: ''
    // nếu ko có '/ thì chuyển sang  /homepage
    // redirect: '/homepage',
    // children: [
    //   {
    //     path: 'homepage',
    //     name: 'homepage',
    //     component: Home,
    //   }
    // ]

  },
  {
    path: '/products',
    name: '',
    component: Product,
    children: [
      { path: 'vegetable', name: 'rau', component: Product},
      { path: 'tubers', name: 'cu', component: Product},
      { path: 'fruit', name: 'qua', component: Product},
      { path: 'mushroom', name: 'nam', component: Product},
    ]
  },
  { path: '/ProductDetail/:id', name: 'ProductDetail', component: ProductDetail},
  { path: '/cart', name: 'cart', component: Cart},
  {path: '/searchProduct', name: 'searchProduct', component: Product}
]
