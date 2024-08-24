import classes from './Input.module.css'

export const Input = ({ title, placeholder, styles, inputStyles, disabled, type, width }) => {

    return <div className={`${classes.inputContainer} ${styles}`} style={{minWidth: width}}>
        <h6 className={classes.title}>{title}</h6>
        <input className={`${classes.input} ${inputStyles}`} type={type || 'text'} defaultValue={placeholder} disabled={disabled}></input>
    </div>;
}