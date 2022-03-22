import React from 'react'
import b from '../Bloks/Bloks.module.scss'
import f from '../../image/boxsho/box.jpg'
import j from '../../image/boxsho/orig.jpg'
import s from '../../image/boxsho/sport.jpg'
import m from '../../image/boxsho/m.jpg'
import a from '../../image/boxsho/a.jpg'
import u from '../../image/boxsho/ukr.jpg'
import 'animate.css';
import '../../App.css'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
const variants={
    hidden:{
        y: -200,
        opacity: 0,
        amount: 0.2
    },
    visible:{
        y:3,
        opacity:1,
        amount:0.2
    }
}

const Bloks = () => {
    return (

        <section className={b.colonka}>
          
            <motion.div variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className={b.tex}>
 <h2>ДОБРО ПОЖАЛОВАТЬ НА ОФИЦИАЛЬНЫЙ САЙТ МАГАЗИНОВ «CLOK.KG»</h2>
  <p>Мы рады приветствовать Вас в магазине лучших часов - Clok.kg! Если Вы хотите  купить оригинальные наручные часы известных брендов, то  мы  с  удовольствием  вам  поможем. Мы предлагаем наручные часы ведущих мировых компаний, модные новинки и эксклюзивные модели лимитированных коллекций.Мы с гордостью можем сказать что у нас один из самых больших выборов наручных часов в Бишкеке.</p>
 </motion.div>
            <div className={b.container}>

                <div className={b.card}>
                    <div className={b.imgbox}>
                        <img src={f} />
                    </div>
                    <div className={b.content}>
                        <h2>Мужские часы</h2>
                        <button className={b.btns}><NavLink to='/male'>Подробне</NavLink></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

                <div className={b.card}>
                    <div className={b.imgbox}>
                        <img src={j} />
                    </div>
                    <div className={b.content}>
                        <h2>Женские часы</h2>
                        <button className={b.btns}><NavLink to="/wooman">Подробне</NavLink></button>
                        
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>
                <div className={b.card}>
                    <div className={b.imgbox}>
                        <img src={s} />
                    </div>
                    <div className={b.content}>
                        <h2>Спортивные часы</h2>
                        <button className={b.btns}><NavLink to='/sport'>Подробне</NavLink></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

            </div>

            <div className={b.container}>

            <div className={b.card}>
            <div className={b.imgbox}>
                        <img src={m} />
                    </div>
                    <div className={b.content}>
                        <h2>Механические часы</h2>
                        <button className={b.btns}><NavLink to='/male'>Подробне</NavLink></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

                <div className={b.card}>
                <div className={b.imgbox}>
                        <img src={a} />
                    </div>
                    <div className={b.content}>
                        <h2>Смарт часы</h2>
                        <button className={b.btns}><NavLink to='/smart'>Подробне</NavLink></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>
                <div className={b.card}>
                <div className={b.imgbox}>
                        <img src={u} />
                    </div>
                    <div className={b.content}>
                        <h2>Ювелирные украшения</h2>
                        <button className={b.btns}><NavLink to='/decoration'>Подробне</NavLink></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default Bloks