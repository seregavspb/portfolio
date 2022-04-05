import { FC } from 'react';
import CoolText from '../CoolText/CoolText';
import ScreenInput from '../ScreenInput/ScreenInput';
import "./Screen.css";

interface IScreen {
    text?: string,

};

const Screen: FC<IScreen> = ({
    text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, recusandae dignissimos labore consequuntur quas a corporis assumenda dolorem. Eos nostrum numquam explicabo ad, deserunt animi perferendis aut sit! Enim, aliquid! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, recusandae dignissimos labore consequuntur quas a corporis assumenda dolorem. Eos nostrum numquam explicabo ad, deserunt animi perferendis aut sit! Enim, aliquid! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, recusandae dignissimos labore consequuntur quas a corporis assumenda dolorem. Eos nostrum numquam explicabo ad, deserunt animi perferendis aut sit! Enim, aliquid! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, recusandae dignissimos labore consequuntur quas a corporis assumenda dolorem. Eos nostrum numquam explicabo ad, deserunt animi perferendis aut sit! Enim, aliquid! '
}) => {


    return (
        <div className='Screen'>
            <div className="Screen_content">
                <div className="Screen_leftColumn">
                    <CoolText text={text} />

                </div>
                <div className="Screen_rightColumn">

                </div>
            </div>
            <ScreenInput name='seregavspb' />
        </div>
    )
}

export default Screen;
