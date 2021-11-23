import React, { useState } from "react";

export const taskListContext = React.createContext({});

export const TaskListProvider = (props) => {

    const [taskList, setTaskList] = useState([]);

    return(
        <taskListContext.Provider value={{taskList, setTaskList}}>
            {props.children}
        </taskListContext.Provider>
    );
};