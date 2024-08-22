import './style.css'
import Trash from '../../assets/trash.svg'
function Home() {

  return (
    
    <div className='container'>
      <form>
      <h1>Cadastro de Usuário</h1>
      <input name='nome' type='text'/>
      <input name='idade' type='number'/>
      <input name='e-mail' type='email'/>
      <button type='button'>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>]
          <p>E-mail</p>
        </div>

        <button>
          <img src={Trash}/>
        </button>
      </div>

    </div>
  )
}

export default Home
