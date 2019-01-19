function menuAppUI(app) {
    return {
        rows:[
            { view:"toolbar", id: 'mainMenu', hidden:true,  height: 60, elements:[
                    {width: 10},
                    { view:"button", id:'homeB', label:"Домой", width: 200, hidden: true,
                        template: "<img  src='icons\\home-5-xxl.png' width=\"50\" height=\"50\"/>",},
                    { gravity: 1},
                    { view:"label", id: 'showedNameL', label:"Джон Кармак", width: 150},
                    { view:"button", id: 'logOutB', label:"Выйти",
                        template: "<img  src='icons\\arrow-55-xxl.png' width=\"50\" height=\"50\"/>",  width: 80}
                ]},
            app.menu.UI,
            app.projects.UI,
            app.users.UI,
            app.tasks.UI,
            app.login.UI

        ]
    };
}
// перенести в user component?