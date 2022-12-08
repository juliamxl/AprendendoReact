import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';
import {useState} from 'react';


function Formulario() {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ];

    const aoSalvar = () => {
        console.log('form foi enviado');
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
                aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder='Digite o endereço da imagem' 
                valor = {imagem}
                aoAlterado = {valor => setNome(valor)}
                />
                <ListaSuspensa 
                label='Time' 
                itens={times} 
                />
                <Button texto='Criar card'></Button>
            </form>
        </section>
    );
}

export default Formulario;