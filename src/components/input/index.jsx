import {InputContainer} from './input-styled'

const Input = ({value}) => {
  
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    )
}

export default Input