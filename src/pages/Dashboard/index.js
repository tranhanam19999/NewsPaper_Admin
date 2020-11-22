import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu_Sidebar from '../../components/Menu_Sidebar'
import Chart_in from '../../components/Chart_Infor'
import Chart from '../../components/Chart_Total'
import Top_Countries from '../../components/Top_countries'
import Earning from '../../components/Earning'
import Calender from '../../components/Calender'


const index  = props =>{
    return (         
        <div className="page-wrapper">               
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
                                    <Chart_in typeItem  = "account" number ="10368"  name ="members online"/>
                                    <Chart_in typeItem  = "shop-cart" number ="388,688"  name ="items soild"/>
                                    <Chart_in typeItem  = "calender" number ="1,086"  name ="this week"/>
                                    <Chart_in typeItem  = "money" number ="$1,060,386"  name ="total earnings"/>                                          
                                </div>                                
                                <Chart/>                                                                                                   
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