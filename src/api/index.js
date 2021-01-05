export const getAllUser = async () => {
    let res = await fetch('http://localhost:5000/user/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export const getAllArticle = async () => {
    let res = await fetch('http://localhost:5000/art/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export default { getAllUser, getAllArticle }