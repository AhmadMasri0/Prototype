import classes from './SectionHeader.module.css';

export const SectionHeader = ({ title }) => {
    return <div className={classes.container}>
        {title}
    </div>
}