function LoginUI() {
    return {
        cols:[
            {},
            {rows:[
                    {},
                    {view:"form", id:"loginF", width:400, position: 'center',
                        elements:[
                            { view:"text", label:"Логин", id:"loginT", placeholder:'Джон'},
                            { view:"text", type:"password", label:"Пароль", id:"passT", placeholder: '••••••••'},
                            { margin:5, cols:[
                                    { view:"button", id: 'loginB', value:"Login" , type:"form"},
                                ]}
                        ]},
                    {}
                ]},
            {}]
    }
}

/*view:"form", id:"loginF", width:30, position: 'center',
        elements:[
            { view:"text", label:"Email", name:"email"},
            { view:"text", type:"password", label:"Password", name:"password"},
            { margin:5, cols:[
                    { view:"button", id: 'loginB', value:"Login" , type:"form"},
            ]}
        ]*/


/*view: "window",
        id: "loginW",
        head: "LogIn",
        width: 400,
        height: 350,
        position:'center',
        body: {
            rows:[
                {height: 15},
                { cols:[
                        {width: 15},
                        {view:'label', label:'Логин', width: 150},
                        {view:'text', id: 'loginT', value:'log' },
                        {width: 15}
                    ]
                },
                { cols:[
                        {width: 15},
                        {view:'label', label:'Пароль', width: 150},
                        {view:'text', id:'passT', value:'pass' },
                        {width: 15}
                    ]
                },
                {cols:[
                        {width: 15},
                        {view:'button', id:'loginB', label:'Войти'},
                        {width: 15}
                    ]},
                ]
        }*/