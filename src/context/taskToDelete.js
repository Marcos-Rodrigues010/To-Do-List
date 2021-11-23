import React, { useState } from "react";

export const taskToDeleteContext = React.createContext({});

export const TaskToDeleteProvider = (props) => {

    const [indexToDelete, setIndexToDelete] = useState('');

    return(
        <taskToDeleteContext.Provider value={{indexToDelete, setIndexToDelete}}>
            {props.children}
        </taskToDeleteContext.Provider>
    );
};