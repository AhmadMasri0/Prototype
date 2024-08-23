import { Button } from '../button/Button';
import { Section } from '../section/Section';
import classes from './HomeContent.module.css';


const BUTTONS = [
    'Print referral form', 'Close request', 'Referrals history', 'Print request form', 'Edit', 'View change log'
]

const RequestInformation = [
    { title: 'Regerral request no', placeholder: '2024-8-748402/1' },
    { title: 'Workflow status', placeholder: '' },
    { title: 'Referral status', placeholder: 'Saved' },
    { title: 'SPU aproval reason', placeholder: '' },
    { title: 'Created date', placeholder: '18/08/2024 by Avicenna' },
];

const FacilityInformation = [
    { title: 'Referring facility', placeholder: 'Doura Government hospital' },
    { title: 'Referral type', placeholder: 'Non-Emergency' },
    { title: 'Service delivery type', placeholder: 'Clinc visit' },
    { title: 'Referring doctor', placeholder: 'حافظ محمود المسالمة' },
    { title: 'visit date', placeholder: '14/08/2024 7:10 AM' },
    { title: 'Meical departement', placeholder: 'Surgery' },
    { title: 'Medical category', placeholder: 'Gastroenterology - Genreal surgery' },

];

const PatientInformation = [
    { title: 'Patient', placeholder: 'سهير محمد أحمد عمايرة' },
    { title: 'Document No.', placeholder: '080762594' },
    { title: 'Patient file No.', placeholder: '6259-11-4-2020' },
    { title: 'Gender', placeholder: 'Female' },
    { title: 'Date of birth', placeholder: '15/09/1970' },
    { title: 'Age', placeholder: 'Years: 53 months: 11 days:3' },
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