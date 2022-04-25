import React from 'react'
import { Profile } from './Profile'
import { TagStats } from './TagStats'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/Login/action'
import Button from '@mui/material/Button';

export const Sidebar = ({token, name,todos}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <Profile token={token} name={name}/>
        <hr />
        <TagStats todos={todos}/>
          <hr />
          <Button style={{backgroundColor:"red",color:"white"}}
          onClick={()=>dispatch(logout())} 
          >logout</Button>
    </div>
  )
}
