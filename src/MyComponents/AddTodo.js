import React, { useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or description cannot be blank");
        }
        else
        {
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
  
  return (
    <div className="container my-1" >
        <h4>Add a Todo</h4>
      <form onSubmit={submit}>
  <div className="mb-1">
    <label htmlFor="title" className="form-label">Todo title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
 </div>
  <div className="mb-1">
    <label htmlFor="desc" className="form-label">Todo description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

