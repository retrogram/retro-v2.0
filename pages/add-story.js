import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Example from '../components/modal';
import Layout, { siteTitle } from '../components/layout'
import Terms from './terms'
import Styles from './add-story.module.css'

function goFurther() {
    if (document.getElementById("checkbox").checked == true)
        document.getElementById("submit").disabled = false;
    else
        document.getElementById("submit").disabled = true;
}

const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const [mode, setMode] = useState('')

    const footerButton = <button onClick={handleClose}>OK</button>

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
                setMode('pop-up');
                setShow(true);
                setContact(e.target.reset())
            }

        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form'
            });
        }
    };

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={Styles.columnContent}>
                <h2 className={Styles.heading}>Hi there, share with the world your 2020 Year in Review 😊</h2>
                <form
                    action='https://api.staticforms.xyz/submit'
                    method='post'
                    onSubmit={handleSubmit}
                >
                    <div className={Styles.field}>
                        <label className={Styles.label} >What's your name?</label>
                        <div className={Styles.control}>
                            <input
                                className={Styles.input}
                                type='text'
                                placeholder='Name'
                                name='name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label}>Enter your email address</label>
                        <div className={Styles.control}>
                            <input
                                className={Styles.input}
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={Styles.field}>
                        <label className={Styles.label}>Enter your twitter handle</label>
                        <div className={Styles.control}>
                            <input
                                className={Styles.input}
                                type='url'
                                placeholder='Twitter URL'
                                name='twitter'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={Styles.field}>
                        <label className={Styles.label}>Link/URL to your story</label>
                        <div className={Styles.control}>
                            <input
                                className={Styles.input}
                                type='url'
                                placeholder='Story URL'
                                name='story'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={Styles.field} style={{ display: 'none' }}>
                        <label className={Styles.label}>Title</label>
                        <div className={Styles.control}>
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
                    <div className={`${Styles.field} ${Styles.isGrouped}`}>
                        <div className={Styles.control}>
                            <p className={Styles.check}>
                                <label className={Styles.checkContainer}>
                                <input type="checkbox" name="checkbox" id="checkbox" className={Styles.checkbox} onClick={goFurther} /> 
                                <span class={Styles.mark}></span>
                                </label>I accept the {' '}
                                <Link href='/terms'>
                                    <a style={{ textDecoration: 'underline' }}> Terms and Conditions</a>
                                </Link><br></br> &ensp;for hosting my story on RetroGram.
                            </p>
                            <button className={`${Styles.button} ${Styles.isPrimary}`} id="submit" type='submit' disabled>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {mode && mode === 'pop-up'}
            <Example show={show} handleClose={handleClose} footerButton={footerButton}>
                <h1>Thanks for Submitting</h1>
            </Example>
        </Layout>
    );
};

export default Add;