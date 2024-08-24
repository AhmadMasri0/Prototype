import classes from './Input.module.css'

export const Select = ({ title, styles, disabled, value }) => {

    return <div className={`${classes.inputContainer} ${styles}`} >
        <h6 className={classes.title}>{title}</h6>
        <select name="ids" id="ids" style={{ width: '100%', marginTop: '0px', height: '29.2px', textAlign: 'end', marginTop: '5px' }} disabled={disabled}>
            <option value="id">{value}</option>
        </select>
    </div>;
}