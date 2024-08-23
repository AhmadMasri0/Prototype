import classes from './Input.module.css'

export const Input = ({title}) => {

    return <div className={classes.inputContainer}>
        <h6 className={classes.title}>{title}</h6>
        <input type="text"></input>
    </div>;
}