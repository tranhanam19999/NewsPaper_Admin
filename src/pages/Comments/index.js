import React, { useState, useEffect } from 'react';
import Header from '../../layouts/Header'
import Naviagtion from '../../layouts/Naviagtion'
import MaterialTable from 'material-table'
import { colors } from '@material-ui/core'


const Comment  = props =>{  
    const { useState } = React;
  
    const [columns, setColumns] = useState([
      { title: 'User Name', field: 'name' },
      { title: 'Body', field: 'body', initialEditValue: 'initial edit value' },
      { title: 'Article', field: 'article', type: 'string' },
      { title: 'Create Date', field: 'createDate' },   
      { title: 'Status', field: 'status', type:'string' },
    ]);
  
    const [data, setData] = useState([
      { name: 'Billie', body : 'HZ', article: 'NO', createDate: '12/11/2020', status: 'Active' },

   /* { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },*/
    ]);
  
    return (
        <div className="page-wrapper">        
            <Naviagtion/>
            <div className= "page-container">           
                <Header/>
                <div className="main-content">                    
                    <div style={{ maxWidth: '100%', border:'10px', padding:'0 40px 0 40px' }}>
                        <MaterialTable
                        title="Comment Preview"
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
                        }}
                        />  
                    </div>                                  
                </div>                        
            </div> 
        </div>  
    );                
}
export default Comment;