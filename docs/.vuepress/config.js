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
    }
};