import { Input } from '../input/Input';
import classes from './Section.module.css';


export const Section = ({ data }) => {

    return <div className={classes.section}>
        <h5 className={classes.title}>
            REQUEST INFORMATION
        </h5>
        <div className={classes.content}>
            {data.map((data) => <Input title={data} />)}



        </div>

    </div>;
}