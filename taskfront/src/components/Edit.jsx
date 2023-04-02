import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom'; //is used for get the object that passing from alltaskcard when we click edit button

function Edit() {
  const [task, setTask] = useState({})
  const location = useLocation()
  console.log(location.state)
  useEffect(() => {

    setTask(location.state)
  }, [])
  return (

    <Box className="">
      <h1 className="">Add Task</h1>
      <h2 className="">Task</h2>
      <OutlinedInput placeholder='enter task name' value={task.task} className='' />
      <h2 className="add">Discription</h2>
      <OutlinedInput id="standard-basic" placeholder='enter discription' value={task.discription} variant="standard" className='' /><br />
      <div className='btnlog'><Button variant="outlined"  >Add</Button></div>

    </Box>

  )
}

export default Edit