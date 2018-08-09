module.exports = {    
    locales: {
        "/": {
            lang: "fi",
            title: "Norma",
            description: "Koottu kirjasto lukion ohjelmille 🎓"
        }
    },

    searchMaxSuggestions: 7,
    serviceWorker: true,
    ga: 'UA-123582772-1',

    theme: "vue",
    themeConfig: {
        repo: "siikanen/norma",
        editLinks: true,     
        editLinkText: 'Muokkaa tätä sivua GitHubissa',
        lastUpdated: 'Päivitetty',
        repoLabel: 'Github',
        docsRepo: 'siikanen/norma',
        docsDir: 'docs',
        docsBranch: 'master',

        locales: {
            "/": {
                lastUpdated: 'Päivitetty',               
                nav: [
                    {text: "Etusivu", link:"/"},
                    {text: "Ohjeet",
                        items: [
                            {text:"Yleiset", link:"/ohjeet/yleiset/"},
                            {text:"Matematiikka", link:"/ohjeet/matematiikka/"},
                            {text:"Kemia", link:"/ohjeet/kemia/"},
                            {text:"Fysiikka", link:"/ohjeet/fysiikka/"}
                        ]
                    },
                    {text:"Osallistu kehittämiseen", link:"/osallistu/"}
                ]
            },
        },
    },

    head: [
        ["link", {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png?v=bOMOYElOBj"}],
        ["link", {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png?v=bOMOYElOBj"}],
        ["link", {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png?v=bOMOYElOBj"}],
        ["link", {rel:"shotcut icon", href:"/favicon.ico?v=bOMOYElOBj"}],
        ["link", {rel:"manifest", href:"/site.webmanifest?v=bOMOYElOBj"}],
        ["link", {rel:"mask-icon", href:"/safari-pinned-tab.svg?v=bOMOYElOBj", color:"#3eaf7c"}],
        ["meta", {name:"msapplication-TileColor", content:"#da532c"}],
        ["meta", {name:"theme-color", content:"#ffffff"}],

        ["meta", {name:"mobile-web-app-capable", content:"yes"}],
        ["meta", {name:"apple-mobile-web-app-capable", content:"yes"}],
        ["meta", {name:"application-name", content:"Norma"}],
        ["meta", {name:"apple-mobile-web-app-title", content:"Norma"}]
    ]
};
