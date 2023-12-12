const app = {
    data() {
        return {
            taskInput: '',
            numberTasks: parseInt(localStorage.getItem("numberTasks") || 0),
            tasksList: [],
            dateTime:  localStorage.getItem("DateTime") || ''
        }
    },
    methods: {

        getCurrentDateTime() {
           setInterval(() => {
                 const currentDateTime = new Date();
                 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
                 const formattedDateTime = currentDateTime.toLocaleDateString('pt-BR', options);
                 localStorage.setItem("DateTime", formattedDateTime);
           }, 1000) 
        },    

        getTasks() {
            this.tasksList = [];
            let count = 0;
            for (let i = 0; i < this.numberTasks; i++) {
                count += 1;
                const taskDescription = localStorage.getItem(`task-${count}`);               
                this.tasksList.push(taskDescription);
            }
        },

        addTasks() {
            if (this.taskInput !== '') {
                this.numberTasks += 1;
                localStorage.setItem(`task-${this.numberTasks}`, this.taskInput);
                localStorage.setItem("numberTasks", this.numberTasks);
                this.taskInput = '';

                this.getTasks();
            }
        },

        removeTask(index) {            
            const taskId = index + 1; 
            localStorage.removeItem(`task-${taskId}`);
            
            this.tasksList.splice(index, 1);
            this.numberTasks -= 1
            localStorage.setItem("numberTasks", this.numberTasks);
        }
    },
    mounted() {
        this.getTasks();
        this.getCurrentDateTime();
    }
}

Vue.createApp(app).mount('#app');