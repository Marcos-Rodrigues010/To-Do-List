import React, { useContext, useEffect } from 'react';
import { taskListContext } from '../../context/taskList';
import { modalVisibilityControlContext } from '../../context/modalVisibilityControl';
import { taskToDeleteContext } from '../../context/taskToDelete';
import { Modal } from './styled';

const ModalArea = () => {

    const { taskList, setTaskList } = useContext(taskListContext);
    const { visibleModal, setVisibleModal } = useContext(modalVisibilityControlContext);
    const { indexToDelete } = useContext(taskToDeleteContext);

    useEffect(() => {
        if(visibleModal){
            document.getElementById('modal').style.display = 'flex';
        }else if(!visibleModal){
            document.getElementById('modal').style.display = 'none';
        }
    }, [visibleModal]);

    function deleteTask(){
        let list = [...taskList];
        list.splice(indexToDelete, 1);
        setTaskList(list);
        setVisibleModal(false);
    }

    
    return(
        <Modal id="modal">
            <div className="modal--content">
                <div className="modal--content_title">
                    <h3>Deseja realmente remover esta tarefa?</h3>
                </div>
                <div className="modal--content_btn">
                    <div className="btn" id="yesBtn" onClick={deleteTask}>Sim</div>
                    <div className="btn" id="noBtn" onClick={() => setVisibleModal(false)}>Não</div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalArea;