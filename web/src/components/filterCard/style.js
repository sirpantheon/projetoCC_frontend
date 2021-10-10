import styled from 'styled-components'

export const Container = styled.div `
    width:100%;
    height:60px;
    background:${props => props.actived ? '#F0F1F5' : '#155E70'};
    color:#FFF;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    text-shadow: #000 1px 0 5px;
    transition:all 0.3s ease;

    span{
        font-size:40px;
        font-weight:bold;
    }

    &:hover{
        background:#F0F1F5;
        color:#155E70;
        text-shadow: #155E70 1px 0 10px;
        box-shadow: 3px 3px #000;
        opacity:0.7
    }

`