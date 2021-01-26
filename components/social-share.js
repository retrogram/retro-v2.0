import React from 'react';
import {
    WhatsappShareButton,
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
    LinkedinShareButton
} from "react-share";

import modalStyles from './modal.module.css'

export default function Social(props) {
    return (
        <div className={modalStyles.container}>
            <WhatsappShareButton
                url={props.url}
                title={'Read the best collection of people’s 2020 Year in Review stories.'}
                seperator={''}
            >
                <img src="/images/whatsapp.png" alt="whatsapp logo" className={modalStyles.icon} />
            </WhatsappShareButton>
            <FacebookShareButton
                url={props.url}
                quote={'Read the best collection of people’s 2020 Year in Review stories.'}
                hashtag={'#retrogram'}
            >
                <img src="/images/facebook.png" alt="facebook logo" className={modalStyles.icon} />
            </FacebookShareButton>
            <TwitterShareButton
                url={props.url}
                title={'Read the best collection of people’s 2020 Year in Review stories.'}
                hashtag={'#retrogram'}
                via={'RetrogramHQ'}
            >
                <img src="/images/twitter.png" alt="twitter logo" className={modalStyles.icon} />
            </TwitterShareButton>
            <EmailShareButton
                url={props.url}
                subject={'My Year in Review'}
                body={'Read the best collection of people’s 2020 Year in Review stories. Click the link below to read my story'}
                seperator={''}
            >
                <img src="/images/gmail.png" alt="gmail logo" className={modalStyles.icon} />
            </EmailShareButton>
            <LinkedinShareButton
                url={'https://retrogram.co'}
                title={'My Year in Review'}
                summary={'Read the best collection of people’s 2020 Year in Review stories.'}
                source={'https://retrogram.co'}
            >
                <img src="/images/linkedin.png" alt="linkedin logo" className={modalStyles.icon} />
            </LinkedinShareButton>
        </div>
    )
}
