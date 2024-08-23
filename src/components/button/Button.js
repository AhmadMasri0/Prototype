import classes from './Button.module.css';

export const Button = ({title}) => {

    return <div className={classes.button}>
        {title}
    </div>;
}