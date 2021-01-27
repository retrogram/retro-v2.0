import Head from 'next/head'
import { useState } from 'react';
import Example from '../components/modal';
import Layout, { siteTitle } from '../components/layout'
import Terms from '../components/terms'
import formStyles from './add-story.module.css'
import modalStyles from '../components/modal.module.css'

function goFurther() {
    if (document.getElementById("checkbox").checked == true)
        document.getElementById("submit").disabled = false;
    else
        document.getElementById("submit").disabled = true;
}

function showSpinner() {
    document.getElementById("loading").style.display = "block"
    document.body.style = 'overflow: hidden'
}

const Add = () => {
    const [status, setStatus] = useState(false);

    const handleOpen = () => {
        setStatus(true);
        document.body.style = 'overflow: hidden'
    };

    const handleClose = () => {
        setStatus(false);
        document.body.style = 'overflow: auto'
        location.reload()
    };

    const [show, setShow] = useState(false);

    const handleOn = () => {
        setShow(true);
        document.body.style = 'overflow: hidden'
    };

    const handleOff = () => {
        setShow(false);
        document.body.style = 'overflow: auto'
    };

    const footer = <button className={modalStyles.okBtn} onClick={handleClose}>OK</button>

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'RetroGram - Year In Review Form',
        honeypot: '',
        message: '',
        replyTo: '@',
        accessKey: 'cd778ad2-bab4-46b8-968b-19e9c966846d'
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.status === 200) {
                document.getElementById("loading").style.display = "none"
                handleOpen();
                setContact(e.target.reset());
                document.getElementById("submit").disabled = true;
            }

        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occurred while submitting the form'
            });
        }
    };

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={formStyles.columnContent}>
                <h2 className={formStyles.heading}>Hi there, share with the world your 2020 Year in Review 😊</h2>
                <form
                    action='https://api.staticforms.xyz/submit'
                    method='post'
                    onSubmit={handleSubmit}
                >
                    <div className={formStyles.field}>
                        <label className={formStyles.label} >What's your name?</label>
                        <div className={formStyles.control}>
                            <input
                                className={formStyles.input}
                                type='text'
                                name='name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={formStyles.field}>
                        <label className={formStyles.label}>Enter your email address</label>
                        <div className={formStyles.control}>
                            <input
                                className={formStyles.input}
                                type='email'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={formStyles.field}>
                        <label className={formStyles.label}>Enter your twitter handle</label>
                        <div className={formStyles.control}>
                            <input
                                className={formStyles.input}
                                type='url'
                                name='twitter'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={formStyles.field}>
                        <label className={formStyles.label}>Link/URL to your story</label>
                        <div className={formStyles.control}>
                            <input
                                className={formStyles.input}
                                type='url'
                                name='story'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={formStyles.field} style={{ display: 'none' }}>
                        <label className={formStyles.label}>Title</label>
                        <div className={formStyles.control}>
                            <input
                                type='text'
                                name='honeypot'
                                style={{ display: 'none' }}
                                onChange={handleChange}
                            />
                            <input
                                type='hidden'
                                name='subject'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={`${formStyles.field} ${formStyles.isGrouped}`}>
                        <div className={formStyles.control}>
                            <p className={formStyles.check}>
                                <label className={formStyles.checkboxContainer}>
                                    <input type="checkbox" name="checkbox" id="checkbox" className={formStyles.checkbox} onClick={goFurther} />
                                    <span className={formStyles.mark}></span>
                                </label>
                                <span className={formStyles.terms}>I accept the {' '}
                                    <a onClick={handleOn} style={{ textDecoration: 'underline', cursor: 'pointer' }}> Terms and Conditions</a>
                                    {' '}for hosting my story on RetroGram.</span>
                            </p>
                            <span className="clickable" onClick={showSpinner} style={{ display: "contents" }}>
                                <button className={`${formStyles.button} ${formStyles.isPrimary}`} id="submit" type='submit' disabled>
                                    Submit
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div id="loading" className={formStyles.overlay}>
                <div className={formStyles.loading}>
                    <p className={formStyles.loadingText}>Submitting . . .</p>
                </div>
            </div>
            {status && (
                <Example closeModal={handleClose} footer={footer}>
                    <div className={modalStyles.submit}>
                        <h2 className={modalStyles.submitNote}>Thank you for your submission. You will be notified when it goes live!</h2>
                    </div>
                </Example>
            )}
            {show && (
                <Example closeModal={handleOff}>
                    <Terms />
                </Example>
            )}
        </Layout>
    );
};

export default Add;