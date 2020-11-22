import React, {useEffect}from 'react'
import {loadScripts} from '../_utils/'
const Chart_Infor  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    },[])
    return (
      
        <div className="col-sm-6 col-lg-3">
                <div className={props.typeItem == "account" ? "overview-item overview-item--c1": "" + 
                    props.typeItem == "shop-cart" ? "overview-item overview-item--c2" : "" +
                    props.typeItem == "calender" ? "overview-item overview-item--c3" : "" +
                    props.typeItem == "money" ? "overview-item overview-item--c4" : "" }>
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className={props.typeItem == "account" ? "zmdi zmdi-account-o": "" + 
                                    props.typeItem == "shop-cart" ? "zmdi zmdi-shopping-cart" : "" +
                                    props.typeItem == "calender" ? "zmdi zmdi-calendar-note" : "" +
                                    props.typeItem == "money" ? "zmdi zmdi-money" : "" } />
                      </div>
                      <div className="text">
                        <h3 style={{color:"white", fontWeight: "normal" }}>{props.number}</h3>
                        <span>{props.name}</span>
                      </div>
                    </div>
                    <div id="overview-chart">
                      <canvas id={props.typeItem == "account" ? "widgetChart1": "" + 
                            props.typeItem == "shop-cart" ? "widgetChart2" : "" +
                            props.typeItem == "calender" ? "widgetChart3" : "" +
                            props.typeItem == "money" ? "widgetChart4" : "" }/>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default Chart_Infor;