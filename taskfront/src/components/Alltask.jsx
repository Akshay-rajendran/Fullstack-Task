import React from 'react'
import Alltaskcard from './Alltaskcard'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { getalltask } from '../Api/Api'

function Alltask() {

  const [alltask,setalltask]=useState()

async function fectchalltask(){
  let tasks=await axios.get(getalltask)
  setalltask(tasks.data.alltask)
  console.log(tasks.data.alltask);

}
useEffect(()=>{fectchalltask()},[])


  return (
    
    <div className="getalltask">
      <h1 className="alltaskh1">All Task</h1>
      
      {alltask && alltask.map((m) => {
                            return (
                              <Alltaskcard taskmap={m} />
                            )
                        })}

   
   </div>
  )
}

export default Alltask