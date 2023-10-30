interface Props {
  options: string[];
  selectedOption: string;
  setSelectedOption: (opt: string) => void;
}

const SelectField = ({
    options, 
    selectedOption,
    setSelectedOption
  }: Props) => {
  const renderedOptions = options.map((option) => {
    return(
      <option key={option}>
        {option}
      </option>
    )
  })
  return(
    <select 
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {renderedOptions}
    </select>
  )
}

export default SelectField;