const ColoredLine = ({ color, tamanho}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: tamanho,
            height:3,
  
        }}
    />
);

export default ColoredLine;