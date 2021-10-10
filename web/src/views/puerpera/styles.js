import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
 
`

export const Title = Styled.div`
    width:100%;
    border-bottom:3px solid #155E70;
    display:flex;
    justify-content:center;
    margin:15px 0;

    h3{
        color:#155E70;
        font-size:25px;
        position:relative;
        top:16px;
        background:#fff;
        padding:0px 20px;
    }
`

export const inputs = Styled.div`
    display:flex;   
    width:80%;
    flex-wrap:wrap;
    height:300px;
    margin-top:25px;

`
export const input = Styled.div`
    display:flex;
    width:100%;
    height:25px;

    span{
        width:5%;
        color:#155E70;
        padding:10px 15px;
    }

    input{
        width:95%;
        font-size:20px;
        padding:3px;
        border:none;
        background:none;
        border-bottom:1px solid #155E70;
    }

    select{
        width:75%;
        border:none;
        border-bottom:1px solid #155E70;
    }

`
export const options = Styled.div`

    display:flex;
    width:100%;
    justify-content: space-around;
    align-items:center;
    

    div{
        display:flex;
        background:none;        
        font-size:20px;
        justify-content:center;
        align-items: center;
        cursor: pointer;
        font-weight:bold;

        &:hover{
            opacity:0.7;
            text-shadow:0 0 20px #155E70, 0 0 30px #155E70, 0 0 40px #155E70;
        }
    }

    button{
        width:130px;
        color:#FFF;
        border-bottom:4px solid #155E70;
        border-radius:50px;
        background:#155E70;
        cursor: pointer;
        font-size:20px;

        &:hover{
            opacity:0.7;
            box-shadow:0 4px 20px #155E70;
            width:135px;
        }
    }
`
export const Content = Styled.div`
    
    display:flex;
    width:80%;
    height:470px;
    justify-content:center;
    align-items: center;
    flex-direction: row;
    background:#155E70;
    margin-top:10px;
    overflow-y: auto;
    padding-top:10px;
    flex-wrap: wrap;

    ::-webkit-scrollbar {
        width: 10px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888; 
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    
`
export const CardPuerpera = Styled.div`
 
      

`
    