import classes from './Button.module.css';

export const Button = ({ title, styles, icon, afterIcon }) => {

    console.log(styles)
    return <div className={`${classes.button} ${styles}`}>
        {icon}
        <span style={{marginRight: afterIcon ? '5px' : 'auto'}}>
            {title}
        </span>
        {afterIcon}
    </div>;
}