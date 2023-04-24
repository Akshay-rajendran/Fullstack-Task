import React from 'react'
import { Box } from '@mui/system'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addtask } from '../Api/Api';

function Addtask() {
  let taskref = useRef()
  let discriptionref = useRef()
  let navigate = useNavigate()
  async function submit() {
    let task = {
      task: taskref.current.value,
      discription: discriptionref.current.value
    }
    console.log("task", task);
    let res = await axios.post(addtask, task)
    console.log(res);
    if (res.data.succes == true) {
      navigate("/alltask")
    } else {
      alert(res.data.msg)
    }
  }
  return (
    <div className="outer">
      <Box className="addtask">
        <h1 className="addh1">Add Task</h1>
        <h2 className="add">Task</h2>
        <OutlinedInput id="standard-basic" placeholder='enter task name ' className='input' inputRef={taskref} />
        <h2 className="add">Discription</h2>
        <OutlinedInput id="standard-basic" placeholder='enter discription' variant="standard" className='input' inputRef={discriptionref} /><br />
        <div className="addbtn">
        <div className='btnlog'><Button variant="outlined" onClick={submit} >Add</Button></div>
        <div className='btnlog'><Button variant="outlined"><Link  className='btnlog3' to="/alltask">Alltask</Link></Button></div>
    </div>

    </Box >
    </div >
  )
}

export default Addtask