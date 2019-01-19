

function UserProvider() {
    this.users = [
        {
            id: 1,
            fullName:   "Джон 1",
            role:       "Админ"
        },
        {
            id: 2,
            fullName:   "Джон 2",
            role:       "Админ"
        },
        {
            id: 3,
            fullName:   "Джон 3",
            role:       "Админ"
        },
        {
            id: 4,
            fullName:   "Джон 4",
            role:       "Админ"
        },
        {
            id: 5,
            fullName:   "Джон 5",
            role:       "Админ"
        },
    ];
    
    
    this.getAll = function() {
        return this.users;
    };


    this.update = function(users) {
        this.users = users;
    }

    this.removeSelected = function (selArr) {
        selArr.forEach(function (id) {
            this.users.forEach(function (user) {
                if (user.id == id)
                    user.removeItem();

            })
        })

    }
}