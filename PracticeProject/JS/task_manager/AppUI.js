function appUI(app) {
    return { type: 'line',
        rows:[
            { view:"toolbar", height: 50, elements:[
                    { view:"label", label:"Some Name", badge:2},
                    {},
                    { view:"button", label:"Log Out", width: 100 }
                ]},
            {height: 5},
            app.projects.UI,

        ]
    };
}