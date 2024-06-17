// import CustomDropdown from "../../components/CutomDropdown/CustomDropdown";
import {ArrowForwardOutlined} from "@mui/icons-material";
import './HomePage.css';
import Starter from "../../components/StarterPage/Starter";
import medicon_img from '../../assets/images/medicon_icon.svg';
import {useState} from "react";
import OrganisationComponent from "../../components/OrganistionPage/OrganisationComponent";
const HomePage = () =>{
    // const options = [
    //     { label: 'Individual', value: 'individual' },
    //     { label: 'Organisation', value: 'organisation' },
    // ]
    // const handleSelect = (item) => {
    //     console.log('Selected item:', item);
    // };
    const [option, setOption] = useState({label:'', value:''});
    const [page, setPage] = useState(null);
    const handleSubmit = (pageData) =>{
        setPage(pageData.value);
        console.log(pageData);

    }
    const [userEmail, setUserEmail] = useState('');
    return (
        <div className="home">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img height={400} src={medicon_img} alt={'Medicon'}/>
            </div>
            <div className={'container'}>
                <div className={'header'}>
                    <p>Sign Up</p>
                </div>
                {page == null || page === ''
                    ?
                    <Starter setUserEmail={setUserEmail} setOption={setOption}/>
                    :
                    page === 'organisation'
                        ?
                        <OrganisationComponent/>
                        :
                        <></>
                }
                <button className={'next'} type={'submit'} onClick={handleSubmit.bind(this, option)}>
                    <span>Next</span>
                    <ArrowForwardOutlined className={'icon'} fontSize={"small"}/>
                </button>
            </div>
        </div>
    );
}

export default HomePage;