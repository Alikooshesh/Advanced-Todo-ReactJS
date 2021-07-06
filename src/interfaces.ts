export interface Iheader{
    modalShow : boolean,
    setModalShow : Function
}

export interface ItaskModal{
    modalShow : boolean,
    setModalShow : Function,
    modalType : string,
    taskDate : number | null
}

export interface Itodo{
    text : string,
    priority : number,
    status : number,
    deadLine : Date
}

export interface ItodoTable{
    todoData : Itodo[]
}

export interface IlistSort{
    priority : number,
    status : number,
    deadLine : number
}