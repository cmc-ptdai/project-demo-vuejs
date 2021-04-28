import Home from './components/contents/home/Home.vue'
import Product from './components/contents/products/index.vue'
import ProductDetail from './components/contents/products/productDetail.vue'

export const routes = [
  {
    path: '/',
    component: Home,
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
  { path: '/products', name: 'products', component: Product},
  { path: '/ProductDetail/:id', name: 'products', component: ProductDetail}
]
