import React, {useState , useEffect } from 'react'

import { Link } from 'react-router-dom'
import * as S from './styles'

import api from '../../services/api'

//components

import Header from '../../components/header'
import Footer from '../../components/footer'
import FilterCard from '../../components/filterCard'
import TaskCard from '../../components/taskCard'

function Home() {

  let iconEntrega = []
  for (let i = 0; i < 50; i++) {
    iconEntrega.push(i)
  }

  const [filterActived, setFilterActived]=useState('today')
  const [tasks,setTasks]=useState([])
  const [lateCount,setLateCount] = useState()

  
  async function loadTask(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response=>{
      setTasks(response.data)
    })
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response=>{
      setLateCount(response.data.length)
    })
  }

  useEffect(() =>{
    loadTask()
    lateVerify()
  },[filterActived])

    return (
    <S.Container>

      <Header />
      
      <S.FilterArea lateCount={lateCount}>

        <button type="button" onClick={()=>setFilterActived("all")}>
          <FilterCard title="Todos"    actived={filterActived === "all"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("today")}>
          <FilterCard title="Hoje"     actived={filterActived === "today"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("late")}>
          <FilterCard title={`Pendentes - ${lateCount}`} actived={filterActived === "late"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("1")}>
          <FilterCard title="masculino"actived={filterActived === "1"} />
          
        </button>

        <button type="button" onClick={()=>setFilterActived("2")}>
          <FilterCard title="feminino"actived={filterActived === "2"} />
          
        </button>

        <button type="button" onClick={()=>setFilterActived("3")}>
          <FilterCard title="acompanhante"actived={filterActived === "3"} />
          
        </button>

      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === 'late'? "PENDÊNCIAS" : 'REGISTROS'} </h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t =>(
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} nome={t.nome} entrega={t.entrega} registro={t.registro} especialidade={t.especialidade} chave={t.chave} devolucao={t.devolucao}/>
            </Link>

          ))

        }


      </S.Content>


      <Footer />

      

    </S.Container>
    )
  }
  
  export default Home;