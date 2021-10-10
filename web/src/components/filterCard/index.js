import React from 'react'
import * as S from './style'

function filterCard({title , actived}){
    return (
        <S.Container actived={actived}>
            <span> {title} </span>
        </S.Container>
    )
}

export default filterCard
