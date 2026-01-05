import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { ThemeProvider, useTheme } from '@mui/material'
import { lightTheme, darkTheme } from './theme.js'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Hobby from './components/Hobby.jsx'
import ContactFooter from './components/ContactFooter.jsx'



function App() {

  //custom cursor
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
    cursorDot.style.left = e.clientX - cursorDot.offsetWidth / 2 + 'px';
    cursorDot.style.top = e.clientY - cursorDot.offsetHeight / 2 + 'px';
  });
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });


  const [count, setCount] = useState(0)
  const defaultTheme = useTheme()
  const [theme, setTheme] = useState(darkTheme)







  const toggleTheme = () => theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)

  const appGeneralStyle = {
    backgroundImage: theme === darkTheme ? 'url("bg-dark.png")' : "none",
    backgroundColor: theme.palette.background.main,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: 'fixed',
    minHeight: '100vh',

  }

  return (

    <ThemeProvider ThemeProvider theme={theme} >
      <div style={appGeneralStyle} >
        <NavBar />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Hobby />
        <ContactFooter />
      </div>

    </ThemeProvider >

  )
}


export default App
