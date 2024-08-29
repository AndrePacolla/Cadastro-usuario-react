import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {

  let users = []

   async function getUsers(){
    users = await api.get('/usuarios')
   }



   useEffect(() => {
    getUsers()
   },[])



  return (
    
    <div className='container'>
      <form>
      <h1>Cadastro de Usuários</h1>
      <input name='nome' type='text' placeholder='nome ...'/>
      <input name='idade' type='number' placeholder='idade ...'/>
      <input name='e-mail' type='email' placeholder='e-mail ...'/>
      <button type='button'>Cadastrar</button>
      </form>



      {users.map((user) => (
          <div key = {user.id} className='card'>
             <div>
               <p>Nome:  <span>{user.name}</span></p>
               <p>Idade: <span>{user.age}</span></p>
               <p>E-mail:<span>{user.email}</span></p>
             </div>
       
             <button>
               <img src={Trash}/>
             </button>
          </div>

      ))} 

    </div>
  )
}

export default Home
