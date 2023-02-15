import type ToDoItem from "./to-do-items"

interface ToDo{
    id: string,
    title: string,
    list: ToDoItem[],
}

export default ToDo;