import React from "react";
import Input from "./Form/Input";

import styles from "./Simulator.module.css" ;



const Simulador = ({title}) => {
    return (
        <>
            <div className={styles.container_simulator}>
                <div className={styles.container_title}>
                    <h1>{title}</h1>   
                </div>
                
                <div className={styles.container_infos_simulator}>
                    <Input> </Input>
                </div>

            </div>

        </>
    );
}

export default Simulador;
