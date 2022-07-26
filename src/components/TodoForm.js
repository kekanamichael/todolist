import React, { useState, useEffect, useRef } from "react";
import '../App.css';
function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputFocus = useRef(null)

    useEffect(() => {
      inputFocus.current.focus()
    })
   
    const handleChange = e => {
      setInput(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();

        props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
      }); 

      setInput('');
    };

    return (
      <div className="maincon">
          
          <form className="todoform" onSubmit={handleSubmit}>
            {props.edit ? ( 
              <>
            <input type="text" placeholder="Update task" value={input} name="text" className="todoTask"  onChange={handleChange}
                ref={inputFocus}
              />
              <button type="submit">Update</button>  </>
              ) : (
                <>
                 <input 
                type="text" 
                placeholder="Task name"
                value={input} 
                name="text"
                className="todoTask" 
                onChange={handleChange}
                ref={inputFocus}
              />
              <button className="todo-button" type="submit">Add to list</button>  </>)
              }
          </form>        
      </div>
    );
  }
  
  export default TodoForm;
  