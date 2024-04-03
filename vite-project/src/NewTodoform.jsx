import { useState } from "react"
import "./styles.css"
export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e)
  {
    e.preventDefault()
    if(newItem==="")return 
    onSubmit(newItem)
    setNewItem("")
  }

return( 
<form onSubmit={handleSubmit} className="new-item">
<div className="form-row">
  <label htmlFor="item">New item</label>
  <input 
  value={newItem}
  onChange={(e )=> setNewItem(e.target.value)}
   type="text" id="item" name="item" />
</div>
<button className="btn">Add item</button>
</form>
)
}