import React from 'react'
import sm from './Smart.module.scss'
import q from '../image/smart/q.jpg'
import w from '../image/smart/w.png'
import e from '../image/smart/e.png'
import r from '../image/smart/r.jpg'
import t from '../image/smart/t.jpg'
import y from '../image/smart/y.jpg'
import u from '../image/smart/u.jpg'
import i from '../image/smart/i.png'
import o from '../image/smart/o.jpg'
import p from '../image/smart/p.jpg'
import a from '../image/smart/a.jpg'
import s from '../image/smart/s.jpg'
import d from '../image/smart/d.jpg'
import f from '../image/smart/f.png'
import g from '../image/smart/g.png'
import h from '../image/smart/h.jpg'
import j from '../image/smart/j.jpg'
import f_1 from '../image/logo/what.png'
import f_2 from '../image/logo/inst.png'
import f_3 from '../image/logo/fac.png'
import { NavLink } from 'react-router-dom'
const Smart = () => {
    return (
        <section className={sm.body}>
            {/* <div className={sm.vid}>
        <video autoPlay preload='auto' loop src={video_1}></video>
      </div> */}
            <div className={sm.bodys}>
                <div className={sm.container}>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={q} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SERIES 7</h5>
                                    <p>Область просмотра на всегда включённом дисплее Retina увеличена примерно на 20% по сравнению с Series 6 — теперь пользоваться часами ещё удобнее</p>
                                    <h4>Цена:</h4>
                                    <h2>49 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={w} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH GT2 PRO </h5>
                                    <p>Создатели HUAWEI WATCH GT поставили перед собой задачу выявить максимальный потенциал батареи смарт-часов. Благодаря двойному процессору для носимых устройств Kirin A1</p>
                                    <h4>Цена:</h4>
                                    <h2>24 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={e} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SE 40MM</h5>
                                    <p>Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Apple Watch SE — часы, с которыми вы оцените каждую секунду.</p>
                                    <h4>Цена:</h4>
                                    <h2>38 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={r} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH FIT</h5>
                                    <p>Часы HUAWEI WATCH FIT способны определить время начала, вид тренировки и напомнить об ее отслеживании. Независимо от того, занимаетесь вы бегом или плаванием, HUAWEI WATCH FIT могут отслеживать именно те показатели тренировок, которые вам необходимы.</p>
                                    <h4>Цена:</h4>
                                    <h2>8 290 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={t} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>SAMSUNG GALAXY WATCH 3</h5>
                                    <p>В инновационном устройстве Galaxy Watch3 с классическим дизайном гармонично сочетаются функциональность смартфона. Уникальные в своем роде Galaxy Watch3 помогут тебе легко контролировать твою активность и состояние здоровья.</p>
                                    <h4>Цена:</h4>
                                    <h2>8 290 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={y} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>SAMSUNG GALAXY WATCH ACTIVE</h5>
                                    <p>Умные часы Galaxy Watch Active получили современный премиальный дизайн и умные технологии. Устройство выполнено в тонком и легком корпусе, внутри которого нашлось место для современной начинки и богатого набора функций.</p>
                                    <h4>Цена:</h4>
                                    <h2>14 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={u} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH GT2</h5>
                                    <p>Создатели HUAWEI WATCH GT поставили перед собой задачу выявить максимальный потенциал батареи смарт-часов. Благодаря двойному процессору для носимых устройств Kirin A1.</p>
                                    <h4>Цена:</h4>
                                    <h2>17 290 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={i} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SERIES 6 44MM</h5>
                                    <p>Датчик уровня кислорода в крови, акселерометр 32g, гироскоп, датчик внешней освещенности,оптический датчик сердечного ритма 2го поколения1.</p>
                                    <h4>Цена:</h4>
                                    <h2>42 690 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={o} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>SAMSUNG GALAXY WATCH4</h5>
                                    <p>Специальный трекер фиксирует и детально анализирует фазы вашего сна. Улучшенный алгоритм измерения позволит вам проверить уровень кислорода в крови и характер храпа (если он у вас присутствует).</p>
                                    <h4>Цена:</h4>
                                    <h2>37 490 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={p} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>SAMSUNG GALAXY WATCH4</h5>
                                    <p>Galaxy Watch4 отличаются лаконичным дизайном и прочным алюминиевым корпусом. Они отлично дополнят любой образ и стиль и обеспечат широкую функциональность для выполнения ваших тренировок и повседневных задач.</p>
                                    <h4>Цена:</h4>
                                    <h2>26 990 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                      
                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={i} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SERIES 6 44MM</h5>
                                    <p>Датчик уровня кислорода в крови, акселерометр 32g, гироскоп, датчик внешней освещенности,оптический датчик сердечного ритма 2го поколения1.</p>
                                    <h4>Цена:</h4>
                                    <h2>42 690 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={a} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>AMAZFIT T-REX CAMO GREEN</h5>
                                    <p>Смарт-часы Amazfit T-Rex с 1.3-дюймовым дисплеем AMOLED имеют разрешение 360x360 пикселей. Прочный ремешок из термопласта мягкий и удобный, вес часов всего 58 грамм при габаритах 47.7 х 47.7 х 13.5.</p>
                                    <h4>Цена:</h4>
                                    <h2>13 890 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={s} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH FIT</h5>
                                    <p>Часы HUAWEI WATCH FIT способны определить время начала, вид тренировки и напомнить об ее отслеживании. Независимо от того, занимаетесь вы бегом или плаванием, HUAWEI WATCH FIT могут отслеживать именно те показатели тренировок, которые вам необходимы.</p>
                                    <h4>Цена:</h4>
                                    <h2>9 290 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={d} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SERIES 7</h5>
                                    <p>Область просмотра на всегда включённом дисплее Retina увеличена примерно на 20% по сравнению с Series 6 — теперь пользоваться часами ещё удобнее</p>
                                    <h4>Цена:</h4>
                                    <h2>49 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={f} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH GT2 PRO </h5>
                                    <p>Создатели HUAWEI WATCH GT поставили перед собой задачу выявить максимальный потенциал батареи смарт-часов. Благодаря двойному процессору для носимых устройств Kirin A1</p>
                                    <h4>Цена:</h4>
                                    <h2>25 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={g} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH SE 40MM</h5>
                                    <p>Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Apple Watch SE — часы, с которыми вы оцените каждую секунду.</p>
                                    <h4>Цена:</h4>
                                    <h2>35 790 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={r} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>HUAWEI WATCH FIT</h5>
                                    <p>Часы HUAWEI WATCH FIT способны определить время начала, вид тренировки и напомнить об ее отслеживании. Независимо от того, занимаетесь вы бегом или плаванием, HUAWEI WATCH FIT могут отслеживать именно те показатели тренировок, которые вам необходимы.</p>
                                    <h4>Цена:</h4>
                                    <h2>8 290 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={y} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>SAMSUNG GALAXY WATCH ACTIVE</h5>
                                    <p>Умные часы Galaxy Watch Active получили современный премиальный дизайн и умные технологии. Устройство выполнено в тонком и легком корпусе, внутри которого нашлось место для современной начинки и богатого набора функций.</p>
                                    <h4>Цена:</h4>
                                    <h2>14 090 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={h} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH NIKE SE GPS</h5>
                                    <p>Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. </p>
                                    <h4>Цена:</h4>
                                    <h2>32 690 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sm.box}>
                        <div className={sm.imgBox}>
                            <img src={j} />
                            <div className={sm.defalis}>
                                <div className={sm.content}>
                                    <h5>APPLE WATCH NIKE SE GPS</h5>
                                    <p>Форма часов Xiaomi Amazfit T-Rex Pro и наличие четко выраженных углов отражают прочность и износостойкость модели. Эти часы, успешно прошедшие 15 испытаний по военному стандарту, преодолеют вместе с вами жаркие пустыни, влажные тропические леса и полярные ледники.</p>
                                    <h4>Цена:</h4>
                                    <h2>14 490 сом</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            
            <section className={sm.and}>
      <div className={sm.cont}>
        <p>Вам нужна Бесплатная консультация области SMM?</p>
        <button> <a href="+996 (555) 47 17 98">Позвонить нам </a></button>

      </div>
      <div className={sm.tex}>
        <h4>Хотите узнавать первым об акциях и скидках?</h4>
        <p>Подпишитесь на нашу рассылку и покупайте с выгодой!</p>
      </div>
      {/* <div className={an.df}>
  
      </div> */}

      <div className={sm.contend}>
      
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
        <div className={sm.icons}>
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

export default Smart