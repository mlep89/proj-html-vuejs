var root = new Vue ({
    el: "#root",
    data: {
        search: "fas fa-search minus",
        logo: "/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/logo.png",
        menu: "menu",
        liststyle: "liststyle",
        inline: "inline",
        footerUppercase: "footer_uppercase",
        footerIcons: "footer_icons",
        pGrey: "p_grey",
        myBtn: "my_btn",
        footerLi: "footer_li",
        footerBtn: "footer_btn",
        footerBottom: "footer_bottom",
        footerBottomContainer: "footer_bottom_container",
        header: ["home","pages","program","tickets","speakers","papers","blog","shortcodes"],
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
                    'footer_1.jpg',
                    'footer_2.jpg',
                    'footer_3.jpg',
                    'footer_4.jpg',
                    'footer_5.jpg',
                    'footer_6.jpg',
                    'footer_7.jpg',
                    'footer_8.jpg',
                    'footer_9.jpg',
                    'footer_10.jpg',
                    'footer_11.jpg',
                    'footer_12.jpg']
            }
        ],
        bottomFooter: ['Copyright GoodLayers, All Rights Reserved', 'About Us | Accomodation | Call For Paper | Contact Us'],
        icons: [
            '<i class="fab fa-facebook-square"></i>',
            '<i class="fab fa-twitter-square"></i>',
            '<i class="fab fa-linkedin"></i>',
            '<i class="fab fa-google-plus-square"></i>',
            '<i class="fab fa-pinterest-square"></i>',
            '<i class="fab fa-whatsapp-square"></i>'
        ],
    },
    methods: {
        printIcons: function() {
            for (i=0; i < icons.length; i++) {
                this.counter += 1;
            }
        }
    },
}); 