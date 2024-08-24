import { Button } from '../button/Button';
import classes from './DetailsContent.module.css'
import { AiFillCaretDown, AiFillSetting, AiOutlineRedo } from "react-icons/ai";
import { DetailsSection } from '../section/DetailsSection';
import { useNavigate } from "react-router-dom";

export const DetailsContent = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
    return <div className={classes.container}>
        <div className={classes.buttonsContainer}>
            <div className={classes.leftButtons}>

                <Button title={'الاجراءات'} styles={classes.whiteButton} icon={<AiFillCaretDown size={7} />}
                    afterIcon={<AiFillSetting size={10} />
                    } />
                <Button title={'مسح'} afterIcon={<AiOutlineRedo />} />

            </div>
            <div className={classes.rightButtons}>
                <Button title={'الرجوع'} styles={classes.whiteButton} action={goBack} />
            </div>
        </div>
        <DetailsSection data={[]}/>

    </div>;
}