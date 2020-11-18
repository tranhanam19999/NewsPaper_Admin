import React from 'react';


const Chart_Infor = function(props){
    return (
        <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c1">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-account-o" />
                      </div>
                      <div className="text">
                        <h2>10368</h2>
                        <span>members online</span>
                      </div>
                    </div>
                    <div className="overview-chart">
                      <canvas id="widgetChart1" />
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default Chart_Infor;