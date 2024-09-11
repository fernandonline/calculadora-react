import { useState } from 'react'
import { Container, Content, Row, Column } from './style'
import Input from './components/input'
import Button from './components/button' 

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
  }

  const handleSomaNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('')
      setOperation('+')
    } else {
      const soma = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(soma))
      setOperation('')
    }
  }


  const handleSubNumber = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('')
      setOperation('-')
    } else {
      const soma = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(soma))
      setOperation('')
    }
  }


  const handleEquals = () => {
    if (firstNumber != '' && operation != ''){
      switch(operation) {
        case '+':
          handleSomaNumber()
        break

        case '-':
          handleSubNumber()
        break

        default: break
      }
    }
  }

  
  return (
    <Container>
      <Content>
        <Input value={currentNumber || ''}/>

        <Row>
            <Button label='--'onClick={() => handleAddNumber('--')}/>
            <Button label='C' onClick={handleOnClear}/>
            <Button label='/' onClick={() => handleAddNumber('/')}/>
            <Button label='X' onClick={() => handleAddNumber('X')}/>
          </Row>

        <Row>
            <Button label='7' onClick={() => handleAddNumber('7')}/>
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='-' onClick={handleSubNumber}/>
          </Row>

        <Row>
            <Button label='4'onClick={() => handleAddNumber('4')}/>
            <Button label='5'onClick={() => handleAddNumber('5')}/>
            <Button label='6'onClick={() => handleAddNumber('6')}/>
            <Button label='+'onClick={handleSomaNumber}/>
          </Row>

          <Row>
            <Button label='1' onClick={() => handleAddNumber('1')} />
            <Button label='2' onClick={() => handleAddNumber('2')} />
            <Button label='3' onClick={() => handleAddNumber('3')} />
            <Button label='=' onClick={handleEquals} />
          </Row>

      </Content>
    </Container>
  )
}

export default App
