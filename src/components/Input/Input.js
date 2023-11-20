import {InputContainer} from "./styles";

const Input = ({value}) => {
    return (

      <InputContainer>
          <input disabled={true} value={value}/>
         </ InputContainer>
    )

}

export default Input;