import React from 'react'

const Chart_Total = function(props){
    return(
        <div className="col-lg-6">
                <div className="au-card recent-report">
                  <div className="au-card-inner">
                    <h3 className="title-2">recent reports</h3>
                    <div className="chart-info">
                      <div className="chart-info__left">
                        <div className="chart-note">
                          <span className="dot dot--blue" />
                          <span>products</span>
                        </div>
                        <div className="chart-note mr-0">
                          <span className="dot dot--green" />
                          <span>services</span>
                        </div>
                      </div>
                      <div className="chart-info__right">
                        <div className="chart-statis">
                          <span className="index incre">
                            <i className="zmdi zmdi-long-arrow-up" />25%</span>
                          <span className="label">products</span>
                        </div>
                        <div className="chart-statis mr-0">
                          <span className="index decre">
                            <i className="zmdi zmdi-long-arrow-down" />10%</span>
                          <span className="label">services</span>
                        </div>
                      </div>
                    </div>
                    <div className="recent-report__chart">
                      <canvas id="recent-rep-chart" />
                    </div>
                  </div>
                </div>
              </div>
    )
}
export default Chart_Total;