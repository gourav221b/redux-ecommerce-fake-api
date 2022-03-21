import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='ui fixed menu'>
        
        <div className="ui container center">
            <Link to ="/">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Header
