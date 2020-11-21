import React, {useEffect}from 'react'
import {loadScripts} from '../_utils/'
const logo  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    },[])
    return(
        <div className="logo">
        <a href="#">
          <img src="images/icon/logo.png" alt="Cool Admin" />
        </a>
      </div>
    )
}
export default logo;