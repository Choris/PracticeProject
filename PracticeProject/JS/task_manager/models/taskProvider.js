

function TaskProvider() {
    this.tasks = [
        {
            taskId: 1,
            theme: "Тема 1",
            executor: 'Джон 1',
            projectId: '1',
            createDate: "00.00.0000",
            endDate: "00.00.0000",
            state: "В процессе",
            isWarning: '!'
        },
        {
            taskId: 2,
            theme: "Тема 2",
            executor: 'Джон 1',
            projectId: '1',
            createDate: "00.00.0000",
            endDate: "00.00.0000",
            state: "Закончено",
            isWarning: ''
        },
        {
            taskId: 3,
            theme: "Тема 3",
            executor: 'Джон 1',
            projectId: '2',
            createDate: "00.00.0000",
            endDate: "00.00.0000",
            state: "В процессе",
            isWarning: ''
        },
        {
            taskId: 4,
            theme: "Тема 4",
            executor: 'Джон 1',
            projectId: '3',
            createDate: "00.00.0000",
            endDate: "00.00.0000",
            state: "Закончено",
            isWarning: ''
        },
        {
            taskId: 5,
            theme: "Тема 5",
            executor: 'Джон 1',
            projectId: '2',
            createDate: "00.00.0000",
            endDate: "00.00.0000",
            state: "В процессе",
            isWarning: '!'
        },
    ];

    this.getAll = function() {
        return this.tasks;
    };

    this.update = function(tasks) {
        this.tasks = tasks;
    }
}