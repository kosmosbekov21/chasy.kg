import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import log from '../../image/logo/chasy_kg_logo-b.png'
import { Dropdown } from 'react-bootstrap'

const Header = () => {
  return (
     
 <div className={s.topp}>
      <ul className={s.menu}>
    <li>
      <NavLink to='/'> <img src={log} /></NavLink>
    </li>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    КАТАЛОГ ЧАСОВ
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item> <NavLink to='/male'>Мужские часы</NavLink> </Dropdown.Item>
    <Dropdown.Item><NavLink to='/wooman'>Женские часы</NavLink></Dropdown.Item>
    <Dropdown.Item><NavLink to='/sport'>Спортивные часы</NavLink></Dropdown.Item>
    <Dropdown.Item><NavLink to='/meh'>Механические часы</NavLink></Dropdown.Item>
    <Dropdown.Item><NavLink to='/smart'>Смарт часы</NavLink></Dropdown.Item>
    <Dropdown.Item><NavLink to='/decoration'>Ювелирные украшения</NavLink></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        <li>
          <NavLink to="/">Главный</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Акция</NavLink>
        </li>
       
        <li>
          <NavLink to='/aboutt'>О нас</NavLink>
        </li>
      
      </ul>
    </div>
   
  )
}

export default Header