export interface Iheader{
    modalShow : boolean,
    setModalShow : Function,
    setSearchText: Function,
    searchText : string,
    todoData : Itodo[],
    setTodoData : Function
}

export interface IaddTaskModal{
    modalShow : boolean,
    setModalShow : Function,
    todoData : Itodo[],
    setTodoData : Function
}

export interface IeditTaskModal{
    editModalShow : boolean,
    setEditModalShow : Function,
    todoData : Itodo[],
    setTodoData : Function,
    todoId : number
}

export interface IremoveTaskModal{
    removeModalShow : boolean,
    setRemoveModalShow : Function,
    todoData : Itodo[],
    setTodoData : Function,
    todoId : number,
    setTodoID : Function
}

export interface Itodo{
    id : number,
    text : string,
    priority : number,
    status : number,
    deadLine : Date,
    infoText : string
}

export interface ItodoTable{
    todoData : Itodo[] ,
    setTodoData : Function,
    searchText : string,
    editModalShow : boolean,
    setEditModalShow : Function,
}

export interface ItodoTr{
    index : number,
    text : string,
    priority : number,
    status : number,
    deadLine : Date,
    id : number,
    editTodo : Function,
    removeTodo : Function
}

export interface IlistSort{
    priority : number,
    status : number,
    deadLine : number
}