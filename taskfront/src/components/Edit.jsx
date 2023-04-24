import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom'; //is used for get the object that passing from alltaskcard when we click edit button
import axios from 'axios';
import { checkcompleted } from '../Api/Api';
import { Link } from 'react-router-dom';
import '../edit.css'

function Edit() {
  const [task, setTask] = useState({})
  const [discription, setdiscription] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.state)
  useEffect(() => {

    setTask(location.state.task)
    setdiscription(location.state.discription)
  }, [])

  async function add() {

    let Task = {
      task: task,
      discription: discription
    }
    const res = await axios.patch(checkcompleted + location.state._id, Task)
    console.log(res);
    navigate("/alltask")
  }


  return (

    <Box className="editbox">
      <h1 className="edith1">Edit Task</h1>
      <h2 className="edith2">Task</h2>
      <OutlinedInput id="standard-basic" placeholder='enter task name' value={task} className='' onChange={(e) => {
        return (setTask(e.target.value))
      }} />
      <h2 className="edith2">Discription</h2>
      <OutlinedInput id="standard-basic" placeholder='enter discription' value={discription} variant="standard" className='' onChange={(e) => {
        return (setdiscription(e.target.value))
      }} /><br />
      <div className="editbtn">
        <div className='btnlog1' onClick={add}><Button variant="outlined"  >Add</Button></div>
        <div className='btnlog2'><Button variant="outlined"  ><Link  className='btnlog2' to="/alltask">Back</Link></Button></div>
      </div>

    </Box>

  )
}

export default Edit