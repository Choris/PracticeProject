function LogInComponent(app) {
    //this.model = new MenuProvider();
    this.UI = LoginUI();

    this.setOnClick = function(app) {
        $$('loginB').attachEvent("onItemClick", function(){
            inputLogin = $$('loginT').getValue();
            if(inputLogin !== ''){
                console.log();
                app.init();
                $$('showedNameL').setValue(inputLogin);
                $$('loginF').hide();
                $$('mainMenu').show();
            }
            else {
                alert('Введите логин')
            }
        });
    }
}