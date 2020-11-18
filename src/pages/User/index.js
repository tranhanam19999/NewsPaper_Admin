import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu_Sidebar from '../../components/Menu_Sidebar'
import MaterialTable from 'material-table'
import { colors } from '@material-ui/core'

const index = function(props){
    return (         
        <div className="page-wrapper">        
            <Menu_Sidebar/>
            <div className= "page-container">                
                <Header/>
                <div className="main-content">
                    <h1 >Đây là page User</h1>
                    <div style={{ maxWidth: '100%', border:'10px' }}>
                        <MaterialTable
                            columns={[
                                { title: 'Name', field: 'name' },
                                { title: 'ID', field: 'surname' },
                                { title: 'Adress', field: 'birthYear', type: 'numeric' },
                                { title: 'Number', field: 'birthCity', lookup: { 34: 'Nothing', 63: 'ToDo' } }
                            ]}                                                       
                            data={[{ name: 'Nam', surname: 'HCM', birthYear: 2000, birthCity: 63 },
                            { name: 'Bang', surname: 'DN', birthYear: 2000, birthCity: 34 },
                            { name: 'Luong', surname: 'HCM', birthYear: 200, birthCity: 63 },
                            { name: 'Tu', surname: 'HCM', birthYear: 2000, birthCity: 34 }]}
                            title="User Table"
                        />
                    </div>
                    <Footer/>                    
                </div>                        
            </div> 
        </div>                                         
    );
}
export default index;