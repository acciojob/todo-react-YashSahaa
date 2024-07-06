import React, { useState } from "react";

const Todo = (count) =>{
    return(
        <div>
            <h3>Task+{count}</h3>
            <button>delete</button>
        </div>
    )
}

export default Todo;