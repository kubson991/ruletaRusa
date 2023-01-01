import { useState, useEffect } from 'react'
import uploadGif from './assets/output-onlinegiftools.gif'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [state,setState] = useState('paused')
  const [title,setTitle] = useState('coloca un titulo')
  const [hide,setHide] = useState(false)
  useEffect(() => {

  }, [])
  function handleChange(e) {
    const files = []
    console.log(e.target.files)
    for (let index = 0; index < e.target.files.length; index++) {
      files.push(URL.createObjectURL(e.target.files[index]))

    };
    setCount(files)
  }

  return (
    <div className="App">
      <span onClick={()=>setHide(!hide)}> <b>{hide?'+':'-'}</b> </span>
{!hide &&      <div>
      <label htmlFor="titulo">Escribe el titulo: </label>
      <input type="text" id='titulo' onInput={(e)=>setTitle(e.target.value)}/>
      </div>}
      <div className='inputContainer'>
      <h1>{title}</h1>
      </div>

            <input type="file" multiple onChange={handleChange} id="inputUpload"/>
{!hide &&       <div className='inputContainer'>
      <label htmlFor="inputUpload">
      <img src={uploadGif} alt="" className='uploadGif'/>
      </label>

      </div>}


{count.length>4 &&      <section className='ruleta'>
        <div className='show'>
          <div className={`imgContainer ${state==='paused' ? 'animationStopped': ''} `}>
          <img src={count[count.length-5]} alt="" />
          <img src={count[count.length-4]} alt="" />
            <img src={count[count.length-3]} alt="" />
            <img src={count[count.length-2]} alt="" />
            <img src={count[count.length-1]} alt="" />
            {count.map((image) =>
              <img src={image} alt="" key={image} />
            )}
          </div>
        </div>

      </section>}
      {  count.length>2 && <div className='buttonContainer'>   <button style={{background:'green'}}  onClick={()=>setState(state==='paused' ? 'move' : 'paused')}>{state==='paused' ? 'Girar' : 'Pausa'}</button> </div>   }
    </div>
  )
}

export default App
