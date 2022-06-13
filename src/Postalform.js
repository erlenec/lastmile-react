import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import'./components/css/Postalform.css';

const POSTAL_REGEX = /^[0-9]{6}$/;
const POSTAL_URL = '/ondemand';

const Postal = () => {
    const postalRef = useRef();
    const errRef = useRef();

    const [postal, setPostal] = useState('');
    const [validPostal, setValidPostal] = useState(false);
    const [postalFocus, setPostalFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        postalRef.current.focus();
    }, [])


    useEffect(() => {
        setValidPostal(POSTAL_REGEX.test(postal));
    }, [postal])


    useEffect(() => {
        setErrMsg('');
    }, [postal])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = POSTAL_REGEX.test(postal);
        if (!v1) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(POSTAL_URL,
                JSON.stringify({ postal }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setPostal('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Collection Status</h1>
                    <p>
                        <a href="/collection">Collection</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label class = "postal-label" htmlFor="postal">
                            Please enter your postal code
                            <FontAwesomeIcon icon={faCheck} className={validPostal ? "valid" : "hide"} />
                            </label>
                        <input
                            type="text"
                            id="postal"
                            ref={postalRef}
                            autoComplete="off"
                            onChange={(e) => setPostal(e.target.value)}
                            value={postal}
                            required
                            aria-describedby="uidnote"
                            onFocus={() => setPostalFocus(true)}
                            onBlur={() => setPostalFocus(false)}
                        />
                        <p id="uidnote" className={postalFocus && postal && !validPostal ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Please enter a valid postal code.
                            
                        </p>
                        <div class = "button-area">
                            <button class = "submit-button" disabled={!validPostal ? true : false}>Submit</button>
                    
                        </div>
                    </form>
                    
                </section>
            )}
        </>
    )
}

export default Postal