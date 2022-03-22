import React, { useState } from 'react'
import mu from './Male.module.scss'
import q from '../image/male/q.jpg'
import w from '../image/male/w.jpg'
import e from '../image/male/e.jpg'
import r from '../image/male/r.jpg'
import t from '../image/male/t.jpg'
import y from '../image/male/y.jpg'
import u from '../image/male/u.jpg'
import i from '../image/male/i.jpg'
import o from '../image/male/o.jpg'
import p from '../image/male/p.jpg'
import a from '../image/male/a.jpg'
import s from '../image/male/s.jpg'
import d from '../image/male/d.jpg'
import f from '../image/male/f.jpg'
import g from '../image/male/g.jpg'
import h from '../image/male/h.jpg'
import j from '../image/male/j.jpg'
import k from '../image/male/k.jpg'
import l from '../image/male/lj.jpg'
import z from '../image/male/z.jpg'
import f_1 from '../image/logo/what.png'
import f_2 from '../image/logo/inst.png'
import f_3 from '../image/logo/fac.png'
import { NavLink } from 'react-router-dom'
const Male = () => {
  const [menu, setMenu] = useState (
    
    //    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
    // <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
    //    </svg>
       
  )
  return (
    <section className={mu.body}>

      <div className={mu.bodys}>
      <div className={mu.container}>
        
        <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={q} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Командирские</h5>
                  <p>механические мужские аналоговые корпус латунь браслет: кожа водонепроницаемость: WR30 (брызги, дождь)</p>
                  <h4>Цена:</h4>
                 <h2>2 900 сом</h2>
                </div>
                {/* <div onClick={()=>setMenu(<div className={mu.sv}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></div>)}>
          {menu}
                </div> */}
           
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={w} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Casio</h5>
                  <p>Мужские и женские модели часов от Японских производителей. Высококачественная сталь с нестирающимся покрытием, точность, надежность. </p>
                  <h4>Цена:</h4>
                  <h2>4 300 сом</h2>
                </div>

              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={e} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>G-Shock GA 100</h5>
                  <p>Общие характеристики Тип кварцевые, мужские Способ отображения времени аналоговый + цифровой, формат 12/24 часа, секундная стрелка отсутствует Цифры отсутствуют Источник энергии от батарейки Водонепроницаемые есть, WR200</p>
                  <h4>Цена:</h4>
                  <h2>8 900 сом</h2>
                </div>
              </div>
            </div>
          </div>
          
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={r} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>OMAX CSM0</h5>
                  <p>Сапфировое стекло- SAPPHIRE ВОДОЗАЩИТА - 5 bar Механизм EPSON VX9J - Япония Корпус сплав ALLOY с покрытие - PVD Браслет стальной с покрытие - PVD Диаметр -42 мм  Толщина -10мм</p>
                  <h4>Цена:</h4>
                  <h2>5 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={t} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Амфибия 100315</h5>
                  <p>Механические с автоподзаводом мужские аналоговые корпус из стали браслет: нерж. сталь число камней: 31 противоударные водонепроницаемость: WR200 (погружение под воду с аквалангом)</p>
                  <h4>Цена:</h4>
                  <h2>5 900 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={y} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>EDIFICE EFV-58L</h5>
                  <p>Кварцевые мужские аналоговые корпус из стали водонепроницаемость: WR100 (плавание, ныряние без акваланга) Комплектация: коробка, часы, гарантия, инструкция</p>
                  <h4>Цена:</h4>
                  <h2>10 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={u} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>OMAX CSM007</h5>
                  <p>Сапфировое стекло- SAPPHIRE ВОДОЗАЩИТА - 5 bar Механизм EPSON VX9J - Япония Корпус сплав ALLOY с покрытие - PVD Браслет стальной с покрытие - PVD Диаметр -42 мм  Толщина -10мм</p>
                  <h4>Цена:</h4>
                  <h2>5 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={i} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>OMAX CSM007Q002</h5>
                  <p>Сапфировое стекло- SAPPHIRE ВОДОЗАЩИТА - 5 bar Механизм EPSON VX9J - Япония Корпус сплав ALLOY с покрытие - PVD Браслет стальной с покрытие - PVD Диаметр -42 мм  Толщина -10мм</p>
                  <h4>Цена:</h4>
                  <h2>5 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={o} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>WEIDE 6406</h5>
                  <p>Бренд:	WEIDE;
  Серия:	6406;
  Тип механизма:	Кварцевые;
  Пол:	Мужской;
  Стиль:	Спортивный;
  Материал ремешка:	Резиновый;
  Форма:	Круглая;</p>
                  <h4>Цена:</h4>
                  <h2>2 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={p} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Curren #61</h5>
                  <p>Механизм : кварцевый Корпус и браслет : стальной / полиуретан Стрелки с фосфорными вставками - светятся в темноте Функция : число</p>
                  <h4>Цена:</h4>
                  <h2>1 100 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={a} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Curren #74</h5>
                  <p>Механизм : стальной / полиуретан Стрелки с фосфорными вставками - светятся в темноте Функция : число</p>
                  <h4>Цена:</h4>
                  <h2>900 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={s} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Naviforce 9066-2</h5>
                  <p>Кварцевые мужские аналоговые корпус из стали браслет: текстиль водонепроницаемость: WR30 (брызги, дождь)</p>
                  <h4>Цена:</h4>
                  <h2>1 500 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={d} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Naviforce 9117-6</h5>
                  <p>Характеристики товара Бренд: Naviforce Модель: 9079 Тип механизма: Кварцевый Глубина Водонепроницаемости: 3 Bar (можно мыть руки) Форма циферблата : Круглая</p>
                  <h4>Цена:</h4>
                  <h2>2 000 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={f} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Casio A159WA</h5>
                  <p>Тип механизма: кварцевый Японский пол: уни класс водонепроницаемости: WR30 (брызги, дождь, можно мыть руки) материал корпуса: пластик стекло: пластиковое материал браслета/ремешка: сталь сборка Япония</p>
                  <h4>Цена:</h4>
                  <h2>2 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={g} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Casio MTP-E114L-1A</h5>
                  <p>Кварцевые мужские аналоговые корпус из стали браслет: кожаводонепроницаемость: WR (минимальная защита)</p>
                  <h4>Цена:</h4>
                  <h2>6 700 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={h} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Casio MTP-1310</h5>
                  <p>Кварцевые мужские аналоговые корпус из стали браслет: кожаводонепроницаемость: WR (минимальная защита)</p>
                  <h4>Цена:</h4>
                  <h2>4 500 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={j} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Curren #49</h5>
                  <p>Механизм : кварцевый (от батарейки) Корпус и браслет : стальной Браслет : регулируется Функция : число Диаметр циферблата : 43 мм.Толщина корпуса 10 мм.Длина браслета : 20 см. Ширина браслета : 20 мм.</p>
                  <h4>Цена:</h4>
                  <h2>1 300 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={k} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Casio RETRO A-168WEGB</h5>
                  <p>+ защитное стекло в Подарок! кварцевые наручные часы мужские цифровые пластиковый корпус браслет: нерж. сталь водонепроницаемость: WR (минимальная защита) будильник</p>
                  <h4>Цена:</h4>
                  <h2>5 900 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={l} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Tevise 2020</h5>
                  <p>Классические синие кварцевые часы с браслетом из нержавеющей стали Tevise 2020 oem Япония movt dtches</p>
                  <h4>Цена:</h4>
                  <h2>8 900 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
          <div className={mu.box}>
            <div className={mu.imgBox}>
              <img src={z} />
              <div className={mu.defalis}>
                <div className={mu.content}>
                  <h5>Skmei</h5>
                  <p>Модные парные часы skmei #9058 Роскошные Кварцевые классические часы.</p>
                  <h4>Цена:</h4>
                  <h2>9 190 сом</h2>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>

      <section className={mu.and}>
      <div className={mu.cont}>
        <p>Вам нужна Бесплатная консультация области SMM?</p>
        <button> <a href="+996 (555) 47 17 98">Позвонить нам </a></button>

      </div>
      <div className={mu.tex}>
        <h4>Хотите узнавать первым об акциях и скидках?</h4>
        <p>Подпишитесь на нашу рассылку и покупайте с выгодой!</p>
      </div>
      {/* <div className={an.df}>
  
      </div> */}

      <div className={mu.contend}>
      
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
        <div className={mu.icons}>
        <a href=""><img src={f_1} /></a>
        <a href=""> <img src={f_2} /></a>
        <a href=""> <img src={f_3} /></a>
        </div>
        </div>

      </div>
    </section>
      
    </section>
  )
}

export default Male