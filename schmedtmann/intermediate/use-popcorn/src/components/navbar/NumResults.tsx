interface Props {
  numResults: number;
}

const NumResults = ({ numResults }:Props) => {
  return(
    <p className="num-results">
      Found <strong>{numResults}</strong> results
    </p>
  );
}

export default NumResults;