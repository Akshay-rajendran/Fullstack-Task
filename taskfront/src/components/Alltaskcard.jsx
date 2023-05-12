import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import axios from 'axios'
import { deletetask } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import { checkcompleted } from '../Api/Api';

function Alltaskcard({ taskmap }) {
  const navigate = useNavigate()

  async function delet() {
    await axios.delete(deletetask + taskmap._id)
    window.location.replace("/alltask");

  }

  async function edit() {
    navigate("/edit", { state: taskmap }) ///if u click on any of the edit button it will pass object to edit component

  }
  async function chec() {
    let res = await axios.patch(checkcompleted + taskmap._id, { complete: true })
    console.log("completed", res);
    window.location.replace("https://golden-valkyrie-c6bb09.netlify.app/alltask");
  }


  return (
    <div className="card">
      <h2 className='task'>{taskmap.task}</h2>
      <h2 className='task'>{taskmap.discription}</h2>
      <h2 className='task'>{taskmap.complete ? "completed" : <input type="checkbox" onClick={chec} />}</h2>
      <div className="icon">
        <DeleteIcon onClick={delet} />
        <AddCircleOutlineIcon />
        <DriveFileRenameOutlineIcon onClick={edit} />

      </div>
    </div>
  )
}

export default Alltaskcard