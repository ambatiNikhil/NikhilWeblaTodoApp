import { useState } from "react" 


const TodoListManager = () => {
    const [todo,setTodo] = useState(" ")
    const [todos,setTodos] = useState([])
    const [editIndex , setEditIndex] = useState(undefined)

    const handleChange = (event) => {
        let activity = event.target.value
        setTodo(activity)
    }

    const handleSubmission = () => {
        if(todo === "" || todo.length > 20){
            alert("cannot enter this task")
        }
       else if(todos.includes(todo)){
            const activityIndex = todos.indexOf(todo)
            alert(`this activity is entered Before at ${activityIndex}`)
       }
        else if(editIndex !== undefined){
            const newEditedList = todos.map((currentTodo,index) => {
                if(index === editIndex){
                    return todo
                }else{
                    return currentTodo
                }
            })
            setTodos(newEditedList)
        }
        else{
            let allTodos = [...todos,todo]
            setTodos(allTodos)
            setTodo(" ")
        }
        
    }

    const handleEdit = (index) => {
        setEditIndex(index)
        let editingItem = todos[index]
        setTodo(editingItem)
    }

    const handleDelete = (deleteIndex) => {

        const newFilteredTodoList = todos.filter((todo,index) => {
            return index !== deleteIndex
        })
        setTodos(newFilteredTodoList)
    }

    return(
        <div>
        <h1>My Todo List</h1>
        <p><input type="text" value = {todo} onChange = {handleChange}/></p>

        <button className="btn btn-primary m 5" onClick = {handleSubmission}>Submit</button>

        <table  style = {{width : 800 , margin : 10}} className="table table-success table-striped">
        <thead>
            <tr>
                <td>sl.no</td>
                <td>Activity</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
           
            {todos.length === 0 ? (<h1 style={{color : "white"}}>Please Enter Activity</h1>) : todos.map((todo , index ) => {
                return(
                    <tr key ={index}>
                    <td>{index + 1}</td>
                    <td>{todo}</td>
                    <td><button className="btn btn-warning m 2" onClick = {() => {handleEdit(index)}}>Edit</button> 
                    <button className="btn btn-success" onClick = {() => {handleDelete(index)}}>Delete</button></td>
                </tr>
                )
            })}
            
        </tbody>

        </table>

        </div>
    )
}

export default TodoListManager