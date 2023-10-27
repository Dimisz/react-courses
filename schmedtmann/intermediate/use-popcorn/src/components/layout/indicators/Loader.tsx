interface Props {
  message: string;
}

const Loader = ({message}: Props) => {
  return <p className="loader">{message}</p>;
}

export default Loader;