import classes from './Input.module.css'

export const CheckBox = ({ styles, values, disabled }) => {


    return <div className={`${classes.inputContainer} ${styles}`} >
        {values.map((item) => {

            return <div>
                <label for="vehicle1">{item}</label>
                <input type="checkbox" id={item} name={item} value={item} disabled={disabled} />
            </div>
        })}

    </div>;
}