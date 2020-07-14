import TodoStore from "./model/todo"

class Store {
    constructor(){
        this.TodoStore = new TodoStore()
    }
}

// 抛出这个Store实例
export default new Store()