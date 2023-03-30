import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import axios from 'axios';

function Alltaskcard({taskmap}) {

async function delet(){
  let taskdelete= await axios.get("")
}


  return (
   <div className="card">
    <h2 className='task'>{taskmap.task}</h2>
    <h2 className='task'>{taskmap.discription}</h2>
    <h2 className='task'>{taskmap.complete}</h2>
    <div className="icon">
      <DeleteIcon onClick={delet}/>
      <AddCircleOutlineIcon/>
      <DriveFileRenameOutlineIcon/>
    </div>
   </div>
  )
}

export default Alltaskcard