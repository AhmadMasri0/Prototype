import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

export const NavigationItem = ({ title, path }) => {


    const disableButton = (e) => {
        if (path !== '/details')
            e.preventDefault();
    }
    return <NavLink onClick={disableButton} to={path}
        className={({ isActive }) => isActive ? `${classes.item}  ${classes.active}` : classes.item}>
        {title}
    </NavLink>;
}