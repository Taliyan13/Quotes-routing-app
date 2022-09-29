import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom'; //the difference between Link and NavLink
// is NavLink catch the relevante CSS file we have

const MainNavigation = () =>
{
    return <headr className={classes.header}>
        <div className={classes.logo}>Greate Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassNAme={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/new-quote' activeClassName={classes.active}>
                            Add a Quote
                    </NavLink>
                    </li>
                </ul>
            </nav>
    </headr>
};

export default MainNavigation;