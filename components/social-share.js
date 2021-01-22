import React from 'react';
import {
    WhatsappShareButton,
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
    LinkedinShareButton
} from "react-share";

import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'
import { FacebookBox } from '@styled-icons/remix-fill/FacebookBox'
import { Twitter } from '@styled-icons/remix-fill/Twitter'
import { Mail } from '@styled-icons/material-twotone/Mail'
import { LinkedinBox } from '@styled-icons/remix-fill/LinkedinBox'

export default function Social(props) {
    return (
        <div>
            <WhatsappShareButton
                url={props.url}
                title={'Read the best collection of people’s 2020 Year in Review stories.'}
                seperator={''}
            >
                <Whatsapp size={64} style={{ color: '#25D366' }} />
            </WhatsappShareButton>
            <FacebookShareButton
                url={props.url}
                quote={'Read the best collection of people’s 2020 Year in Review stories.'}
                hashtag={'#retrogram'}
            >
                <FacebookBox size={64} style={{ color: '#3b5998' }} />
            </FacebookShareButton>
            <TwitterShareButton
                url={props.url}
                title={'Read the best collection of people’s 2020 Year in Review stories.'}
                hashtag={'#retrogram'}
                via={'Peace'}
            >
                <Twitter size={64} style={{ color: '#00acee' }} />
            </TwitterShareButton>
            <EmailShareButton
                url={props.url}
                subject={'My Year in Review'}
                body={'Read the best collection of people’s 2020 Year in Review stories.'}
                seperator={''}
            >
                <Mail size={64} style={{ color: '#BB001B' }} />
            </EmailShareButton>
            <LinkedinShareButton
                url={props.url}
                title={'My Year in Review'}
                summary={'Read the best collection of people’s 2020 Year in Review stories.'}
                source={'https://retrogram.co'}
            >
                <LinkedinBox size={64} style={{ color: '#0e76a8' }} />
            </LinkedinShareButton>
        </div>
    )
}
