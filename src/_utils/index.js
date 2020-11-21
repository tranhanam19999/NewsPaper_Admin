const sources = [
    '/js/main.js'
]
export const loadScripts = () => {
    const externalScripts = document.getElementById('external-scripts')
        externalScripts.innerHTML = ''
        Promise.all(sources.map(src => {
            return new Promise((resolve,reject) => {
                try {
                    const chuong = document.createElement('script')
                    chuong.src = src
                    chuong.async = false
                    chuong.defer = true
                    externalScripts.appendChild(chuong)
                    resolve();
                }
                catch (err) {
                    reject(err)
                }
            })
        }))
}
export default {loadScripts}