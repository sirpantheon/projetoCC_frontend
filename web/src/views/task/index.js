import React, {useState , useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import * as S from './styles'

  
import api from '../../services/api'

  //components
import Header from '../../components/header'
import Footer from '../../components/footer'
import TypeIcons from '../../utils/typeicons'

  function Task({match}) {
    const [redirect,setRedirect] = useState(false)
    const [ type,setType ]= useState()
    const [ id,setId]= useState()
    const [ devolucao,setDevolucao]= useState(false)
    const [ nome,setNome ]= useState()
    const[ registro,setRegistro ]= useState()
    const [ especialidade,setEspecialidade ] = useState()
    const [ chave,setChave ]= useState()
    const [ privativo,setPrivativo ]= useState()
    const [ descricao,setDescricao ]= useState()
    const [ macaddress,setMacaddress ]= useState("11:11:11:11:11:11")
    const [ filterActived, setFilterActived]=useState()
    const [ tasks,setTasks ]=useState([])
    const [ lateCount,setLateCount ] = useState()



    async function LoadTaskDetail(){
      await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setDevolucao(response.data.devolucao)
        setNome(response.data.nome)
        setRegistro(response.data.registro)
        setEspecialidade(response.data.especialidade)
        setChave(response.data.chave)
        setPrivativo(response.data.privativo)
        setDescricao(response.data.descricao)
      })

    }
    
  async function loadTask(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response=>{
      setTasks(response.data)
    })
  }
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11}`)
    .then(response=>{
      setLateCount(response.data.length)
    })
  }

    async function Save() {

      //validação
      if(!nome)
        return alert('por favor preencha o nome')
      else if(!type)
        return alert('por favor preencha o tipo de chave')
      else if(!especialidade)
        return alert('por favor preencha a especialidade')
      else if(!registro)
        return alert('por favor preencha o registro')
      


      if(match.params.id){
        await api.put(`/task/${match.params.id}`,{
          macaddress,
          nome,
          registro,
          especialidade,
          chave,
          privativo,
          descricao,
          devolucao,
          type
        }).then(()=>
          alert("Registrado Mofificado Com Sucesso!!"),
          setRedirect(true)
       )
      }else{
        await api.post('/task',{
          macaddress,
          nome,
          registro,
          especialidade,
          chave,
          privativo,
          descricao,
          devolucao,
          type
        }).then(()=>
          alert("Registrado Com Sucesso!!"),
          setRedirect(true)
        )
      }
    }

  async function remove(){
    const options = window.confirm('Voce De seja Remover Esse Registro ?')
      if(options === true){

        alert("OK, Vamos Remover")
        await api.delete(`/task/${match.params.id}`)
        .then(() => {setRedirect(true)})
      }else{
        alert("OK, Vamos Manter")
      }

  }

    useEffect(()=>{
      LoadTaskDetail()
      loadTask()
      lateVerify()
    },[] )

      return (
      <S.Container>
  
        {redirect && <Redirect to="/"/>}
        
        <Header />


        <S.Form>    
            <S.typeIcons>
                <S.iconsContent>
                  {
                      TypeIcons.map((icon,index) =>(
                          index > 0 && 
                          <button type="button" onClick={()=>setType(index)}>
                              <img src={icon} alt="icon"
                              className={type && type !== index && 'inative'}/> 
                          </button>
                      ))
                  }
                </S.iconsContent>

                <S.legendaIcons>
                  <h3>Masculino</h3>
                  <h3>Feminino</h3>
                  <h3>Acompanhante</h3>
                </S.legendaIcons>
            </S.typeIcons> 
 

            <S.inputs>
              <S.input>
                <span>Nome</span>
                <input type="text" placeholder="COLABORADOR/ACOMPANHANTE" onChange={e => setNome(e.target.value)} value={nome}/>
              </S.input>

              <S.input>
                <span>Registro</span>
                <input type="text" placeholder="CRM/DRT/RG/CPF" onChange={e => setRegistro(e.target.value)} value={registro}/>
              </S.input>

              <S.input>
                <span>Especialidade</span>
                
                <input type="text" list="especialidade" name="especialidade" placeholder="..." onChange={e => setEspecialidade(e.target.value)} value={especialidade}/> 
                <datalist id="especialidade">
                  <option value="G.O"/>
                  <option value="Ortopedia"/>
                  <option value="Captação De Orgãos"/>
                  <option value="Urologia"/>
                  <option value="Mastologia"/>
                  <option value="Medicina Intensiva"/>
                  <option value="Nefrologia"/>
                  <option value="Clínica Médica"/>
                  <option value="Cirurgia Pediátrica"/>
                  <option value="Cirurgia Geral"/>
                  <option value="Cirurgia Vascular"/>
                  <option value="Anestesiologia"/>
                  <option value="Neurocirurgia"/>
                  <option value="Infectologia"/>
                  <option value="Enfermagen"/>
                  <option value="Outros"/>
                </datalist>
                
              </S.input>

              <S.input>
                <span>Chave</span>
                <input type="number" placeholder="NUMERO" onChange={e => setChave(e.target.value)} value={chave}/>
              </S.input>

              <S.textarea>
                <textarea placeholder="Observações" rows={3} name="descricao" onChange={e => setDescricao(e.target.value)} value={descricao}/>
              </S.textarea>

              <S.privativo>
                <div id="privativo">

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" onChange={e => setPrivativo(e.target.value)} value={privativo}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">P</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" onChange={e => setPrivativo(e.target.value)} value={privativo}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">M</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" onChange={e => setPrivativo(e.target.value)} value={privativo}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">G</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" onChange={e => setPrivativo(e.target.value)} value={privativo}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">GG</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" onChange={e => setPrivativo(e.target.value)} value={privativo}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">XG</div>
                  </label>

                </div>

              </S.privativo>
            </S.inputs>
              <S.options>
                <div>
                  <input type="checkbox" name="entregue" checked={devolucao} onChange={e => setDevolucao(!devolucao)} />
                  <span>Entregue</span>
                </div>

                
                  {match.params.id && <button type="button" onClick={remove}>Excluir</button>}
                

                
                  <button type="submit" onClick={Save}>enviar</button>
                
              </S.options>



        </S.Form>
  
        <Footer/>
  
      </S.Container>
      )
    }
    
    export default Task;