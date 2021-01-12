export const getAdmin = (username, password) => {
    let address = 'tranhanam1999hn@gmail.com'
    let admin = {
        username,password,address
    }
    return fetch('http://localhost:5000/user/getAdmin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(admin)
    })
    .then(res => {
        return res.json().then(value => {
            return value
        })
    })
}
export const deleteBook = async (item) => {
    let res = await fetch('http://localhost:5000/art/deleteBook', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateBook = async (item) => {
    let res = await fetch('http://localhost:5000/art/update', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
}
export const getAllBook = async () => {
    let res = await fetch('http://localhost:5000/art/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export const deleteUser = async (item) => {
    let res = await fetch('http://localhost:5000/user/deleteUser', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateUser = async (item) => {
    let res = await fetch('http://localhost:5000/user/update', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
}
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
export const deleteTran = async (item) => {
    let res = await fetch('http://localhost:5000/tran/deleteTran', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateTran = async (item) => {
    let res = await fetch('http://localhost:5000/tran/updateTran', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    let value = await res.json()
    return value
}
export const getAllTrans = async () => {
    let res = await fetch('http://localhost:5000/cmt/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export const approveTran = async (item) => {
    let res = await fetch('http://localhost:5000/tran/approveTran', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
}
export const createNewBook = async (book) => {
    let res = await fetch('http://localhost:5000/art/createBook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    return res 
}
export default {getAdmin,approveTran,
                getAllTrans,updateTran,deleteTran,
                getAllBook,updateBook,deleteBook, createNewBook,
                getAllUser,deleteUser,updateUser}