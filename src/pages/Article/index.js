import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getArticle } from '../../store/listarticle'
import Header from '../../layouts/Header'
import Naviagtion from '../../layouts/Naviagtion'
import MaterialTable from 'material-table'


const Article  = props =>{
    const { useState } = React;
    const dispatch = useDispatch()
    const listArticle = useSelector(state => {
        console.log('im state ' , state ) ; return state.listarticle})
    useEffect(() => {
        dispatch(getArticle())
    },[])
    // const [columns, setColumns] = useState([
    //   { title: 'Name', field: 'name' },
    //   { title: 'Image', field: 'image', initialEditValue: 'initial edit value' },
    //   { title: 'Content', field: 'content', type: 'string' },
    //   { title: 'Category', field: 'category' },
    //   { title: 'Number Comment', field: 'numberComment', type:'numeric' },
    //   { title: 'Create Date', field: 'createDate', type:'numeric' },
    //   { title: 'Status', field: 'status', type:'string' },
    // ]);
  
//     const [data, setData] = useState([
//       { name: 'Bang',image: 'IMG', content: 'Không có gì', category: 'CATEGORY', numberComment: '10',createDate:'10/12/2009', status: 'Active' },

//    /* { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },*/
//     ]);
    //const [data ,setData] = useState(listArticle)

    return !listArticle ? <></> : (
        <div className="page-wrapper">      
            <Naviagtion/>
            <div className= "page-container">           
                <Header/>
                <div className="main-content">                    
                    <div style={{ maxWidth: '100%', border:'10px', padding:'0 40px 0 40px' }}>
                        {/* <MaterialTable
                        title="Article Preview"
                        columns={columns}
                        data={data}
                        editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);
                                
                                resolve();
                            }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);
                
                                resolve();
                            }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);
                                
                                resolve()
                            }, 1000)
                            }),
                        }}/>  */}
                    </div>                                  
                </div>                        
            </div> 
        </div>  
    );                      
}
    
export default Article;

