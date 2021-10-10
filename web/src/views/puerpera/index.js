import React, {useEffect} from 'react'
import * as S from './styles'
import {useState} from 'react'

import api from '../../services/api'

  //components
import Header from '../../components/header'
import Footer from '../../components/footer'
import CardPuerpera from '../../components/cardPuerpera'


  function Purpera({match}) {
    const [redirect,setRedirect] = useState(false)
    const [ type,setType ]= useState()
    const [ nome,setNome ]= useState()
    const[ registro,setRegistro ]= useState()
    const [ macaddress,setMacaddress ]= useState("11:11:11:11:11:11")
    const [ card,setCard]=useState([])
    const [leito,setLeito] = useState()

  async function loadTask(){
    await api.get(`/task/puerpera/all/11:11:11:11:11:11`)
    .then(response=>{
      setCard(response.data)
    })
  }

    async function Save() {

      //validação
      if(!nome)
        return alert('por favor preencha o nome')
      else if(!registro)
        return alert('por favor preencha o registro')
      else if(!leito)
        return alert('por favor preencha o leito')
      
        await api.post('/task/puerpera',{
          macaddress,
          nome,
          registro,
          leito
        }).then(()=>
            alert("Registrado Com Sucesso!!"),
          setRedirect(true)
        )
      
    }

  async function remove(){
    const options = window.confirm('Voce De seja Remover Esse Registro ?')
      if(options === true){

        alert("OK, Vamos Remover")
        await api.delete(`/task/puerpera/:id/${match.params.id}`)
        .then(() => {setRedirect(true)})
      }else{
        alert("OK, Vamos Manter")
      }

  }


  const myScrol = {
    width: '100%',
    height: '450px',
    overflowX: 'hidden',
    overflowY: 'scroll'
};


    useEffect(()=>{
      loadTask()
    },[] )




      return (
      <S.Container>

        
        <Header />

            <S.Title><h3>Puerpera</h3></S.Title>
            <S.inputs>
              <S.input>
                <span>Nome</span>
                <input type="text" placeholder="NOME DO PACIENTE" onChange={e => setNome(e.target.value)} value={nome}/>
              </S.input>

              <S.input>
                <span>Registro</span>
                <input type="text" placeholder="REGISTRO DO PACIENTE" onChange={e => setRegistro(e.target.value)} value={registro}/>
              </S.input>

              <S.input>
                <span>Leito</span>
                <input type="text" placeholder="NUMERO DO LEITO" onChange={e => setLeito(e.target.value)} value={leito}/>
              </S.input>
             
            </S.inputs>

            <S.options>
                                
                  {match.params.id && <button type="button" onClick={remove}>Excluir</button>}
                

                
                  <button type="submit" onClick={Save}>enviar</button>
                
              </S.options>

        <S.Content>

            {card.map(p =>(
              <CardPuerpera nome={p.nome} registro={p.registro} leito={p.leito} data={p.data}/>
            ))}

        </S.Content>
        
            
               

           
         
        



        
  
        <Footer/>
  
      </S.Container>
      )
    }
    
    export default Purpera;