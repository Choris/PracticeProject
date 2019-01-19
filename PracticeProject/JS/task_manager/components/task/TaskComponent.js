function TaskComponent(projects) {
    this.model = new TaskProvider();
    this.projects = projects;
    let tasks = this.model.getAll();
    this.UI = TaskUI();
    let selfModel = this.model, self = this;
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    today = mm +'.'+ dd +'.'+ yyyy;

    this.readAll = function() {
        tasks = this.model.getAll();
        this.updateTable();
    };

    this.updateTable = function () {
        $$('task-list').parse(tasks);
        $$('listTP').parse(projects.model.getAll())
        tasks = this.model.getAll();
    };


    function addRow (taskId, theme, executor, projectId, endDate, state, isWarning) {     //???????
        tasks.push({taskId: Number(taskId), theme: theme, executor: executor, projectId: projectId,
            endDate: endDate, state: state, createDate: today, isWarning: isWarning});
        selfModel.update(tasks);
        self.updateTable();
    }


    this.setOnClick = function () {
        $$('plusTB').attachEvent("onItemClick", function(){
            let projectAddWin = $$('addW');
            if (typeof projectAddWin === 'undefined') {
                projectAddWin = webix.ui({
                    view: "window",
                    id: "addW",
                    head: "Добавить задачу",
                    width: 400,
                    height: 350,
                    position:'center',
                    body: {
                        rows:[
                            {height: 15},
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Идентификатор задачи', width: 150},
                                    {view:'text', id: 'taskIdT', placeholder:'6', },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Тема задачи', width: 150},
                                    {view:'text', id:'themeT', placeholder:'Тест тема' },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Исполнитель', width: 150},
                                    {view:'text', id:'executorT', placeholder:'Тестер' },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Проект №', width: 150},
                                    {view:'text', id:'projectIdT', placeholder:'1' },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Заканчивается', width: 150},
                                    {view:'text', id:'endsT', placeholder:'20.01.19' },
                                    {width: 15}
                                ]
                            },
                            { cols:[
                                    {width: 15},
                                    {view:'label', label:'Состояние', width: 150},
                                    {view:'text', id:'stateT', placeholder:'Присвоена' },
                                    {width: 15}
                                ]
                            },
                            {height: 15},
                            {cols:[
                                    {width: 15},
                                    {view:'button', id:'saveTB', label:'Сохранить'},
                                    {width: 150},
                                    {view:'button', id:'cancelTB', label:'Выйти'},
                                    {width: 15}
                                ]},
                            {}],

                    }
                });
            }
            $$('cancelTB').attachEvent('onItemClick', function () {
                $$('addW').close();
            });
            $$('saveTB').attachEvent('onItemClick', function () {
                let taskId = $$('taskIdT').getValue(), theme = $$('themeT').getValue(),
                    executor = $$('executorT').getValue(), projectId = $$('projectIdT').getValue(),
                 ends = $$('endsT').getValue(), state = $$('stateT').getValue();
                addRow(taskId, theme, executor, projectId, ends, state);
                $$('addW').close();
            });
            projectAddWin.show();
        });

        $$('listTP').attachEvent("onItemClick", function(id){
            $$('task-list').clearAll();
            let project = id;
            let newTasks = [];
            tasks.forEach( task => {
                if( task.projectId === project){
                    newTasks.push(task);
                }
            });
            tasks = newTasks;
            $$('task-list').parse(tasks);
            self.updateTable();

        });
    };
}


