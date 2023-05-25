import React from 'react'
import { Button, Space } from 'antd';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1> Dating App</h1> 
      <div className="nav-items">
        <div className="language">
            <select name="language" id="">
            <option value="English">English</option>
            <option value="Kiswahili">Kiswahili</option>
            </select>
        </div>
        <Button className='btn' type="primary">Login</Button>

      </div>
    </div>
  )
}

export default Navbar