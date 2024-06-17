import './OrganisationComponent.css';

const OrganisationComponent = () =>{
    return (
        <div className={'body'}>
            <div className={'row'}>
                <div className="form">
                    <input type="text" name="text" autoComplete="off" required/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Company Name
                        </span>
                    </label>
                </div>
                <div className="form">
                    <input type="text" name="text" autoComplete="off" required/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Company Address
                        </span>
                    </label>
                </div>
            </div>
            <div className={'row'}>
                <div className="form">
                    <input type="email" name="text" autoComplete="off" required/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Company Email
                        </span>
                    </label>
                </div>
                <div className="form">
                    <input type="tel" name="text" autoComplete="off" inputMode={'tel'} required/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Emergency Contact
                        </span>
                    </label>
                </div>
            </div>

            <div className={'row'}>
                <div className="form">
                    <input type="password" name="text" autoComplete="off" required/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Password
                        </span>
                    </label>
                </div>
                <div className="form">
                    <input type="password" name="text" autoComplete="off" required min={8}/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                          Confirm password
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default OrganisationComponent;