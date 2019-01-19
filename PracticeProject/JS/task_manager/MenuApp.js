function MenuApp() {
    this.projects = new ProjectComponent();
    this.users = new UserComponent();
    this.tasks = new TaskComponent(this.projects);
    this.menu = new MenuComponent();
    this.login = new LogInComponent();
    this.UI = menuAppUI(this);
    let UIs = ['tasks', 'users', 'menu', 'projects'];

    this.init = function() {
        //webix.ui(this.UI);
        $$('menu').show();
        this.menu.setOnClick(this);
    };

    this.logOut = function () {
      show_hide('menu');
      $$('menu').hide();
      $$('mainMenu').hide();
      $$('loginF').show();
    };

    this.logIn = function() {
        webix.ui(this.UI);
        $$('loginF').show();
        this.login.setOnClick(this);
    };

    this.openUsers = function () {
        show_hide('users');
        this.users.readAll();
        this.users.setOnClick();
    };

    this.openTasks = function () {
        show_hide('tasks');
        this.tasks.readAll();
        this.tasks.setOnClick();
    };

    this.openProjects = function () {
        show_hide('projects');
        this.projects.readAll();
        this.projects.setOnClick();
    };

    function show_hide(name) {
        UIs.forEach(UI => {
            if (name === UI){
                $$(UI).show();
                if(UI !== 'menu')
                    $$('homeB').show();
                else
                    $$('homeB').hide();
            }
            else 
                $$(UI).hide();
        })

    }

    this.goHome = function () {
        show_hide('menu');
    };



}
//this.cproject.readAll();
//var list = this.cproject.readAll();
//console.log(list[1].name + "app");