import { CheckBox } from '../input/CheckBox';
import { Input } from '../input/Input';
import { Select } from '../input/Select';
import classes from './DetailsSection.module.css';
import { SectionHeader } from './SectionHeader';

export const DetailsSection = ({ data }) => {


    return <div className={classes.container}>
        <h5 className={classes.title}>
            معلومات التأمين الأساسية
        </h5>
        <div className={classes.content}>
            <Select title={'*نوع الوثيقة'} styles={classes.detailsInput} value={' (1)هوية فلسطينية'} />
            <Input title={'*رقم الوثيقة'} styles={classes.detailsInput} inputStyles={classes.inputStyles} />
            <Input title={'رقم البطاقة'} styles={classes.detailsInput} placeholder={625122} inputStyles={classes.inputStyles} />
            <Input title={'الاسم'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} />
            <Input title={'تاريخ الميلاد'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} placeholder={'1994-12-05'} disabled={true} />
            <Input title={'العنوان'} styles={classes.detailsInput} inputStyles={classes.inputStyles} placeholder={"رام الله_رام الله"} disabled={true} />
            <Input title={'نوع التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} placeholder={"موظف حكومي _موظف وزارة صحة"} disabled={true} />
            <Input title={'حالة التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} />
            <Select title={'حالة الدفع'} styles={classes.detailsInput} disabled={true} value={'تم (2)'} />
            <Input title={'عدد المرافقين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={0} />
            <Input title={'تاريخ بداية/ إحياء التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} placeholder={'2021-05-05'} disabled={true} />
            <Input title={'تاريخ نهاية التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} disabled={true} />
            <Input title={'القسط السنوي'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} />
            <Input title={'تغطية التحويلات الخارجية'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={100} />
            <Input title={'العيادة'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={"رام الله"} />
            <Input title={'الجهة التي يعمل بها'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={"مديرية صحة رام الله والبيرة"} />
            <Select title={'نوع المؤمن'} styles={classes.detailsInput} disabled={true} value={"موظف (1)"} />
            <CheckBox styles={classes.checkbox} values={['مريض سرطان', "مريض كلى"]} disabled={true} />
            <CheckBox styles={classes.checkbox} values={['لديه عجز صحي']} disabled={true} />
            <Input title={'نسبة العجز الصحي'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={""} />
            <Input title={'تاريخ سريان المفعول'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} placeholder={'2021-05-05'} disabled={true} />
            <Input title={'ساري المفعول؟'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={"ساري"} width={'45%'} />
            <CheckBox styles={classes.checkbox} values={['متوفى']} disabled={true} />
           <SectionHeader title={'البيانات الشخصية'}/>
           <SectionHeader title={'البيانات التأمين'}/>
           <SectionHeader title={'البيانات المرافقين'}/>
        </div>
    </div>;
}