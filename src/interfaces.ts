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