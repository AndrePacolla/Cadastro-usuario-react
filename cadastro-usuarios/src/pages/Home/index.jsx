import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  
  const [users, setUsers] = useState([]);

   async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
   }

   useEffect(() => {
    getUsers()
   },[])



  return (
    
    <div className='container'>
      <form>
      <h1>Cadastro de Usuários</h1>
      <input name='nome' type='text' placeholder='nome ...' ref={inputName}/>
      <input name='idade' type='number' placeholder='idade ...'ref={inputAge}/>
      <input name='e-mail' type='email' placeholder='e-mail ...'ref={inputEmail}/>
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
