import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    align-items: center;
 
`
export const FilterArea = Styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    margin-top: 20px;

    button{
        font-size:10px;
        width:13%;
        background:none;
        border:none;

        span{
            width:100%;
            font-size: 30px;
        }
    }
 
`

export const Content = Styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-bottom:50px;

    a{
        width:23%;
        text-decoration:none;
        color:#155E70
    }

`

export const Title = Styled.div`
    width:100%;
    border-bottom:3px solid #155E70;
    display:flex;
    justify-content:center;
    margin:30px 0;

    h3{
        color:#155E70;
        font-size:25px;
        position:relative;
        top:16px;
        background:#fff;
        padding:0px 20px;
    }
`
export const Entrega = Styled.div`
    border-top:5px solid #155E70;
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-bottom:50px;
    padding:5px;

`