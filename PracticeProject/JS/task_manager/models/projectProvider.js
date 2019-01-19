

function ProjectProvider() {
    this.projects = [
        {
            id: 1,
            name: "Проект 1"
        },
        {
            id: 2,
            name: "Проект 2"
        },
        {
            id: 3,
            name: "Проект 3"
        },
        {
            id: 4,
            name: "Проект 4"
        },
        {
            id: 5,
            name: "Проект 5"
        },
    ];

    this.getAll = function() {
        return this.projects;
    };

    this.update = function(projects) {
        this.projects = projects;
    }
}