export function debounce(func, delay = 500) {
    let timer = null
    return function() {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(func, delay);
    }
}