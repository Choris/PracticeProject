function ProjectComponent() {
    this.model = new ProjectProvider();
    let projects = this.model.getAll();
    this.UI = ProjectUI();
    let selfModel = this.model, self = this;




    this.readAll = function() {
        projects = this.model.getAll();
        this.updateTable();
        //$$('projUI').show();
    };

    this.updateTable = function () {
        $$('project-list').parse(projects);
    };

    this.removeRows = function (idArr) {
        idArr.forEach(function (id) {
            this.projects.forEach(function (project) {
                if (project.id == id)
                    project.removeItem();
            })
        });
        projects = this.model.getAll();

    };

    function addRow (id, name) {     //???????
        projects.push({id: Number(id), name: name});
        selfModel.update(projects);
        self.updateTable();
    }

    function editRow (oldId, id, name) {
        this.projects.forEach(function (project) {
            if (project.id == oldId){
                project.id = id;
                project.name = name;
            }
        });
        selfModel.update(projects);
        self.updateTable()
    }

    this.setOnClick = function () {
        $$('plusPB').attachEvent("onItemClick", function(){
            let projectAddWin = $$('addW');
            if (typeof projectAddWin === 'undefined') {
                projectAddWin = webix.ui({
                    view: "window",
                    id: "addW",
                    head: "Добавить проект",
                    width: 400,
                    height: 200,
                    position:'center',
                    body: {
                        rows:[
                            {height: 15},
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'ID Проекта', width: 100},
                                    {view:'text', id: 'idT', placeholder:'6', },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Название проекта', width: 100},
                                    {view:'text', id:'titleT', placeholder:'test' },
                                    {width: 15}
                                ]
                            },
                            {height: 15},
                            {cols:[
                                    {width: 15},
                                    {view:'button', id:'savePB', label:'Сохранить'},
                                    {width: 150},
                                    {view:'button', id:'cancelPB', label:'Отмена'},
                                    {width: 15}
                                ]},
                            {}],

                    }
                });
            }
            $$('cancelPB').attachEvent('onItemClick', function () {
                $$('addW').close();
            });
            $$('savePB').attachEvent('onItemClick', function () {
                let id = $$('idT').getValue(), title = $$('titleT').getValue();
                addRow(id, title);
                $$('addW').close();
            });
            projectAddWin.show();
        });


        /*$$('editPB').attachEvent("onItemClick", function(){
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
                                    {view:'label', label:'ID Проекта', width: 100},
                                    {view:'text', id: 'idT', placeholder: $$('project-list').getSelectedItem().id },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Название проекта', width: 100},
                                    {view:'text', id:'titleT', placeholder:'test' },
                                    {width: 15}
                                ]
                            },
                            {height: 15},
                            {cols:[
                                    {width: 15},
                                    {view:'button', id:'savePB', label:'Сохранить'},
                                    {width: 150},
                                    {view:'button', id:'cancelPB', label:'Отмена'},
                                    {width: 15}
                                ]},
                            {}],

                    }
                });
            }
            $$('cancelPB').attachEvent('onItemClick', function () {
                $$('edW').close();
            });
            $$('savePB').attachEvent('onItemClick', function () {
                let oldId = $$('project-list').getSelectedItem().id;
                let id = $$('idT').getValue(), title = $$('titleT').getValue();
                editRow(oldId, id, title );
                $$('edW').close();
            });
            projectEdWin.show();
        });*/
    };

}


