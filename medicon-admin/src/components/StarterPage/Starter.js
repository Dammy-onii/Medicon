import CustomDropdown from "../CutomDropdown/CustomDropdown";
import './Starter.css'
import {useState} from "react";
const Starter = ({setUserEmail,setOption}) =>{
    const options = [
        { label: 'Individual', value: 'individual' },
        { label: 'Organisation', value: 'organisation' },
    ]

    const [emailText, setEmailText] = useState('');
    const handleSelect = (item) => {
        setOption(item);
    };

    const emailInputHandler = (event) =>{
        setEmailText(event.target.value);
        setUserEmail(emailText);
    }
    return(
        <div className={'body'}>
            <div className="form">
                <input onChange={emailInputHandler} type="email" name="text" autoComplete="off" required/>
                <label htmlFor="text" className="label-name">
                    <span className="content-name">
                      Email
                    </span>
                </label>
            </div>
            <p style={{color: '#495867', fontFamily: 'cursive', fontWeight: 600}}>Select Account Type</p>
            <CustomDropdown
                items={options}
                onSelect={handleSelect}
            />
        </div>
    );
}

export default Starter;