import React, {useRef} from 'react'
import './switch.css'

function Switch ({setDarkMode, checked, setChecked}){
    const ref = useRef()
    function handleChange(){
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
    }

    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref = {ref} type="checkbox" checked = {checked} className="checkbox" id="checkbox" onChange={handleChange}/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>  
    )
}

export default Switch;