import styled from 'styled-components';


export const ContainerRegister = styled.div`
    overflow-x: hidden !important;
    box-sizing:border-box;
    background-color:#725BC1;
    width: 100%;
    min-height:100vh;
    padding:10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    .alert{
        right: 20px;
        top: -60px;
        position:absolute;
        width:300px;
        height:40px;
        align-items:center;
        justify-content:center;
        color:white;
        max-width:90%;
        display:flex;
        padding:5px;
        border-radius:4px;
        background:#008000;
        animation-name:alert;
        animation-duration:3s;
        animation-fill-mode:1;

        @keyframes alert {
            0%{
                top: -60px;
            }

            50%{
                top:10px;
            }
            100%{
                top:-60px;
            }
        }
    }


   
    header{
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 0px;

        img{
            width:80px;
            height:80px;
        }
    }

    a{ text-decoration: none}

`;

export const DivForm = styled.div`
    background: white;
    width: 300px;
    max-width:90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: auto;
    border-radius:5px;
    padding-top: 20px;
    

        form{
            display: flex;
            justify-content: center;
            align-items:center;
            flex-direction: column;
            padding:20px;
            width:100%;
        }

        form div{
            display:flex;
            justify-items:center;
            align-items:center;
            align-content:center;
            width:100px;
            height:100px;
            border-radius:100%;
            background:#725BC1;
            cursor: pointer;
            
            
        }
        form div img{
            width:100%;
           
        }

        span{
            font-size:13px;
            color:red;
        }
        input{
            padding:3px;
            margin:10px;
            width: 100%;
            height:40px;
            background:white;
            border:1px solid #ccc;
            color:black;
            font-weight:normal;
        }
        input[type="submit"]{
            background:#725BC1;
            color:white;
            font-weight:bold;
            border:none;
            border-radius:3px;
        }

        input[type="file"]{
            visibility:hidden;
            display:none;
        }
`;