import {useState} from 'react'

export const  Nombres = () => {
let nombres = ['Fanthom', 'Gill', 'Leyla', 'Chimuelo', 'Hipo']

const [names, setNames] = useState(nombres)
const [newName, setNewName] = useState('')

const handleAddNames =() => {
    setNames([...names,newName])
}
  return (
    <div className='container'>
        <h2>Nombres de personajes de Como entrenar a tu Dragon</h2>
        <input  onChange={event => setNewName(event.target.value)}type="text" placeholder='Agrega un nuevo nombre' /> 
        <button onClick={handleAddNames}> Agrega un nuevo nombre a esta lista</button>
      <ul>
        {
            names.map((name, idx) => <li key={idx}>{name}</li>)
        }
      </ul>
    </div>
  )
}

export default Nombres