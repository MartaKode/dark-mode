import {useState, useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (myKey) => {
const [values, setValues] = useLocalStorage(myKey)
    
useEffect( () => {
    values ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
}, [values])

return [values, setValues]
}