import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';
import {useState} from 'react';

function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form foi enviado');

        






























        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados  para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} 
                label="Nome"
                placeholder='Digite seu nome' 
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder='Digite seu cargo' 
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder='Digite o endereço da imagem' 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time"
                itens={props.times} 
                valor = {time}
                aoAlterado = {valor => setTime(valor)}
                />
                <Button texto='Criar card'></Button>
            </form>
        </section>
    );
}

export default Formulario;