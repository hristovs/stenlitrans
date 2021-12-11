import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import loading from './loading-buffering.gif'
import useFetch from './useFetch.js'
import truck from './truck.jpeg'
import { Parallax } from 'react-parallax';
import { componentDidMount, componentWillUnmount } from 'react';
const Home = () => {
    const style = {
        fontSize:'50px',
        color:'white'
    }
    return ( 
        <div className="Home">
        <Parallax bgImage={truck}>
        <div className="text">
            <p style={style}> НИЕ СМЕ МЛАДА НО ПРОСПЕРИРАЩА ФИРМА, МАЛКА НО ОТГОВОРНА, КОЯТО ПРАВИ ВСИЧКО ВЪЗМОЖНО ЗА ДА ЗАДОВОЛИ НУЖДИДЕ НА СВОЙТЕ КЛИЕНТИТ И ТЯХНИТЕ ЖЕЛАНИЯ. 
ГЛАВНАТА НИ ДЕЙНОСТ СЕ РАЗВИВА В ТРАНСПОРТ И СПЕДИЦИЯ. РАЗПОЛАГАМЕ С КОМПЕТЕНТИ И ОБУЧЕНИ КАДРИ КОЙТО ИМАТ УМЕНИЯ ДА ПЛАНУВАТ И ОСЪЩЕСТВЯВАТ ЗАЯВКИ  НА ТЕРИТОРИЯТА НА ЦЯЛИЯТ ЕВРОПЕЙСКИ КОНТИТЕНТ. 
НАШИЯТ ЕКИП Е ОБУЧЕН ДА РАБОТИ В ДИНАМИЧНА И НАПРЕГНАТА СРЕДА В КОЯТО Е ПРЕДРАЗПОЛОЖЕН ТРАНСПОРТА И СПЕДИЦИЯТА. 
ГЛАВНАТАНИТЕ НИ ЦЕЛИ СА ДА ПОМАГА НА НАШИТЕ КЛИЕНТИ ДА НАМИРАТ СВОБОДНИ КАПАЦИТЕТИ ЗА СВОЙТЕ ТОВАРИ, НАЙ-НАДЕЖДЕН И ЕФИКАСЕН ТРАНСПОРТ И НАЙ-ЧЕСТНИ И ОТГОВОРНИ ПРЕВОЗВАЧИ. 
ЗА НАШИТЕ ДОСТАВЧИСИ НА ТРАНСПОРТ Е ВАЖНО ДА НАМИРАМЕ УДОБНИ И ЗАДОВОЛЯВАЩИ СТОКИ ЗА ПРЕВОЗ И ЗАПЪЛВАНЕ НА ТЯХНИТЕ ПРАЗНИ КАПАЦИТЕТИ. 
СТРЕМИМ СЕ ДА СМЕ ТОЧНИ С НАШИТЕ ПАРТНЬОРИ С КОЙТО РАБОТИМ РАМО ДО РАМО ДЕН ИЗ ДЕН И ДА СИ ПОМОГАМЕ В ОБЩИ И СЛУЖЕБНИ ПРОБЛЕМИ. </p>
        </div>
        </Parallax>
        </div>
        
     );
}
 
export default Home;