import React from 'react'
import * as S from './style'

import { Link } from 'react-router-dom'

function Header(){
    return (
        <S.Container>

            <S.leftSide>
                <h1>Controle Do Centro Cirurgico</h1>
            </S.leftSide>

            <S.rightSide>
                <Link to="/">Inicio</Link>
                <Link to="/task">Registrar Chave</Link>
                <Link to="/purpera">Registrar Puérpera</Link>
                

            </S.rightSide>

        </S.Container>
    )
}

export default Header;