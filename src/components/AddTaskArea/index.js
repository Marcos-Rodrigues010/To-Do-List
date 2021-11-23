import React, { useState, useContext } from 'react';
import { FormAddTask } from './styled';
import { taskListContext } from '../../context/taskList';

const AddTaskArea = () => {

    const [taskId, setTaskId] = useState(1);
    const [task, setTask] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const { taskList, setTaskList } = useContext(taskListContext);

    const addTask = () => {
        if(task === '' | taskStatus === ''){
            alert('Preencha todos os campos para continuar');
        }else{
            let newTask = [...taskList];
            newTask.push({taskId, task, taskStatus});
            setTaskList(newTask);
            setTaskId(taskId+1);
            setTask('');
            setTaskStatus('');
        }
    };

    return(
        <FormAddTask>
            <div className="area--input_task">
                <input 
                    id="task" 
                    placeholder="Adicionar tarefa" 
                    type="text"
                    value={task} 
                    onChange={e => setTask(e.target.value)}
                />
            </div>
            <div className="area--select_status">
                <select value={taskStatus} onChange={e => setTaskStatus(e.target.value)} id="status">
                    <option></option>
                    <option>A fazer</option>
                    <option>Em andamento</option>
                    <option>Feito</option>
                </select>
            </div>
            <div className="area--btn">
                <button id="addTask" onClick={addTask}>Adicionar Tarefa</button>
            </div>
        </FormAddTask>
    );
};

export default AddTaskArea;