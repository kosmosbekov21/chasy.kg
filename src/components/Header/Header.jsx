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
    <Dropdown className={s.drops}>
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

        <li className={s.drop}>
          <NavLink to="/">Главный</NavLink>
        </li>
        <li className={s.drop}>
          <NavLink to="/blog">Акция</NavLink>
        </li>
       
        <li className={s.drop}>
          <NavLink to='/aboutt'>О нас</NavLink>
        </li>
      
        <button className={s.drop}><NavLink  to='/corzina'  className={s.corz}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg><p>МОЯ КОРЗИНА</p> </NavLink></button>

      </ul>
    </div>
   
  )
}

export default Header