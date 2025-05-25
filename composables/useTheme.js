export const useTheme = () => {
    const isDark = useState('isDark')
    const toggleDark = () => {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  
    return { isDark, toggleDark }
}