import styled from 'styled-components';

export const FormAddTask = styled.div`
    width:80%;
    height:150px;
    margin-top:10px;
    border-radius:20px;
    background-color:#328BE0;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;

    form{
        width:70%;
    }

    #task, #status, #addTask{
        margin:5px;
        height:40px;
        padding:8px;
        border-radius:3px;

        &:focus{
            outline:0;
        }
    }

    #task{
        min-width:450px;
        border:0;
    }

    #status{
        border:0;
    }

    #addTask{
        background-color:#FFB63E;
        border:1px solid #999;


        &:hover{
            background-color:#FFA71A;
        }
    }

@media (max-width: 600px) {

    &{
        height:auto;
    }

    #task{
        min-width:200px;
    }

    #status{
        width:80px;
        font-size:12px;
    }

}
`;