import styled from "styled-components";

export const Modal = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    justify-content:center;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.5);
    z-index:999;

    .modal--content{
        position:relative;
        background-color:#FFF;
        max-width:400px;
        height:150px;
        border-radius:20px;
        padding:10px;
        box-shadow:0 0 4px #CCC;

        .modal--content_btn{
            display:flex;
            justify-content:space-around;

            .btn{
                width:100px;
                height:40px;
                padding:8px;
                border-radius:5px;
                text-align:center;
                cursor:pointer;
            }

            #yesBtn{
                background-color:#328BE0;
                color:#FFF;

                &:hover{
                    background-color:#1B69B1
                }
            }

            #noBtn{
                border:1px solid #328BE0;
                color:#328BE0;

                &:hover{
                    background-color:#328BE0;
                    color:#FFF;
                }
            }
        }
    }

@media (max-width:430px){
    .modal--content{
        width:auto;
        height:auto;

        .modal--content_title{
            font-size:12px;
        }

        .modal--content_btn .btn{
            width:80px;
        }
    }
}
`;