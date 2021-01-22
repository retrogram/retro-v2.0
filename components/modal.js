import { Modal } from 'react-bootstrap';

export default function Example(props) {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    {props.footerButton}
                </Modal.Footer>
            </Modal>
        </>
    );
}
