import { ButtonContainer } from "./button-styled"

const Button = ({label, onClick}) => {
  
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    )
}

export default Button