
function MenuProvider() {

    this.removeSelected = function (selArr) {
        selArr.forEach(function (id) {
            this.users.forEach(function (user) {
                if (user.id == id)
                    user.removeItem();

            })
        })

    }
}