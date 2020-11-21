import React, {useEffect}from 'react'
import {loadScripts} from '../_utils/'
const Footer  = props =>{
    useEffect(() =>{
        document.onload  = loadScripts()
    },[])
    return (
        <div className="col-md-12">
                <div className="copyright">
                  <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                </div>
              </div>
    )
}
export default Footer;