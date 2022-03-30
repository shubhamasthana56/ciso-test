import React, { useContext } from 'react';
import {ThemeContext} from '../../App';

const Child2 = ()=> {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    const handleClick = ()=> {
        console.log(toggleTheme)
        toggleTheme();
    }
    //console.log(context);
    return (
        <div>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    )
}
export default Child2;