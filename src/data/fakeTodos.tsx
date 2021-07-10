import {Itodo} from "../interfaces";

const fakeTodos : Itodo[] = [
    {
        id : 0,
        text : "Watch Game of Thrones",
        priority : 0,
        status : 1,
        deadLine : new Date(1825581987368)
    },
    {
        id : 1,
        text : "Go to the gym",
        priority : 2,
        status : 2,
        deadLine : new Date()
    },
    {
        id : 2,
        text : "Go shopping",
        priority : 1,
        status : 2,
        deadLine : new Date()
    },
    {
        id : 3,
        text : "Do the dishes",
        priority : 2,
        status : 0,
        deadLine : new Date(1425581987368)
    }
]

export default fakeTodos