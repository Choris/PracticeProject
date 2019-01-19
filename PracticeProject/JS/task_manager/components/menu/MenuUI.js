function MenuUI() {
    return { id:'menu', hidden:true,
        cols:[
            {},
            { rows:[
                    {},
                    { type:'clean', cols:[
                            { view:"button", id:"taskB", label: "ЗАДАЧИ",       width:200, height: 200},
                            { view:"button", id:"projB", label: "ПРОЕКТЫ",      width:200, height: 200},
                            { view:"button", id:"userB", label: "ПОЛЬЗОВАТЕЛИ", width:200, height: 200},
                        ]
                    }
                ]},
            {}]
    }

}