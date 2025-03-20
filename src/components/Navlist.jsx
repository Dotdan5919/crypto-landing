import React from 'react'
import { Link } from 'react-scroll'

import { HashRouter } from 'react-router-dom'

const Navlist = ({name,link}) => {
  return (
    <li className='hover:underline transition-all transition:slow ease-in' >
<Link to={link} >
    {name}
    </Link>
    </li>
  )
}

export default Navlist
