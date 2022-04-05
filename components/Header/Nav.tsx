import Link from 'next/link';
import React, { FC, useEffect } from "react";
import navStyles from './Nav.module.css';
import ToolBar from './ToolBar';


const Nav: FC = () => {
    return (
        <>
            <nav className={navStyles.nav}>
                <ul>
                    <div className={navStyles.logo}>
                        <Link href="https://www.abstractclasses.in/">
                            <img className={navStyles.siteLogo} alt="Abstract Classes®" src="https://www.abstractclasses.in/wp-content/uploads/2022/02/abstractclasses-logo-1.png" />
                        </Link>
                    </div>
                </ul>
                <ToolBar />
            </nav>
        </>
    )
}

{/* <Link href="https://www.abstractclasses.in/">
<img className={navStyles.siteLogo} alt="Abstract Classes®" src="https://www.abstractclasses.in/wp-content/uploads/2022/02/abstractclasses-logo-1.png" />
</Link> */}

export default Nav;