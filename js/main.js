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
        footerImages: 'footer_img',
        footerImg: [
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
            '/Users/marcolepore/Documents/Boolean/proj-html-vuejs/img/footer_12.jpg',
        ],
    },
    methods: {
        printIcons: function() {
            for (i=0; i < icons.length; i++) {
                this.counter += 1;
            }
        },
        /*countDown: function() {
            // Set the date we're counting down to
            var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
            // Update the count down every 1 second
            var x = setInterval(function() {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                    
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            }, 1000);
        }*/
    },
}); 



    
