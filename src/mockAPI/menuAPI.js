export const MENU_API_RESULT_NO_SIGNIN = {
    status: 200,
    isSignedin: false,
    isPremiumUser: false,
    data: [
        {
            title: 'corporate',
            cardType: 'info',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'relationship',
            cardType: 'primary',
            isPremium: true,
            featureArrived: true,
        },
        {
            title: 'networking',
            cardType: 'danger',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'business',
            cardType: 'default',
            isPremium: true,
            featureArrived: false,
        },

    ]
}

export const MENU_API_RESULT_SIGNEDIN = {
    status: 200,
    isSignedin: true,
    isPremiumUser: false,
    data: [
        {
            title: 'corporate',
            cardType: 'info',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'relationship',
            cardType: 'primary',
            isPremium: true,
            featureArrived: true,
        },
        {
            title: 'networking',
            cardType: 'danger',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'business',
            cardType: 'default',
            isPremium: true,
            featureArrived: false,
        },

    ]
}

export const MENU_API_RESULT_PREMIUM_SIGNEDIN = {
    status: 200,
    isSignedin: true,
    isPremiumUser: true,
    data: [
        {
            title: 'corporate',
            cardType: 'info',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'relationship',
            cardType: 'primary',
            isPremium: true,
            featureArrived: true,
        },
        {
            title: 'networking',
            cardType: 'danger',
            isPremium: false,
            featureArrived: true,

        },
        {
            title: 'business',
            cardType: 'default',
            isPremium: true,
            featureArrived: false,
        },

    ]
}