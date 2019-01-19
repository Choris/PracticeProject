function MenuComponent() {
    //this.model = new MenuProvider();
    this.UI = MenuUI();

    this.setOnClick = function(app) {
        $$('homeB').hide();
        $$('projB').attachEvent("onItemClick", function(){
            app.openProjects();   //создавать ли новую или на модуль встраивать всё в роус
        });
        $$('userB').attachEvent("onItemClick", function(){
            $$('homeB').show();
            app.openUsers();
        });
        $$('taskB').attachEvent("onItemClick", function(){
            $$('homeB').show();
            app.openTasks();
        });
        $$('homeB').attachEvent("onItemClick", function(){
            $$('homeB').show();
            app.goHome();
        });
        $$('logOutB').attachEvent("onItemClick", function(){
            app.logOut();
        })
    }
}
 //сейвы

/*
    $$('taskB').attachEvent("taskBClick", function(){
        console.log('a');
    })*/



//let users = this.model.getAll();
//console.log(users + "component");
//$$('test').add(users);  vty. menu to appui go book???

