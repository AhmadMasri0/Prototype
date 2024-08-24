import classes from './Input.module.css'

export const Input = ({ title, styles, inputStyles, disabled, type, width, color, value, setValue, defaultValue }) => {

    const onChangeHandler = (e) => {
        if (title === '*رقم الوثيقة') {
            setValue(e.target.value);
        }
    }
    return <div className={`${classes.inputContainer} ${styles}`} style={{ minWidth: width }}>
        <h6 className={classes.title}>{title}</h6>
        <input style={{ color }} className={`${classes.input} ${inputStyles}`} type={type || 'text'} defaultValue={defaultValue}
            value={value} onChange={onChangeHandler} disabled={disabled}></input>
    </div>;
}