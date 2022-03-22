import React from 'react'
import cor from './Corzina.module.scss'
import c from '../../image/logo/logocorz.png'
const Corzina = () => {
  return (
    <section>
        <div className={cor.card}>
           <img src={c} />
             <h1>К сожалению ваша корзина пуста</h1>
             <p>Чтобы добавить часы, выберите их в каталогах ювелирных украшений, часов, свадебных украшений.</p>
             <a href="/">Вернуться к покупкам</a>
        </div>
    </section>
  )
}

export default Corzina