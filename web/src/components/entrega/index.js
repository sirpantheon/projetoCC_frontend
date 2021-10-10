import React from 'react';


import * as S from './style'

import typeIcons from '../../utils/iconEntrega'

function entrega( { type,entrega,chave,index }){

   
    return (
        <S.Container  type={type} entrega={entrega} chave={chave} index={index}>

            <S.Content>
                <button type="button">

                    <img src={typeIcons} alt="icone" />

                </button>
                

            </S.Content>
           
              

        </S.Container>
    )
}

export default entrega;