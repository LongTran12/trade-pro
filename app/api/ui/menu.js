
module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    child: [
      {
        key: 'crypto',
        name: 'Cryptocurrency',
        link: '/',
        icon: 'ios-medal-outline'
      },
    ]
  },
  {
    key: 'apps',
    name: 'Applications',
    icon: 'ios-appstore-outline',
    child: [
      {
        key: 'communication_apps',
        name: 'Communication',
        title: true,
      },
      {
        key: 'contact',
        name: 'Contact',
        link: '/pages/contact',
        icon: 'ios-contact-outline'
      },
      {
        key: 'email',
        name: 'Email',
        link: '/pages/email',
        badge: '2',
        icon: 'ios-mail-outline'
      },
      {
        key: 'social_apps',
        name: 'Social',
        title: true,
      },
      {
        key: 'timeline',
        name: 'Timeline',
        link: '/pages/timeline',
        icon: 'ios-people-outline'
      },
      {
        key: 'chat',
        name: 'Chat',
        link: '/pages/chat',
        badge: '4',
        icon: 'ios-chatbubbles-outline'
      },
      {
        key: 'ecommerce_app',
        name: 'Ecommerce',
        title: true,
      },
      {
        key: 'Itemlist',
        name: 'Product Catalogues',
        link: '/pages/ecommerce',
        icon: 'ios-apps-outline'
      },
      {
        key: 'item_detail',
        name: 'Product Detail',
        link: '/pages/product-detail',
        icon: 'ios-card'
      },
      {
        key: 'checkout',
        name: 'Checkout Page',
        link: '/pages/checkout',
        icon: 'ios-cart-outline'
      },
      {
        key: 'dynamic_invoice',
        name: 'Dynamic Invoice',
        link: '/pages/invoice',
        icon: 'ios-document-outline'
      },
      {
        key: 'productivity_app',
        name: 'Productivity',
        title: true,
      },
      {
        key: 'calendar',
        name: 'Calendar',
        link: '/pages/calendar',
        icon: 'ios-calendar-outline'
      },
      {
        key: 'task',
        name: 'Task Board',
        link: '/pages/taskboard',
        icon: 'ios-checkmark-circle-outline'
      },
    ]
  },

];
