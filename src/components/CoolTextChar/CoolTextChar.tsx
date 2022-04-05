import { FC, useRef, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import "./CoolTextChar.css";

interface ICoolTextChar {
    text: string,

};

const CoolTextChar: FC<ICoolTextChar> = ({
    text
}) => {
    const [index, setIndex] = useState(0);
    const items = useRef(text.split('')).current
    useInterval(() => {
        setIndex(i => {
            return i + 1
        });
        console.log(index, items.length)
    }, 8, index > items.length)
    return (

        <div className='CoolTextChar'>
            {items.filter((items, i) => i < index).map((item, i) => <span key={`char_${i}`}>{item}</span>)}
        </div >
    )
}

export default CoolTextChar;
