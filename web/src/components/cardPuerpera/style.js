import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    width:90%;
    height:50px;
    background:#FFF;
    border-radius:15px;
    margin: 5px 0;
    justify-content: space-between;
    
    &:hover{
        opacity:0.7;
    }
    
    
`
export const TopCard = styled.div`
width:80%;
display:flex;
align-items: center;
justify-content: space-between;
padding:5px;

`

export const BottomCard = styled.div`
    width:25%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:5px;
    
`