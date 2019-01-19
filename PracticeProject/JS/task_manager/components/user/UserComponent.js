function UserComponent() {
    this.model = new UserProvider();
    let users = this.model.getAll();
    this.UI = UserUI();
    let selfModel = this.model, self = this;

    this.readAll = function() {
        users = this.model.getAll();
        this.updateTable()
    };

    this.updateTable = function () {
        $$('user-list').parse(users);
    };

    function addRow (name, role) {     //???????
        users.push({fullName: name, role: role});
        selfModel.update(users);
        self.updateTable();
    }

    this.setOnClick = function () {
        $$('plusUB').attachEvent("onItemClick", function(){
            let projectAddWin = $$('addW');
            if (typeof projectAddWin === 'undefined') {
                projectAddWin = webix.ui({
                    view: "window",
                    id: "addW",
                    head: "Добавить пользователя",
                    width: 400,
                    height: 200,
                    position:'center',
                    body: {
                        rows:[
                            {height: 15},
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'ФИО', width: 100},
                                    {view:'text', id: 'fnameT', value:'Жон Жонович', },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Роль', width: 100},
                                    {view:'text', id:'roleT', value:'Пользователь' },
                                    {width: 15}
                                ]
                            },
                            {height: 15},
                            {cols:[
                                    {width: 15},
                                    {view:'button', id:'saveUB', label:'Сохранить'},
                                    {width: 150},
                                    {view:'button', id:'cancelUB', label:'Отмена'},
                                    {width: 15}
                                ]},
                            {}],

                    }
                });
            }
            $$('cancelUB').attachEvent('onItemClick', function () {
                $$('addW').close();
            });
            $$('saveUB').attachEvent('onItemClick', function () {
                let name = $$('fnameT').getValue(), role = $$('roleT').getValue();
                addRow(name, role);
                $$('addW').close();
            });
            projectAddWin.show();
        });


        $$('editUB').attachEvent("onItemClick", function(){
            let projectEdWin = $$('edW');
            if (typeof projectEdWin === 'undefined') {
                projectEdWin = webix.ui({
                    view: "window",
                    id: "edW",
                    head: "Edit Project",
                    width: 400,
                    height: 200,
                    position:'center',
                    body: {
                        rows:[
                            {height: 15},
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'ID проекта', width: 100},
                                    {view:'text', id: 'fnameT', placeholder: $$('project-list').getSelectedItem().id },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Название проекта', width: 100},
                                    {view:'text', id:'roleT', placeholder:'test' },
                                    {width: 15}
                                ]
                            },
                            {height: 15},
                            {cols:[
                                    {width: 15},
                                    {view:'button', id:'saveUB', label:'Сохранить'},
                                    {width: 150},
                                    {view:'button', id:'cancelUB', label:'Отмена'},
                                    {width: 15}
                                ]},
                            {}],

                    }
                });
            }
            $$('cancelUB').attachEvent('onItemClick', function () {
                $$('edW').close();
            });
            $$('saveUB').attachEvent('onItemClick', function () {
                let oldId = $$('user-list').getSelectedItem().id;
                let id = $$('fnameT').getValue(), title = $$('roleT').getValue();
                editRow(oldId, id, title );
                $$('edW').close();
            });
            projectEdWin.show();
        });
    };

    /*function editRow (oldId, id, name) {
        this.projects.forEach(function (project) {
            if (project.id == oldId){
                project.id = id;
                project.name = name;
            }
        });
        selfModel.update(projects);
        self.updateTable()
    };*/



}