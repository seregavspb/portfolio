import { FC, useState } from 'react';
import useEventListener from '../../hooks/useEventListener';
import "./ScreenInput.css";

interface IScreenInput {
    name: string,
};

const ScreenInput: FC<IScreenInput> = ({
    name = 'seregavspb'
}) => {

    const [index, setIndex] = useState(0);
    const [input, setInput] = useState([' ']);

    useEventListener('keydown', (event) => {
        if (event.keyCode === 8 || event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 40 || (event.keyCode >= 48 && event.keyCode <= 90)) {
            switch (event.code) {
                case 'Backspace':
                    backSpaceKey(index);
                    break;
                case 'ArrowLeft':
                    arrows('left');
                    break;
                case 'ArrowRight':
                    arrows('right');
                    break;
                default:
                    addKey(index, event.key);
                    break;
            }
        }
    }, document)

    const addKey = (i: number, key: string) => setInput((item) => {
        const array = [...item];
        array.splice(index, 0, key);
        setIndex(i + 1);
        return array;
    })


    const backSpaceKey = (index: number) => setInput((item) => {
        const array = [...item];
        if (array.length > 1 && index > 0) {
            array.splice(index - 1, 1)
            setIndex(index - 1)
        }
        return array;
    })

    const arrows = (direction: 'left' | 'right') => setIndex(index => {
        const pos = direction === "left" ? index - 1 : index + 1;
        return pos >= 0 ? pos < input.length - 1 ? pos : input.length - 1 : 0;
    })

    return (
        <div className='ScreenInput'>
            <span>{name + '>'}</span>
            {input.map((item, i) => (<span className={i === index ? 'ScreenInput--active' : ''}>{item}</span>))}
        </div>
    )
}

export default ScreenInput;