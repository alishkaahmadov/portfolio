export default defineNuxtPlugin(() => {
    const isDark = useState('isDark', () => {
        return localStorage.getItem('theme') === 'dark';
    })
    document.documentElement.classList.toggle('dark', isDark.value)
})