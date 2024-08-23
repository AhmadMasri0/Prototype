import { Button } from '../button/Button';
import { Section } from '../section/Section';
import classes from './HomeContent.module.css';


const BUTTONS = [
    'Print referral form', 'Close request', 'Referrals history', 'Print request form', 'Edit', 'View change log'
]

const RequestInformation = [
    'Regerral request no', 'Workflow status', 'Referral status', 'SPU aproval reason', 'Created date'
];

const FacilityInformation = [
    'Referring facility', 'Referral type', 'Service delivery type',
    'Referring doctor', 'visit date', 'Meical departement', 'Medical category'
];

const PatientInformation = [
    'Patient', 'Document No.', 'Patient file No.', 'Gender', 'Date of birth', 'Age'
];

export const HomeContent = () => {


    return <div className={classes.main}>
        <div>
            <span style={{ color: 'brown', fontWeight: 'bold' }}>Referral Request</span> &gt; 2024-08-23
        </div>
        <div className={classes.buttonsContainer}>
            {BUTTONS.map((item) => <Button title={item} />)}
        </div>

        <Section data={RequestInformation} />
        <Section data={FacilityInformation} />
        <Section data={PatientInformation} />

    </div>;
}