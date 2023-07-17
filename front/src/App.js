import './App.css';
import {useState, useEffect, useRef} from "react"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  
  let [statement, changeStatement] = useState("Server Unreached")
  let nameInput = useRef()
  let ageInput = useRef()
  const [error, setError] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:5000/hello')
    .then((response) =>{
      changeStatement(response.data.statement)
    })
    .catch(error => {
      changeStatement(error)
    })
  }, [])

  const ask = () => {
    if (nameInput.current !== "" && ageInput.current !== ''){
      axios.post('http://localhost:5000/ask', {
        name: nameInput.current.value,
        age: ageInput.current.value
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        setError(error.response.data.message)
      })
    }
    else{
      alert("Can't Leave These Fields Empty")
    }
  }

  return (
    <div>
      <span>{error}</span>
      <h1>{statement}</h1>
      <input type='text' ref={nameInput}/>
      <input type='passworf' ref={ageInput} />
      <button onClick={ask}>Submit</button>
    </div>
  );
}

export default App;
