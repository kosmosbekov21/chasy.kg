import React from "react";
import an from './And.module.scss'
import { NavLink } from "react-router-dom";
const And = () => {
    return(
        <section className={an.and}>
             <div className={an.cont}>
                <p>Вам нужна Бесплатная консультация области SMM?</p>
                <button> <a href="+996 (555) 47 17 98">Позвонить нам </a></button>
               
            </div>
            <div className={an.tex}>
                <h4>Хотите узнавать первым об акциях и скидках?</h4>
                <p>Подпишитесь на нашу рассылку и покупайте с выгодой!</p>
            </div>
            <div className={an.df}>
             <h5>КАТАЛОГ</h5>
             <h5>АДРЕС</h5>
             <h5>КОНТАКТЫ</h5>
             <h5>МЫ СОЦ. СЕТЯХ</h5>
            </div>
            <div>
            <li>
          <NavLink to="#/action-1">Мужские часы</NavLink>
        </li>
        <li>
          <NavLink to="#/action-2">Женские часы</NavLink>
        </li>
       
        <li>
          <NavLink to="#/action-3">Спортивные часы</NavLink>
        </li>
        <li>
          <NavLink to="#/action-4">Механические часы</NavLink>
        </li>
            </div>
            
        </section>
    )
}
export default And