import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {
    const bgColor = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        <section className='time' style={bgColor}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}
export default Time;