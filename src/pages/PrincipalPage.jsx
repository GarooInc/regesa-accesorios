import { useState } from "react"
import styles from "./PrincipalPage.module.css"

const PrincipalPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="/images/REGESA-LOGO.svg" alt="logo" />
            </div>
            <div className={styles.body}>
                <div className={styles.containerBodyAudi}>
                    <img src="/images/LOGO-AUDI.svg" alt="logo" />
                    <div className={styles.containerButton}>
                        <button className={styles.button} style={{ color: "#9e9e9e" }}>Ingresa</button>
                        <img src="/images/arrowgray.svg" alt="logo" />
                    </div>
                </div>
                <div className={styles.containerBodyDucati}>
                    <img src="/images/DUCATI-LOGO.svg" alt="logo" />
                    <div className={styles.containerButton}>
                        <button className={styles.button} style={{ color: "#bd0000" }}>Ingresa</button>
                        <img src="/images/arrowred.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PrincipalPage