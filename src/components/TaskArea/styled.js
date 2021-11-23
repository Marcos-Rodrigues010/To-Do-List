import styled from 'styled-components';

export const Area = styled.div`
    width:80%;
    padding:20px;
    border-radius:20px;
    margin-top:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;

    .area{
        width:30%;
        min-height:400px;
        border-radius:20px;
        padding:5px;
        display:flex;
        align-items:center;
        flex-direction:column;
        box-shadow:0 0 12px #CCC;

        .area--title{
            text-align:center;
        }

        .toDoTask, .inProgressTask, .doneTask{
            width:90%;
            padding:10px;
            margin:5px;
            border-radius:5px;
            font-size:25px;
            display:flex;
            justify-content:space-between;

            &:hover{
                cursor:pointer;
            }

            .deleteTask{
                font-size:12px;
            }
        }

        .toDoTask{
            background-color:#61CDE9;
            border:1px solid #000080
        }

        .inProgressTask{
            background-color:#FFFF99;
            border:1px solid #FFCC33
        }

        .doneTask{
            background-color:#32CD32;
            border:1px solid #008000
        }
    }

    #toDo{
        background-color:#61CDE9;
    }

    #inProgress{
        background-color:#FFFF99;
    }

    #done{
        background-color:#32CD32; 
    }

    .dragging, .hover{
        border:1px solid #000;
    }
    @media (max-width:700px) and (min-width:561px){

        &{
            justify-content:space-around;
        }

        .area{
            width:200px;
            min-height:200px;
            margin-bottom:20px;
        
            .toDoTask, .inProgressTask, .doneTask{
                font-size:16px;
            }
        }
    }

    @media (max-width:560px){
        &{
            justify-content:center;
        }
        .area{
            width:200px;
            min-height:200px;
            margin-bottom:20px;
        
            .toDoTask, .inProgressTask, .doneTask{
                font-size:16px;
            }
        }
    }
`;

export const WithoutTask = styled.div`
    width:80%;
    height:100px;
    margin-top:10px;
    border-radius:20px;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#DDD;
    text-align:center;

@media (max-width:500px){

    &{
        font-size:20px;
    }
}
`;