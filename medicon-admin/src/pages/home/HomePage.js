import CustomDropdown from "../../components/CutomDropdown/CustomDropdown";
import {ArrowForwardOutlined} from "@mui/icons-material";
import './HomePage.css';
const HomePage = () =>{
    const options = [
        { label: 'Individual', value: 'individual' },
        { label: 'Organisation', value: 'organisation' },
    ]
    const handleSelect = (item) => {
        console.log('Selected item:', item);
    };
    return (
        <div className="App">
            <div className={'container'}>
                <div className={'header'}>
                    <p>Welcome</p>
                </div>
                <div className="form">
                    <input type="email" name="text" autoComplete="off" required/>
                    <label htmlFor="text" className="label-name">
                <span className="content-name">
                  Email
                </span>
                    </label>
                </div>
                <p style={{color: 'purple', fontFamily: 'sans-serif'}}>Select Account Type</p>
                <CustomDropdown
                    items={options}
                    onSelect={handleSelect}
                />
                <button className={'next'} type={'submit'}>
                    <span>Next</span>
                    <ArrowForwardOutlined className={'icon'} fontSize={"small"}/>
                </button>
            </div>
        </div>
    );
}

export default HomePage;