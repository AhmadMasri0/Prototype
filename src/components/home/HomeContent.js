import { Button } from '../button/Button';
import { Section } from '../section/Section';
import classes from './HomeContent.module.css';


const BUTTONS = [
    'Print referral form', 'Close request', 'Referrals history', 'Print request form', 'Edit', 'View change log'
]

const RequestInformation = [
    { title: 'Regerral request no', defaultValue: '2024-8-748402/1' },
    { title: 'Workflow status', defaultValue: '' },
    { title: 'Referral status', defaultValue: 'Saved' },
    { title: 'SPU aproval reason', defaultValue: '' },
    { title: 'Created date', defaultValue: '18/08/2024 by Avicenna' },
];

const FacilityInformation = [
    { title: 'Referring facility', defaultValue: 'Doura Government hospital' },
    { title: 'Referral type', defaultValue: 'Non-Emergency' },
    { title: 'Service delivery type', defaultValue: 'Clinc visit' },
    { title: 'Referring doctor', defaultValue: 'حافظ محمود المسالمة' },
    { title: 'visit date', defaultValue: '14/08/2024 7:10 AM' },
    { title: 'Meical departement', defaultValue: 'Surgery' },
    { title: 'Medical category', defaultValue: 'Gastroenterology - Genreal surgery' },

];

const PatientInformation = [
    { title: 'Patient', defaultValue: 'سهير محمد أحمد عمايرة' },
    { title: 'Document No.', defaultValue: '080762594' },
    { title: 'Patient file No.', defaultValue: '6259-11-4-2020' },
    { title: 'Gender', defaultValue: 'Female' },
    { title: 'Date of birth', defaultValue: '15/09/1970' },
    { title: 'Age', defaultValue: 'Years: 53 months: 11 days:3' },
];

export const HomeContent = () => {


    return <div className={classes.main}>
        <div>
            <span style={{ color: 'brown', fontWeight: 'bold' }}>Referral Request</span> &gt; 2024-8-748402/1
        </div>
        <div className={classes.buttonsContainer}>
            {BUTTONS.map((item) => <Button title={item} />)}
        </div>

        <Section title='REQUEST INFORMATION' data={RequestInformation} />
        <Section title='FACILITY INFORMATION' data={FacilityInformation} />
        <Section title='PATIENT INFORMATION' data={PatientInformation} />

    </div>;
}