import React from "react";
import an from './And.module.scss'
import { NavLink } from "react-router-dom";
import f_1 from '../../image/logo/what.png'
import f_2 from '../../image/logo/inst.png'
import f_3 from '../../image/logo/fac.png'
const And = () => {
  return (
    <section className={an.and}>
      <div className={an.cont}>
        <p>Вам нужна Бесплатная консультация области SMM?</p>
        <button> <a href="+996 (555) 47 17 98">Позвонить нам </a></button>

      </div>
      <div className={an.tex}>
        <h4>Хотите узнавать первым об акциях и скидках?</h4>
        <p>Подпишитесь на нашу рассылку и покупайте с выгодой!</p>
      </div>
      {/* <div className={an.df}>
  
      </div> */}

      <div className={an.contend}>
      
        <div>
        <h5>КАТАЛОГ</h5>
          <li>
            <NavLink to="/male">Мужские часы</NavLink>
          </li>
          <li>
            <NavLink to="/wooman">Женские часы</NavLink>
          </li>

          <li>
            <NavLink to="/sport">Спортивные часы</NavLink>
          </li>
          <li>
            <NavLink to="/meh">Механические часы</NavLink>
          </li>
          <li>
            <NavLink to="/smart">Смарт часы</NavLink>
          </li>
          <li>
            <NavLink to="/decoration">Ювелирные украшения</NavLink>
          </li>
        </div>

        <div>
        <h5>АДРЕС</h5>
          <a href="https://2gis.kg/bishkek/firm/70000001019367295/74.614494%2C42.876084?floor=1&m=74.614883%2C42.875859%2F18.98">г. Бишкек, ЦУМ, 3-этаж, B-4</a>
        </div>

        <div>
        <h5>КОНТАКТЫ</h5>
          <div> <a href="+996 (555) 47 17 98">+996 (555) 47 17 98</a></div>
          <div><a href="+996 (504) 30 07 02">+996 (504) 30 07 02</a></div>
          <div><a href="+996 (777) 30 07 02">+996 (504) 30 07 02</a></div>
        </div>

        <div>
        <h5>МЫ СОЦ. СЕТЯХ</h5>
        <div className={an.icons}>
        <a href=""><img src={f_1} /></a>
        <a href=""> <img src={f_2} /></a>
        <a href=""> <img src={f_3} /></a>
        </div>
        </div>

      </div>
    </section>
  )
}
export default And