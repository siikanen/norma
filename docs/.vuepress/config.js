module.exports = {
    title: "Norma",
    description: "Koottu kirjasto lukion ohjelmille 🎓",

    searchMaxSuggestions: 7,
    serviceWorker: true,

    themeConfig: {
        nav: [
            {text: "Etusivu", link:"/"},
            {text: "Ohjeet",
                items: [
                    {text:"Kemia", link:"/ohjeet/kemia/"},
                    {text:"Fysiikka", link:"/ohjeet/fysiikka/"},
                ]
            },
            {text:"Osallistu kehittämiseen", link:"/osallistu/"}
        ]
    },

    head: [
        ["link", {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}],
        ["link", {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}],
        ["link", {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}],
        ["link", {rel:"manifest", href:"/site.webmanifest"}],
        ["link", {rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}],
        ["meta", {name:"msapplication-TileColor", content:"#da532c"}],
        ["meta", {name:"theme-color", content:"#b4dde6"}],

        ["meta", {name:"mobile-web-app-capable", content:"yes"}],
        ["meta", {name:"apple-mobile-web-app-capable", content:"yes"}],
        ["meta", {name:"application-name", content:"Norma"}],
        ["meta", {name:"apple-mobile-web-app-title", content:"Norma"}]
    ]
};
