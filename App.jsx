import { useState } from 'react'

import './App.css'
const data=[
  {
      "id": "section1",
      "title": "Section 1",
      "content": "This is the content for section 1. It can include text, images, or other elements."
  },
  {
      "id": "section2",
      "title": "Section 2",
      "content": "This is the content for section 2. Here you can add more details or information."
  },
  {
      "id": "section3",
      "title": "Section 3",
      "content": "This is the content for section 3. It can also include lists, links, or any HTML elements."
  },
  {
      "id": "section4",
      "title": "Section 4",
      "content": "This is the content for section 4. Feel free to customize it as needed."
  }
]

function Accordion({ques,ans}){
  const [open, setOpen] = useState(false);
  return(
    <div>
    <div onClick={()=>{setOpen(!open)}}><h2>{ques}</h2></div>
  {open && ( <div><p>{ans}</p></div>)}

    </div>
  )

}

function App() {


  return (
    <>
      {data.map((d,i)=>
        ( <div key={d.id}><Accordion  ques={d.title} ans={d.content}/></div>))}
    </>
  )
}

export default App
