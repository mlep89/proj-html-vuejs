var root = new Vue ({
    el: "#root",
    data: {
        logo: "/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/logo.png",
        menu: "menu",
        liststyle: "liststyle",
        inline: "inline",
        footerUppercase: "footer_uppercase",
        pGrey: "p_grey",
        myBtn: "my_btn",
        footerLi: "footer_li",
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
                "items": ['sem port mollis parturient', 'nullam lorem mattis purus', 'nibh sem sit ullamcorper', 'donec luctus imperdiet', 'magna pars studiorum'],
            },
            {
                "title": 'get your seat!',
                "claim": 'Book for your seat before it\'s too rate. We provide variety of ticket options.',
                "btn": 'check out tickets!'
            },
            {
                "title": 'gallery from last year',
                "img": [
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_1.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_2.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_3.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_4.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_5.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_6.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_7.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_8.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_9.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_10.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_11.jpg',
                    '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_12.jpg']
            }
        ],
        bottomFooter: ['Copyright GoodLayers, All Rights Reserved', 'About Us | Accomodation | Call For Paper | Contact Us'],
    },
    methods: {
        printMenu: function (){
            return "test scrittura";
        }
    },
}); 