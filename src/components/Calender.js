import React, {useEffect}from 'react'

const Calender  = props =>{
  
    return (
        <div className="col-lg-6">
        <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
          <div className="au-card-title" style={{backgroundImage: 'url("images/bg-title-01.jpg")'}}>
            <div className="bg-overlay bg-overlay--blue" />
            <h3>
              <i className="zmdi zmdi-account-calendar" />26 April, 2018</h3>
            <button className="au-btn-plus">
              <i className="zmdi zmdi-plus" />
            </button>
          </div>
          <div className="au-task js-list-load">
            <div className="au-task__title">
              <p>Tasks for John Doe</p>
            </div>
            <div className="au-task-list js-scrollbar3">
              <div className="au-task__item au-task__item--danger">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Meeting about plan for Admin Template 2018</a>
                  </h5>
                  <span className="time">10:00 AM</span>
                </div>
              </div>
              <div className="au-task__item au-task__item--warning">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Create new task for Dashboard</a>
                  </h5>
                  <span className="time">11:00 AM</span>
                </div>
              </div>
              <div className="au-task__item au-task__item--primary">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Meeting about plan for Admin Template 2018</a>
                  </h5>
                  <span className="time">02:00 PM</span>
                </div>
              </div>
              <div className="au-task__item au-task__item--success">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Create new task for Dashboard</a>
                  </h5>
                  <span className="time">03:30 PM</span>
                </div>
              </div>
              <div className="au-task__item au-task__item--danger js-load-item">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Meeting about plan for Admin Template 2018</a>
                  </h5>
                  <span className="time">10:00 AM</span>
                </div>
              </div>
              <div className="au-task__item au-task__item--warning js-load-item">
                <div className="au-task__item-inner">
                  <h5 className="task">
                    <a href="#">Create new task for Dashboard</a>
                  </h5>
                  <span className="time">11:00 AM</span>
                </div>
              </div>
            </div>
            <div className="au-task__footer">
              <button className="au-btn au-btn-load js-load-btn">load more</button>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Calender;