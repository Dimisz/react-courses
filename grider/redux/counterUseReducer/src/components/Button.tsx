interface Props {
  handleClick: () => void;
  title: string;
}
const Button = ({handleClick, title}: Props) => {
  return(
    <button style={{padding: '1rem', margin: '1rem'}} onClick={handleClick}>{title}</button>
  );
}

export default Button;