const app = {
    data() {
        return {
           content: document.querySelector('#app'), 
           numberTasks: localStorage.getItem("numberTasks") || 0, 
           task: 'teste'         
        }
    },
    methods: { 

        render() {            

        this.content.innerHTML = `

        <header class="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <h1>Lista de tarefas</h1>
            <span class="mb-4 mt-4">25 nov 2023</span>
            <div>
                <button type="button" class="btn btn-success m-2">Concluída</button>
                <button type="button" class="btn btn-success m-2">Pendente</button>
            </div>
        </header>       

        <form class="d-flex justify-content-center align-items-center p-3">
            <div class="d-flex flex-row col-md-6">
                <input id="input" type="text" class="form-control text-center border-right-bottom-radius" maxlength="20" minlength="3" placeholder="Digite uma tarefa">
                <button @click="setTasks()" class="btn btn-success border-left-top-radius" type="button">Adicionar</button>
            </div>
        </form> 

        <ul id="list" class="d-flex justify-content-start align-items-center flex-column mt-5 p-0"> 

        </ul>`
        list.innerHTML = ''  

        for(let i = 0; i < this.numberTasks - 1; i++) {                        
            list.innerHTML += `
            <li class="mb-3">
                <div  class="d-flex justify-content-center align-items-center flex-row">
                    <span class="bg-secondary text-light rounded-start-3 m-0 p-2 text-center text-center text-break">{{ task }}</span>                    
                    <button class="bg-danger text-light border-0 m-0 p-2"><img class="bg-danger" src="./icons/x-lg.svg"></button>
                    <button class="bg-success text-light rounded-end-2 border-0 m-0 p-2"><img class="bg-success" src="./icons/check-lg.svg"></button>
                </div>
            </li> `       
        }        

        },

        
    },
    mounted() {
        this.render()        
    }
}

Vue.createApp(app).mount('#app')



