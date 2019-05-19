import styled from 'styled-components';

export const BodyLogin = styled.main`
    margin:0px;
    padding: 10px;
    box-sizing: border-box;


    background: #725BC1;
    width: 100%;
    min-height:100vh;
    display: flex;
    align-items: center;
    flex-direction: column;


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



export const DivForm = styled.div `

    background: white;
    width: 300px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: auto;
    border-radius:5px;
    padding:20px;
   


    input{
        width: 100%;
        padding: 4px;
        margin: 10px 0px; 
        height: 40px;

    }

    input[type="submit"]{
        background: #725BC1;
        border: none;
        color:white;
        font-weight: bold;
        font-size: 15px;
    }


    a  input{
        background: #C4C4C4 !important;
    }
`;
