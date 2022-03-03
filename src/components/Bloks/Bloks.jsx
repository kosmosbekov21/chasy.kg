import React from 'react'
import b from '../Bloks/Bloks.module.scss'
import f from '../../image/boxsho/box.jpg'
import j from '../../image/boxsho/orig.jpg'
import s from '../../image/boxsho/sport.jpg'
import m from '../../image/boxsho/m.jpg'
import a from '../../image/boxsho/a.jpg'
import u from '../../image/boxsho/ukr.jpg'
import '../../App.css'
const Bloks = () => {
    return (

        <section className={b.colonka}>
            <div className={b.tex}>
 <h2>ДОБРО ПОЖАЛОВАТЬ НА ОФИЦИАЛЬНЫЙ САЙТ МАГАЗИНОВ «CLOK.KG»</h2>
  <p>Мы рады приветствовать Вас в магазине лучших часов - Clok.kg! Если Вы хотите  купить оригинальные наручные часы известных брендов, то  мы  с  удовольствием  вам  поможем. Мы предлагаем наручные часы ведущих мировых компаний, модные новинки и эксклюзивные модели лимитированных коллекций.Мы с гордостью можем сказать что у нас один из самых больших выборов наручных часов в Бишкеке.</p>
 </div>
            <div class='container'>

                <div class='card'>
                    <div class='imgbox'>
                        <img src={f} />
                    </div>
                    <div class='content'>
                        <h2>Мужские часы</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

                <div class='card'>
                    <div class='imgbox'>
                        <img src={j} />
                    </div>
                    <div class='content'>
                        <h2>Женские часы</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>
                <div class='card'>
                    <div class='imgbox'>
                        <img src={s} />
                    </div>
                    <div class='content'>
                        <h2>Спортивные часы</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

            </div>

            <div class='container'>

                <div class='card'>
                    <div class='imgbox'>
                        <img src={m} />
                    </div>
                    <div class='content'>
                        <h2>Механические часы</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

                <div class='card'>
                    <div class='imgbox'>
                        <img src={a} />
                    </div>
                    <div class='content'>
                        <h2>Аксессуары</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>
                <div class='card'>
                    <div class='imgbox'>
                        <img src={u} />
                    </div>
                    <div class='content'>
                        <h2>Ювелирные украшения</h2>
                        <button class='btns'><a href="">Подробне</a></button>
                        <p>
                            <a href="https://chasy.kg/muzhskie-chasy">chasy.kg</a>
                        </p>
                    </div>
                </div>

            </div>

        </section>




        // <div className={b.container}>

        //     <div>

        //         <div className={b.card}>

        //             <img className={b.foto} src={f}/>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div>
        //         <div className={b.card}>
        //             <div className={b.image}></div>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div>
        //         <div className={b.card}>
        //             <div className={b.image}></div>
        //             <div className={b.info}>
        //                 <h2>About me</h2>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero voluptatum sit! Sequi facere in tempora quibusdam mollitia provident aut?</p>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Bloks