

type Navlinks = {
  href : string,
  label: string
}


export const Links:Navlinks[] = [
  {href : '/',label:'home'},
  {href : '/about',label:'about'},
  {href : '/products',label:'product'},
  {href : '/favorites',label:'favorites'},
  {href : '/cart',label:'cart'},
  {href : '/orders',label:'orders'},
  { href: '/admin/sales', label: 'dashboard' },
]


export const adminLinks: Navlinks[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];