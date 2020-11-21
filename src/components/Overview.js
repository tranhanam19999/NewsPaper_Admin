import React, {useEffect}from 'react'
import {loadScripts} from '../_utils/'
const Overview  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    },[])
    return (
        
      <div className="overview-wrap">
      <h2 className="title-1">overview</h2>      
    </div>
    )
}
export default Overview;