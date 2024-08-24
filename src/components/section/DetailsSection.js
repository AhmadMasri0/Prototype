import { useEffect, useState } from 'react';
import { CheckBox } from '../input/CheckBox';
import { Input } from '../input/Input';
import { Select } from '../input/Select';
import classes from './DetailsSection.module.css';
import { SectionHeader } from './SectionHeader';

export const DetailsSection = ({ }) => {

    const [id, setId] = useState('');

    const [data, setData] = useState({
        v1: '',
        v2: '',
        v3: '',
        v4: '',
        v5: '',
        v6: '',
        v7: '',
        v8: '',
        v9: '',
        v10: '',
        v11: '',
        v12: '',
        v13: '',
        v14: '',
        v15: ''
    });

    useEffect(() => {

        if (id == '080762594') {
            setData({
                v1: '625122',
                v2: 'سهير محمد أحمد عمايرة',
                v3: '1994-12-05',
                v4: "رام الله_رام الله",
                v5: "موظف حكومي _موظف وزارة صحة",
                v6: 'فعال',
                v7: 'تم (2)',
                v8: '0',
                v9: '2021-05-05',
                v10: '100',
                v11: "رام الله",
                v12: "مديرية صحة رام الله والبيرة",
                v13: "موظف (1)",
                v14: '2021-05-05',
                v15: "ساري"
            })

        } else {
            setData({
                v1: '',
                v2: '',
                v3: '',
                v4: '',
                v5: '',
                v6: '',
                v7: '',
                v8: '',
                v9: '',
                v10: '',
                v11: '',
                v12: '',
                v13: '',
                v14: '',
                v15: ''
            })

        }
    }, [id]);


    return <div className={classes.container}>
        <h5 className={classes.title}>
            معلومات التأمين الأساسية
        </h5>
        <div className={classes.content}>
            <Select title={'*نوع الوثيقة'} styles={classes.detailsInput} value={' (1)هوية فلسطينية'} />
            <Input title={'*رقم الوثيقة'} value={id} setValue={setId} styles={classes.detailsInput} inputStyles={classes.inputStyles} placeholder={'080762594'} />
            <Input title={'رقم البطاقة'} styles={classes.detailsInput} value={data.v1} inputStyles={classes.inputStyles} />
            <Input title={'الاسم'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v2} />
            <Input title={'تاريخ الميلاد'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} value={data.v3} disabled={true} />
            <Input title={'العنوان'} styles={classes.detailsInput} inputStyles={classes.inputStyles} value={data.v4} disabled={true} />
            <Input title={'نوع التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} value={data.v5} disabled={true} />
            <Input title={'حالة التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v6} color={'green'} />
            <Select title={'حالة الدفع'} styles={classes.detailsInput} disabled={true} value={data.v7} />
            <Input title={'عدد المرافقين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v8} />
            <Input title={'تاريخ بداية/ إحياء التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} value={data.v9} disabled={true} />
            <Input title={'تاريخ نهاية التأمين'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} disabled={true} />
            <Input title={'القسط السنوي'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} />
            <Input title={'تغطية التحويلات الخارجية'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v10} />
            <Input title={'العيادة'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v11} />
            <Input title={'الجهة التي يعمل بها'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v12} />
            <Select title={'نوع المؤمن'} styles={classes.detailsInput} disabled={true} value={data.v13} />
            <CheckBox styles={classes.checkbox} values={['مريض سرطان', "مريض كلى"]} disabled={true} />
            <CheckBox styles={classes.checkbox} values={['لديه عجز صحي']} disabled={true} />
            <Input title={'نسبة العجز الصحي'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} placeholder={""} />
            <Input title={'تاريخ سريان المفعول'} styles={classes.detailsInput} inputStyles={classes.inputStyles} type={'date'} value={data.v14} disabled={true} />
            <Input title={'ساري المفعول؟'} styles={classes.detailsInput} inputStyles={classes.inputStyles} disabled={true} value={data.v15} width={'45%'} color={'green'} />
            <CheckBox styles={classes.checkbox} values={['متوفى']} disabled={true} />
            <SectionHeader title={'البيانات الشخصية'} />
            <SectionHeader title={'البيانات التأمين'} />
            <SectionHeader title={'البيانات المرافقين'} />
        </div>
    </div>;
}