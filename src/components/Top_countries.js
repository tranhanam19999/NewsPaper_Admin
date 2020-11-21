import React, {useEffect}from 'react'
import {loadScripts} from '../_utils/'
const Top_Countries  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    },[])
    return (
        <div className="col-lg-3">
        <h2 className="title-1 m-b-25">Top countries</h2>
        <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
          <div className="au-card-inner">
            <div className="table-responsive">
              <table className="table table-top-countries">
                <tbody>
                  <tr>
                    <td>United States</td>
                    <td className="text-right">$119,366.96</td>
                  </tr>
                  <tr>
                    <td>Australia</td>
                    <td className="text-right">$70,261.65</td>
                  </tr>
                  <tr>
                    <td>United Kingdom</td>
                    <td className="text-right">$46,399.22</td>
                  </tr>
                  <tr>
                    <td>Turkey</td>
                    <td className="text-right">$35,364.90</td>
                  </tr>
                  <tr>
                    <td>Germany</td>
                    <td className="text-right">$20,366.96</td>
                  </tr>
                  <tr>
                    <td>France</td>
                    <td className="text-right">$10,366.96</td>
                  </tr>
                  <tr>
                    <td>Australia</td>
                    <td className="text-right">$5,366.96</td>
                  </tr>
                  <tr>
                    <td>Italy</td>
                    <td className="text-right">$1639.32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Top_Countries;