import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <header className={classes.header}>
                <section className={classes.content}>
                    <div className={classes.logo}>
                        TMOS
                    </div>
                    <nav className={classes.nav}>
                        <ul>
                            <NavLinks />
                        </ul>
                    </nav>
                    <ul className={classes.ulAuth}>
                        <li>
                            <button className={classes.login}>Login</button>
                        </li>
                        <li>
                            <button className={classes.register}>Register</button>
                        </li>
                    </ul>
                </section>
            </header>
        </>
    )
}