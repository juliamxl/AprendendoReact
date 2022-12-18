import Colaborador from '../Colaborador'
import ColoredLine from '../LinhaHorizontal'
import './time.css'

const Time = (props) => {
    const bgColor = { backgroundColor: props.corSecundaria }
    const borderBottom = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={bgColor}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <ColoredLine color={props.corPrimaria} tamanho={40}/>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    className='colaborador'
                    corDeFundo = {props.corPrimaria}
                    key = {colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}
export default Time;