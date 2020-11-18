import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu_Sidebar from '../../components/Menu_Sidebar'
import Header_mobile from '../../components/Header_mobile'

const index = function(props){
    return (         
        <div className="page-wrapper">
            <Header_mobile/>
            <Menu_Sidebar/>
            <div className= "page-container">
                <Header/>
                <div className="main-content">
                    <Footer/>
                    <h1>day laf page Usser</h1>
                </div>                        
            </div> 
        </div>                                         
    );
}
export default index;