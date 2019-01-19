function ProjectUI() {
    return { id:'projects', hidden: true,
        rows: [
            { view:"toolbar", height: 42, elements:[
                    {view:"label",  label:"Проекты"},
                    {view:"button", id:"plusPB",  label:"+",    width: 40,
                        template: "<img  src='icons\\plus-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"minusPB", label:"-",    width: 40,
                        template: "<img  src='icons\\x-mark-4-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"editPB",  /*label:"Редактировать",*/ width: 42, marginTop: 10,
                        template: "<img  src='icons\\edit-2-xxl.png' width=\"38\" height=\"38\"/>"},
                    { width: 10 }
                ]
            },
            { view: "datatable", height: 5000,  select: "row", id: "project-list", multiselect: true,
                columns:[
                    {id: "id",   header:"#", fillspace: 1},
                    {id: "name", header:"Название проекта",       fillspace: 3},

                ]},
        ],
    };
}


/*,
            {
                view: "window",
                id: "addW",
                head: "Add Project",
                width: 200,
                height: 200,
                body: {
                    template: "Some text"

                }
            }*/