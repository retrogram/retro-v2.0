import React from 'react';
import modalStyles from './modal.module.css'
import { Close } from '@styled-icons/remix-fill/Close'

export default function Example(props) {
    const { closeModal } = props;
    const closeicon = () => (
        <Close
            className={modalStyles.closeIcon}
            onClick={closeModal}
            style={{
                color: '#ffffff',
                cursor: 'pointer',
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
            }}
        />
    );

    return (
        <>
            <div className={modalStyles.overlay}>
                <div className={modalStyles.content}>
                    {closeicon()}
                    {props.children}
                    <div>
                        {props.footer}
                    </div>
                </div>
            </div>
        </>
    );
}