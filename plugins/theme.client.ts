export default defineNuxtPlugin(() => {
    const isDark = useState('isDark', () => false)
    if (process.client) {
      const theme = localStorage.getItem('theme')
      isDark.value = theme === 'dark'
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  })