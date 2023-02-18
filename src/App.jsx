import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [result, setresult] = useState("")
  const Clear = ()=>{
    setresult("")
  }
  const backspace=()=>{
  setresult(result.slice(0,result.length -1))
  }

  const calculate=()=>{
try {
  setresult(eval(result.toString()));
} catch (error) {
  setresult("Error");
}
  }
  const HandleClick =  (e) =>{
   setresult(result.concat(e.target.name))

  }

  return (
    <div className="App">
<form >
<input type="text" value={result} placeholder="0" />
</form>
 <div className="buttons">
 <button className='span-2 functionalbutton' onClick={Clear}>AC</button>
 <button className='functionalbutton' onClick={backspace}>DEL</button>
 <button name='/' className='functionalbutton' onClick={HandleClick}>&divide;</button>
 <button name='1' className='normalButton' onClick={HandleClick}>1</button>
 <button name='2' className='normalButton' onClick={HandleClick}>2</button>
 <button name='3' className='normalButton' onClick={HandleClick}>3 </button>
 <button name='*' onClick={HandleClick} className='functionalbutton'>* </button>
 <button name='4' className='normalButton' onClick={HandleClick}>4</button>
 <button name='5' className='normalButton' onClick={HandleClick}>5</button>
 <button name='6' className='normalButton' onClick={HandleClick}>6</button>
 <button name='+' onClick={HandleClick} className='functionalbutton'>+</button>
 <button name='7' className='normalButton' onClick={HandleClick}>7</button>
 <button name='8' className='normalButton' onClick={HandleClick}>8</button>
 <button name='9' className='normalButton' onClick={HandleClick}>9</button>
 <button name='-' onClick={HandleClick} className='functionalbutton'>-</button>
 <button name='.' className='normalButton' onClick={HandleClick}>.</button>
 <button name='0'  className='normalButton'onClick={HandleClick}>0</button>
 <button name='=' onClick={calculate} className='span-2 functionalbutton'>=</button>
 </div>
    </div>
  )
}

export default App
import React from 'react'
