import './button.css'

const Button = (props) => {
    return (
        <button className='btn'>
            {props.texto}
        </button>
    )
}

export default Button;