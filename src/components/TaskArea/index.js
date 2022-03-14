import React, { useContext, useState, useEffect } from 'react';
import { taskListContext } from '../../context/taskList';
import { modalVisibilityControlContext } from '../../context/modalVisibilityControl';
import { taskToDeleteContext } from '../../context/taskToDelete';
import { Area, WithoutTask } from './styled';


const TaskArea = () => {

    const { taskList, setTaskList } = useContext(taskListContext);
    const { setVisibleModal } = useContext(modalVisibilityControlContext);
    const { setIndexToDelete } = useContext(taskToDeleteContext);
    const [toDoTask, setToDoTask] = useState([]);
    const [inProgressTask, setInProgressTask] = useState([]);
    const [doneTask, setDoneTask] = useState([]);
    
    useEffect(() => {
        let list = [...taskList];
        let tdt = list.filter(i => {
                return i.taskStatus === 'A fazer';
        });
        let ipt = list.filter(i => {
                return i.taskStatus === 'Em andamento';
        });

        let dt = list.filter(i => {
                return i.taskStatus === 'Feito';
        });

        setToDoTask(tdt);
        setInProgressTask(ipt);
        setDoneTask(dt);
    }, [taskList]);

    function dragStart(e){
      e.currentTarget.classList.add('dragging');
    };

    function dragEnd(e){
        e.currentTarget.classList.remove('dragging');
    };

    function dragOver(e){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    };

    function dragLeave(e){
        e.currentTarget.classList.remove('hover');
    };

    function drop(e){
        e.currentTarget.classList.remove('hover');
        let task = document.querySelector('.dragging');
        task.classList.remove('dragging');
        updateTaskList(e, task);
    };

    function updateTaskList(area, task){
        let list = [...taskList];
        let index = list.findIndex(el => {
            return el.taskId === Number(task.id);
        });
        if(area.currentTarget.id === 'toDo'){
            list[index].taskStatus = 'A fazer';
        } else if(area.currentTarget.id === 'inProgress'){
            list[index].taskStatus = 'Em andamento';
        } else if(area.currentTarget.id === 'done'){
            list[index].taskStatus = 'Feito';
        };
        setTaskList(list);
    }

    function openModal(e){
        let parent = e.target.parentNode;
        let list = [...taskList];
        let index = list.findIndex(el => {
            return el.taskId === Number(parent.id);
        })
        setIndexToDelete(index);
        setVisibleModal(true);
    }


    return(
        taskList.length > 0 ?
        <Area>
            <div className="area" id="toDo" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
                <div className="area--title">
                    <h4>Tarefas a Fazer</h4>
                </div>
                    {toDoTask.length > 0 &&
                        toDoTask.map((i, k)=>{
                            return(
                                <div 
                                    draggable="true" 
                                    className='toDoTask'
                                    key={k}
                                    id={i.taskId.toString()}
                                    onDragStart={dragStart}
                                    onDragEnd={dragEnd}>
                                        <div>{i.task}</div>
                                        <div className='deleteTask' onClick={openModal}>X</div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="area" id="inProgress" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
                <div className="area--title">
                    <h4>Tarefas em andamento</h4>
                </div>
                    {inProgressTask.length > 0 &&
                        inProgressTask.map((i, k)=>{
                            return(
                                <div 
                                    draggable="true" 
                                    className='inProgressTask'
                                    key={k}
                                    id={i.taskId.toString()}
                                    onDragStart={dragStart}
                                    onDragEnd={dragEnd}>
                                        <div>{i.task}</div>
                                        <div className='deleteTask' onClick={openModal}>X</div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="area" id="done" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
                <div className="area--title">
                    <h4>Tarefas concluídas</h4>
                </div>
                    {doneTask.length > 0 &&
                        doneTask.map((i, k)=>{
                            return(
                                <div 
                                    draggable="true" 
                                    className='doneTask'
                                    key={k}
                                    id={i.taskId.toString()}
                                    onDragStart={dragStart}
                                    onDragEnd={dragEnd}>
                                        <div>{i.task}</div>
                                        <div className='deleteTask' onClick={openModal}>X</div>
                                </div>
                            )
                        })
                    }
            </div>
        </Area> 
        : <WithoutTask>Não há tarefas para exibir</WithoutTask>
    );
};

export default TaskArea;