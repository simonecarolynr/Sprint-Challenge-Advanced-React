  
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'; 


const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue)

     useEffect(() => {
         darkMode === true ? document.querySelector('body').classList.add('dark-mode') :
         document.querySelector('body').classList.remove('dark-mode');
     });

     return [darkMode, setDarkMode];
    }

    export default useDarkMode;