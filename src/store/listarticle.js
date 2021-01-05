import {createSlice} from '@reduxjs/toolkit'
import {getAllArticle} from '../api/'
const slice = createSlice({
    name:'listArticle',
    initialState: [],
    reducers: {
        getItemArticle: (state,action) => {
            state = action.payload
            console.log('im state ', state)
            return state
        }
    }
})
export default slice.reducer
const {getItemArticle} = slice.actions
export const getArticle = () => async dispatch => {
    try {
        const res = await getAllArticle()
        dispatch(getItemArticle(res))
    }
    catch (e) {
        console.log('Error ', e.message)
    }
}
// export const createBook = (book) => async dispatch => {
//     try {
//         const res = await createNewBook(book)
//         if(res != null) {
//             const allBooks = await getAllBook()
//             dispatch(getItemBook(allBooks))
//         }
//     }
//     catch (e) {
//         console.log('Error while creating user ', e.message)
//     }
// }