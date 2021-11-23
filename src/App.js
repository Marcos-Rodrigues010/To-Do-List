import React from 'react';
import './App.css';
import { TaskListProvider } from './context/taskList';
import { ModalProvider } from './context/modalVisibilityControl';
import { TaskToDeleteProvider } from './context/taskToDelete';
import Modal from './components/Modal';
import AddTaskArea from './components/AddTaskArea';
import TaskArea from './components/TaskArea';

function App() {
  return (
    <div id="container">
      <TaskListProvider>
        <ModalProvider>
          <TaskToDeleteProvider>
            <Modal />
            <AddTaskArea />
            <TaskArea />
          </TaskToDeleteProvider>
        </ModalProvider>
      </TaskListProvider>
    </div>
  );
}

export default App;
