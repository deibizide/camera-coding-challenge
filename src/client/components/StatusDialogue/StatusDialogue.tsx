import React, { useState } from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';

interface Props {
    isSuccess: boolean;
    reset: () => void;
}

const StatusDialogue: React.FC<Props> = ({ isSuccess, reset }) => {
    const SUCCESS = 'Yay! Image was successfully sent.';
    const ERROR = 'The file is too big!';

    return (
        <div className="main d-flex justify-content-center align-items-center flex-column">
            <h4 className="mb-4">{isSuccess ? SUCCESS : ERROR}</h4>
            <Button
                variant="info"
                className="btn btn-sm d-flex align-items-center mr-4"
                onClick={reset}
            >
                <p className="m-0">{isSuccess ? 'Upload more' : 'Try again'}</p>
            </Button>
        </div>
    );
};

export default StatusDialogue;
