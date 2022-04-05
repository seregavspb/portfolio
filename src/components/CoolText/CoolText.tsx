import { FC, useEffect, useRef, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import stringSplitter from '../../library/stringSplitter';
import CoolTextChar from '../CoolTextChar/CoolTextChar';
import "./CoolText.css";

interface ICoolText {
    text: string,
};

const CoolText: FC<ICoolText> = ({
    text
}) => {
    const [index, setIndex] = useState(0);
    const items = useRef(stringSplitter(text, 35)).current

    useInterval(() => {
        setIndex(i => i + 1); 
    }, 400, index === items.length)

    return (

        <div className='CoolText'>
            {items.filter((items, i) => i < index).map((item, i) => (<CoolTextChar key={`line_${i}`} text={item} />))}
        </div >
    )
}

export default CoolText;
