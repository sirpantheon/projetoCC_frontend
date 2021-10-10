import React from 'react';
import {format} from 'date-fns'

import * as S from './style'

import typeIcons from '../../utils/typeicons'

function taskCard({type,nome,registro,especialidade,entrega,chave,devolucao}){

    const date = format(new Date(entrega), 'dd/MM/yyyy')
    const hour = format(new Date(entrega), 'HH:mm')
    let  classe = "ativo";
    if(devolucao){
        classe = "inativo"
    }
    return (
        <S.Container devolucao={devolucao}>
            <S.TopCard>
                <S.chave>
                    <img src={typeIcons[type]} alt="icone" />
                    <h3 className={classe}>{chave}</h3>
                </S.chave>
                <h3>{nome}</h3>
                <h3>{registro}</h3>
                <h3>{especialidade}</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>

        </S.Container>
    )
}

export default taskCard;