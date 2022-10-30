import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.header}> 
        <div className={styles.logo}>
            <img 
                src="/android-chrome-512x512.png" 
                alt="logo" height={50} width={50}>
            </img>
        </div>

        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <div className={styles.dropdownBtn}>
                        <p>Tools</p>
                        <Image 
                            src="/Vector.png" 
                            alt="arrow" height={11} width={17} >
                        </Image>
                    </div>
                    {/* <div className={styles.dropdownCtn}> 
                        <ul className={styles.dropdownList}>
                            <li><p>Keyword density analyzer</p></li>
                        </ul>
                    </div> */}
                </li>

                <li className={styles.navItem}>
                    <div className={styles.dropdownBtn}>
                        <p>About</p>
                        <Image 
                            src="/Vector.png" 
                            alt="arrow" height={11} width={17} >
                        </Image>
                    </div>
                    {/* <div className={styles.dropdownCtn}> 
                        <ul className={styles.dropdownList}>
                            <li><Link href="/">About us</Link></li>
                            <li><Link href="/">Contact us</Link> </li>
                        </ul>
                    </div> */}
                </li>

                <li className={styles.navItem}>
                    <div className={styles.dropdownBtn}>
                        <p>Login</p>
                        <Image 
                            src="/Vector.png" 
                            alt="arrow" height={11} width={17} >
                        </Image> 
                    </div>
                    {/* <div className={styles.dropdownCtn}> 
                        <ul className={styles.dropdownList}>
                            <li> <Link href="/">Login</Link> </li>
                            <li> <Link href="/">Signup</Link> </li>
                        </ul>
                    </div> */}
                </li>
            </ul>
        </nav>

        <div className={styles.profile}>
            <Image src="/user.png" alt="user" height={51} width={49.5}></Image>
        </div>
    </div>
  )
}

export default Navbar