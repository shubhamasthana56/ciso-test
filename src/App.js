import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Child1 from './components/child1';

const ThemeContext = React.createContext();
const App = ()=> {
  const [themeState, setThemeState ]= useState(true);
  
  const toggleTheme = ()=> {
    console.log('Invoked', themeState);
    setThemeState(!themeState);
  }
  const background = themeState ? 'blue' : 'red';
  return (
     
    <div style={{backgroundColor: background}} >

     <ThemeContext.Provider value={{themeState, toggleTheme}}>
     <Child1/>
     </ThemeContext.Provider>
      
    </div>
  )
}

export  {ThemeContext,App};
