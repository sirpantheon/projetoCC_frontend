import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

 
`
export const FilterArea = Styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    margin-top: 15px;

    button{
        width:20%;
        background:none;
        border:none;
    }
 
`

export const Content = Styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;


`

export const Title = Styled.div`
    width:100%;
    border-bottom:3px solid #40407a;
    display:flex;
    justify-content:center;
    margin:35px 0;

    h3{
        color:#40407a;
        font-size:25px;
        position:relative;
        top:16px;
        background:#fff;
        padding:0px 20px;
    }
`
export const Form = Styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    margin-top:50px;


`
export const typeIcons = Styled.div`

    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 25px;
    flex-direction: column;

    .inative{
            opacity:0.5;
            width:60px;
            height:60px;
            button{
                box-shadow: 0 2px 4px 1px #40407a;
            }
    }

    button{
        display:flex;
        width:70px; 
        height:70px;
        align-items: center;
        justify-content:center;
        background:none;
        border-radius:50%;
        box-shadow: 10px 10px 12px 0 #40407a;
        
    }

    img{
       
        width:70px; 
        height:70px;
        cursor:pointer;
        &:hover{
            opacity:0.8;

        }
    }
`
export const inputs = Styled.div`
    display:flex;   
    width:80%;
    flex-wrap:wrap;
    height:500px;
    margin-top:30px;

`
export const input = Styled.div`
    display:flex;
    width:50%;
    height:50px;

    .privativo{
        color:red;
    }

    span{
        width:20%;
        color:#40407a;
        padding:15px 20px;
    }

    input{
        width:80%;
        font-size:20px;
        padding:5px;
        border:none;
        background:none;
        border-bottom:1px solid #40407a;
    }

    select{
        width:80%;
        border:none;
        border-bottom:1px solid #40407a;
    }

`
export const privativo = Styled.div`

    #privativo{
        width:100%;
        heigth:70px;
        display: flex;
        margin-left:45px;
        justify-content:center;
        align-items: center;
        
    }
    /* MAIN */
    /* =============================================== */
    .rad-label {
    display: flex;
    align-items: center;

    border-radius: 100px;
    padding: 14px 16px;
    margin: 10px 0;

    cursor: pointer;
    transition: .3s;
    }

    .rad-label:hover,
    .rad-label:focus-within {
    background: hsla(0, 0%, 80%, .14);
    }

    .rad-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
    }

    .rad-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;

    background: linear-gradient(to right bottom, #50508a, #40407a);
    position: relative;
    }

    .rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: .3s;
    }

    .rad-input:checked+.rad-design::before {
    transform: scale(0);
    }

    .rad-text {
    color: #50508a;
    margin-left: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 900;

    transition: .3s;
    }

    .rad-input:checked~.rad-text {
    color: #155E70;
    }


`
export const textarea = Styled.div`
    display:flex;
    width:50%;
    flex-direction: column;
    margin-left:20px;
    

    textarea{
        padding:5px;
        border: 1px solid #155E70;
        heigth:70px;

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
export const legendaIcons = Styled.div`

    width:87%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:#b4b4b4;

    h3{
        font-size:25px;
        width:135px;
        display:flex;
        align-items: center;
        justify-content: space-around;
        
    }

`

export const iconsContent = Styled.div`

    width:80%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    

`