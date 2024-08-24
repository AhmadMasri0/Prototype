import classes from './Navigation.module.css';
import { NavigationItem } from './NavigationItem';
import { AiFillCaretDown } from "react-icons/ai";

const items = [{ title: 'Referral Request', path: '/' },
{ title: 'Home', path: '/Home' },
{ title: 'Referring Facility', path: '/ReferringFacility' },
{ title: 'Referring Facility contract', path: '/ReferringFacilitycontract' },
{ title: 'committee', path: '/committee' },
{ title: 'Patient Admission & Discharge', path: '/PatientAdmission&Discharge' },
{ title: 'Patient', path: '/Patient' },
{ title: 'More', path: '/More', icon: <AiFillCaretDown /> },
{ title: 'سريان مفعول التأمين', path: '/details' },
];
export const Navigation = () => {
    return <div className={classes.container}>
        {items.map((item) => <NavigationItem title={item.title} path={item.path} icon={item.icon} />)}
    </div>
}