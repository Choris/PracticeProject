function TaskUI() {
    return { id: 'tasks', hidden: true,
        cols:[
            { width: 300, rows: [
                { view:"toolbar", height: 42, elements:[
                    {view:"label",  label:"Проекты"},
                    { width: 10 }
                    ]},

                /*{ view: "datatable",  select: "row", id: "proj-list", multiselect: true, //list
                    columns:[
                        {id: "projId",      header:"#",         fillspace: 2},
                        {id: "title",       header:"Тема",      fillspace: 15}
                    ]
                },*/
                { view:"list", id:'listTP', height: 5000, template:"#name#", select:true},

            ]},
            {width: 5},
            { rows: [
                { view:"toolbar", height: 42, elements:[
                    {view:"label",  label:"Задачи"},
                    {view:"button", id:"plusTB",  label:"+",             width: 40,
                        template: "<img  src='icons\\plus-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"minusTB", label:"-",             width: 40,
                        template: "<img  src='icons\\x-mark-4-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"editTB",  label:"Редактировать", width: 40,
                        template: "<img  src='icons\\edit-2-xxl.png' width=\"38\" height=\"38\"/>"},
                    { width: 10 }
                ]},
                { view: "datatable",  select: "row", id: "task-list", multiselect: true, height: 5000   ,
                    columns:[
                        {id: "taskId",      header:"#",         fillspace: 2},
                        {id: "theme",       header:"Тема",      fillspace: 8},
                        {id: "executor",    header:"Присвоена", fillspace: 8},
                        {id: "projectId",   header:"Проект №", fillspace: 2},
                        {id: "createDate",  header:"Создан",    fillspace: 4},
                        {id: "endDate",     header:"Дедлайн",   fillspace: 4},
                        {id: "state",       header:"Состояние", fillspace: 3},
                        {id: "isWarning",   header:"",          fillspace: 1}
                ]}
            ]}
        ]

    };
}