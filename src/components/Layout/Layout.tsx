import { FC } from 'react';
import "./Layout.css";

interface ILayout { };

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div className='Layout'>
            <div className="Layout_centered">
                {children}
            </div>
        </div>
    )
}

export default Layout;
