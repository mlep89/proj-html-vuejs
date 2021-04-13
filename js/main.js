var root = new Vue ({
    el: "#root",
    data: {
        logo: "/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/logo.png",
        menu: "menu",
        liststyle: "liststyle",
        inline: "inline",
        header: ["home","pages","program","tickets","speakers","papers","blog","shortcodes","search" ],
        footer: [ 
            {
                "title":'about us',
                "text": 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                "fb": '',
                "linkedin": '',
                "linkedin": '',
                "google": '',
                "pinterest": '',
                "other": ''
            },
            {
                "title": 'recent news',
            },
            {
                "title": 'get your seat!',
            },
            {
                "title": 'gallery from last year',
            }
        ]
    },
    methods: {
        printMenu: function (){
            return "test scrittura";
        }
    },
}); 