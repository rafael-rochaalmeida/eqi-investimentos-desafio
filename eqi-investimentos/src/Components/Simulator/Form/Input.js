import React from "react";
import  styles  from "./Input.module.css"

const Input = ({ label, type, name, value, onChange, error, onBlur  }) => {
    return (
            <>
             <label htmlFor={name} > {label} </label>

                <input className={styles.input} value={value}  name={name} id={name} type={type} onChange={onChange}  onBlur={onBlur}  />
                {error && <p className={styles.error}>{error}</p>}
            
            </>
    )
}

export default Input;