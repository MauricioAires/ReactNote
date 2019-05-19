import styled,{css}  from 'styled-components';

export const BodyDash = styled.div`
    min-height:100%;
    position:relative;
    background:#1F1E29;
    

    header{
        background:#1F1E29;
        height:auto;
        width:auto;
        padding:0px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
    }

`;

export const Logo = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
       

        img{
            background:#725BC1;
            width:100px;
            height:90px;
        }
        h1{
            color:white;
            margin-left:10px;
            
        }

        @media screen and (max-width:800px) {   
            h1{
                font-size:20px;
            }
        }
`;

export const User = styled.div` 
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:row;   
    margin-top:10px;
   
    img{
        width:70px;
        height:70px;
        border-radius:100%;
        border:4px solid #725BC1;
        margin:5px;
    }

    span{
        cursor:pointer;
        color:white;
        padding:4px;
        display:flex;
        justify-content:center;
        align-items:center;
        
        .icon{
            margin-left:7px;
            box-sizing:border-box;
            display:inline-block;
        }
    }
`;


export const Content = styled.div`
    width:100%;
    height: 100%;
    min-height:100vh;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;

    @media screen and (max-width:600px) {
     flex-direction:column-reverse;  
    }
  
`;

export const Video = styled.div`
    width:75%;
    height: auto;
    min-height:100vh;
    background:#282434;
    padding:20px;
    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    flex-wrap:wrap;
    
    @media screen and (max-width:600px) {
      width:100%;
      justify-content: center;
      align-items: center;

    }

    .divAddVideo{ 
        display:flex;
        align-items:center;
        justify-content:center;
        padding:10px;
        margin:10px;
        color:white;
        width:250px;
        max-width:90%;
        height:300px;
        background:#725BC1;
    }
`;


export const Note = styled.div`
    width:25%;
    height: 100vh;
    overflow:auto;
    background:#1F1E29;
    display:flex;
    ::-webkit-scrollbar{
        display:none;
    }
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    
    @media screen and (max-width:600px) {
      padding:10px;
      width:100%;
      justify-content:flex-start;
      align-items:center;
    }

    .divAdd{ 
        cursor: pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:10px;
        margin:10px;
        color:white;
        width:300px;
        min-height:100px;
        max-width:90%;
        background:#725BC1;
    }
`;

//************************************************* *//

export const DivNoteBackground = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;

    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding:0px;

    #back-div{
        background:black;
        opacity:0.7;
        position: absolute;       
        z-index:1;
        height: 100%;
        min-width: 100% !important;  
    }

    div{
        z-index:1;
        position:absolute;
        opacity:1;
        border-radius:5px;    
        width:400px;
        height: auto;
        background:white;
        max-width: 90%;
        display:flex;
        padding:5px;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;


     
        label{
           border-radius:10px;
           justify-content:center;
           align-items:center;
           display:flex;
           text-align:center;
           font-weight:bold;
           width:80%;
           color:black;
           font-size:26px;
        }

        form{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:20px;

            span{
            color:red;
            font-size:11px;
                 }
        }

        textarea{
            margin:10px;
            flex-grow:1;
            min-height:250px;
            resize:none;
            padding:10px;
        }
        input{
            height:40px;
            background:#725BC1;
            border:none;
            font-weight:bold;
            color:white;
            border-radius:5px;
        }
    }
`;


export const DivVideoBackground = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;

    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding:0px;

    #back-div{
        background:black;
        opacity:0.7;
        position: absolute;       
        z-index:1;
        height: 100%;
        min-width: 100% !important;  
    }

    div{
        z-index:1;
        position:absolute;
        opacity:1;
        border-radius:5px;    
        width:400px;
        height: auto;
        background:white;
        max-width: 90%;
        display:flex;
        padding:5px;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;


        label{
           border-radius:10px;
           justify-content:center;
           align-items:center;
           display:flex;
           text-align:center;
           font-weight:bold;
           width:80%;
           color:black;
           font-size:26px;
        }

        form{
            display:flex;
            flex-direction:column;
            width:100%;
            padding:20px;

            span{
            color:red;
            font-size:11px;
                 }
        }

        
        input{
            padding:5px;
            height:40px;
            margin:10px;
        }

        input[type="submit"]{
            background:#725BC1;
            border:none;
            font-weight:bold;
            color:white;
            border-radius:5px;    
        }
    }
`;


export const CardNote = styled.div`
        margin:10px;
        color:white;
        width:300px;
        min-height:100px;
        max-width:90%;
       
        background:#725BC1;
        color:white;
        
        ${props => props.edit && css`
            background: white;
            color: black;
        `}
        
        cursor: pointer;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;

        .note-header{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:4px;
            width:100%;
            height:auto;
            margin:3px;
            font-weight:bold;
        }

        button{
            display:none;
            margin-top:20px;
            background:#725BC1;
            border:none;
            color:white;
            width:70%;
            height:20px;
        }
`;


export const CardVideo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    background:#1F1E29;
    width:290px;
    max-width:90%;
    height:auto;
    padding:10px;

    .head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        position:relative;
        width:100%;
        padding:20px;
        height:30px;
        color:white;
        font-weight:bold;
        background:#725BC1;
        .icon{
            margin-right:5px;
        }
        strong{
            margin:5px;
        }
    }    
    

    .description{
        overflow:hidden;
        display:block;
        width:100%;
        padding:5px;
        height:auto;
        color:white;
        background:#725BC1;
        text-align:center;
    }
   

`;

export const Frame  = styled.div`
      width:300;
      height:325;
      margin:  10px 0  10px  0 ;
      

     iframe{
         width:100%;
         height:240px;
     }
`;


export const DivOutBackground = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding:0px;

    p { 
        cursor:pointer;
        padding:5px;
    }
    .actions{
        z-index:2;
        position:absolute;
        top:100px;
        right:10px;
        background:#282434;
        color:white;
        font-weight:bold;
        box-shadow: 0px 10px 10px 0px black;
        width:150px;
        height:80px;
        display:flex;
        justify-content:space-around;
        padding:5px;
        align-items:flex-start;
        flex-direction:column;
    }

    #back-div{
        background:black;
        opacity:0;
        position: absolute;       
        z-index:1;
        height: 100%;
        min-width: 100% !important;  
    }
`;


//// edite user

export const DivModalEditUser = styled.div`
 position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display:flex;
    justify-content:center;
    align-items:flex-start;
#back-div{
        background:black;
        opacity:0.5;
        position: absolute;       
        z-index:1;
        height: 100%;
        min-width: 100% !important;  
    }
`;

export const DivForm = styled.div`
    top:40px;
    position:absolute;
    z-index:10;
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

        form label{
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
        form label img{
            width:100%;
           
        }


    span{
        color:red;
        font-size:11px;
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