module.exports = {
    title: "Norma",
    description: "Koottu kirjasto lukion ohjelmille",

    searchMaxSuggestions: 7,

    themeConfig: {
        nav: [
            {text: "Etusivu", link:"/"},
            {text: "Ohjeet",
                items: [
                    {text:"Kemia", link:"/kemia/"},
                    {text:"Fysiikka", link:"/fysiikka/"},
                ]
            },
            {text:"Osallistu kehittämiseen", link:"/osallistu/"}
        ]
    }
};