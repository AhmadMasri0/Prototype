import { Input } from '../input/Input';
import classes from './Section.module.css';


export const Section = ({ title, data }) => {

    return <div className={classes.section}>
        <h5 className={classes.title}>
            {title}
        </h5>
        <div className={classes.content}>
            {data.map((data) => <Input title={data.title} defaultValue={data.defaultValue} />)}

        </div>

    </div>;
}