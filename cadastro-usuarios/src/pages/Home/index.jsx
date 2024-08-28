import './style.css'
import Trash from '../../assets/trash.svg'


function Home() {

  const users = [{
    id: '812837498273423',
    name: 'Andre',
    age: '28',
    email: 'alps@email.com'
  }, 
  {
    id: '234254523576443',
    name: 'Maine',
    age: '33',
    email: 'maine@email.com'
  },
  {
    id: '8686867576443',
    name: 'Belinha',
    age: '5',
    email: 'belinha@email.com'
  }

]

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
