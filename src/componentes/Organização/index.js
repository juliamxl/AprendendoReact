import ColoredLine from '../LinhaHorizontal';
import './Org.css'

const Titulo = () => {
    return(
    <div className='minha-organizacao'>
        <h1>Minha Organização:</h1>
        <ColoredLine color="#6278F7" tamanho={90}/>
    </div>
    )
}

export default Titulo;