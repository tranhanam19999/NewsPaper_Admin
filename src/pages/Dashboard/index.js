import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu_Sidebar from '../../components/Menu_Sidebar'
import Header_mobile from '../../components/Header_mobile'
import Chart_in from '../../components/Chart_Infor'
import Chart from '../../components/Chart_Total'
import Top_Countries from '../../components/Top_countries'
import Earning from '../../components/Earning'
import Calender from '../../components/Calender'

const index = function(props){
    return (         
        <div className="page-wrapper">
                <Header_mobile/>
                <Menu_Sidebar/>
                <div className= "page-container">
                    <Header/>
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <overvieww/>               
                                    </div>
                                </div>
                                <div className="row m-t-25">
                                    <Chart_in/>
                                    <Chart_in/>
                                    <Chart_in/>
                                    <Chart_in/>                                          
                                </div>
                                <div className="row">
                                    <Chart/>
                                    <Chart/>               
                                </div>
                                <div className="row">
                                    <Earning/>
                                    <Top_Countries/>
                                </div>
                                <div className="row">
                                    <Calender/>
                                    <Calender/>              
                                </div>
                                <div className="row">
                                    <Footer/>
                                </div>
                        </div>                        
                    </div>
                </div>                        
            </div> 
        </div>                                         
    );
}
export default index;