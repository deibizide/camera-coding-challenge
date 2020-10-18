import React from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Props {
    send: () => void;
    reset: () => void;
}

const Menu: React.FC<Props> = ({ send, reset }) => (
    <div className="text-center d-flex justify-content-around">
        <Button variant="danger" className="btn d-flex align-items-center mr-4" onClick={reset}>
            <p className="m-0 mr-3">Delete</p>
            <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button variant="success" className="btn d-flex align-items-center" onClick={send}>
            <p className="m-0 mr-3">Send</p>
            <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
    </div>
);

export default Menu;
