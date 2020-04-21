module.exports = [
    {
        key: 'home',
        name: 'home',
        icon: 'ios-home-outline',
        child: [
            {
                key: 'crypto',
                name: 'Cryptocurrency',
                link: '/',
                icon: 'ios-medal-outline'
            },
            {
                key: 'network',
                name: 'network',
                link: '/network',
                icon: 'ios-medal-outline'
            },
            {
                key: 'stackingMenu',
                name: 'stakingMenu',
                link: '/stacking',
                icon: 'ios-medal-outline'
            }
        ]
    },
    {
        key: 'bonus',
        name: 'Bonus',
        icon: 'md-add-circle',
        child: [
            {
                key: 'bonuss',
                name: 'Bonus',
                link: '/bonus',
                icon: 'ios-medal-outline'
            }
        ]
    },
    {
        key: 'otgame',
        name: 'OTGame',
        icon: 'md-game-controller-b',
        child: [
            {
                key: 'crypto1',
                name: 'Game Lucky',
                link: '/coming-soon',
                icon: 'ios-medal-outline'
            },
            {
                key: 'network1',
                name: 'Binary Option',
                link: '/coming-soon',
                icon: 'ios-medal-outline'
            }
        ]
    },
    {
        key: 'trao-doi',
        name: 'swap',
        icon: 'ios-clock-outline',
        child: [
            {
                key: 'swap-usdt',
                name: 'swapUSDT',
                link: '/coming-soon',
                icon: 'ios-medal-outline'
            },
            {
                key: 'witdraw',
                name: 'Witdraw',
                link: '/coming-soon',

                icon: 'ios-medal-outline'
            },
            {
                key: 'ottrade',
                name: 'OTTrade',
                link: '/coming-soon',

                icon: 'ios-card'
            }
        ]
    },
    {
        key: 'apps',
        name: 'applications',
        icon: 'ios-appstore-outline',
        child: [
            {
                key: 'communication_apps',
                name: 'communication',
                title: true
            },
            {
                key: 'contact',
                name: 'contact',
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
                name: 'social',
                title: true
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
                title: true
            },
            {
                key: 'productCatalogues',
                name: 'productCatalogues',
                link: '/pages/ecommerce',
                icon: 'ios-apps-outline'
            },
            {
                key: 'item_detail',
                name: 'productDetail',
                link: '/pages/product-details/1',
                icon: 'ios-card'
            },
            {
                key: 'checkoutPage',
                name: 'checkoutPage',
                link: '/pages/checkout',
                icon: 'ios-cart-outline'
            },
            {
                key: 'dynamic_invoice',
                name: 'dynamicInvoice',
                link: '/pages/invoice',
                icon: 'ios-document-outline'
            },
            {
                key: 'productivity_app',
                name: 'Productivity',
                title: true
            },
            {
                key: 'calendar',
                name: 'Calendar',
                link: '/pages/calendar',
                icon: 'ios-calendar-outline'
            },
            {
                key: 'task',
                name: 'taskBoard',
                link: '/pages/taskboard',
                icon: 'ios-checkmark-circle-outline'
            },
            {
                key: 'ho-so',
                name: 'Hồ Sơ',
                link: '/coming-soon',
                icon: 'ios-cloud'
            }
        ]
    },
    {
        key: 'admin',
        name: 'Admin',
        icon: 'md-person',
        link: '/admin-page',
        admin: 'admin',
        child: [
            {
                key: 'admin',
                name: 'Admin',
                icon: 'md-person',
                link: '/admin-page'
            },
            {
                key: 'allMember',
                name: 'All Member',
                icon: 'md-person',
                link: '/all-member'
            }
        ]
    }
];
