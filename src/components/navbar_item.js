import React from 'react';

const navbar_item = function(props){
    return (
        <ul className="list-unstyled navbar__list">
            <li className="active has-sub">
            <a className="js-arrow" href="#">
                <i className="fas fa-tachometer-alt cc_pointer" />Dashboard</a>
            <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                <a href="index.html">Dashboard 1</a>
                </li>
                <li>
                <a href="index2.html">Dashboard 2</a>
                </li>
                <li>
                <a href="index3.html">Dashboard 3</a>
                </li>
                <li>
                <a href="index4.html">Dashboard 4</a>
                </li>
            </ul>
            </li>
            <li>
            <a href="chart.html">
                <i className="fas fa-chart-bar" />Article</a>
            </li>
            <li>
            <a href="table.html">
                <i className="fas fa-table" />User</a>
            </li>
      </ul>
    )
}
export default navbar_item;