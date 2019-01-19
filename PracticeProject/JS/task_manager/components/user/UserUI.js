function UserUI() {
    return { id: 'users', hidden: true,
        rows: [
            { view:"toolbar", height: 45, elements:[
                    {view:"label",  label:"Пользователи"},
                    {view:"button", id:"plusUB",  label:"+",             width: 40,
                        template: "<img  src='icons\\plus-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"minusUB", label:"-",             width: 40,
                        template: "<img  src='icons\\x-mark-4-xxl.png' width=\"38\" height=\"38\"/>"},
                    {view:"button", id:"editUB",  label:"Редактировать", width: 40,
                        template: "<img  src='icons\\edit-2-xxl.png' width=\"38\" height=\"38\"/>"},
                    { width: 10 }
            ]
            },
            { view: "datatable", height: 5000,  select: "row", id: "user-list",
                columns:[
                    {id: "fullName",    header:"ФИО",   fillspace: 1},
                    {id: "role",        header:"Роль",  fillspace: 2}
                ],
            }
        ],
        
    };
}


/*,*/