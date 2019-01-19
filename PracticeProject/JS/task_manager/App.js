function App() {

    this.init = function() {
        this.projects = new ProjectComponent();

        this.UI = appUI(this);
        //var list = this.projects.readAll();
        //console.log(list[1].name + "app");
        webix.ui(this.UI);
        this.projects.readAll();
        this.projects.setOnClick();

    }

}