import React from 'react'
import { Form } from 'react-bootstrap'

import{MdOutlineFilterCenterFocus} from 'react-icons/md'
import './home.scss'
const Search = () => {
  return (
    <div className='search'>
        <div>

         <Form.Control size="lg"  type="text" placeholder="Search Barands" className='searchBox' />
        </div>
        <div  className="filter">

<MdOutlineFilterCenterFocus className='fill'/>
        </div>
    </div>
  )
}

export default Search