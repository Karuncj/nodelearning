export function TodoItem(completed,id,title){
    return (
    <li key={id}>
      <label>
        <input type="checkbox" checked={completed}
        onChange={e => toggleTodo(todo.id,e.target.checked)}/>
        {title}
      </label>
      <button 
      onClick={()=>deleteTodo(id)}
       className="btn-delete">Delete</button>
    </li>
    )
}