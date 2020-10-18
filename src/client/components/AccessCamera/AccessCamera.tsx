import React, { useState } from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';
// style
import './style.less';
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Props {
    isUserReady: boolean;
    setIsUserReady: (isUserReady: boolean) => void;
}

const AccessCamera: React.FC<Props> = () => {
    const [file, setFile] = useState('');
    const [hasPreview, setHasPreview] = useState(false);

    const getImagePreview = (e: any): void => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function (): void {
            const base64data = reader.result;
            if (typeof base64data === 'string') {
                setFile(base64data);
            }
        }
        setHasPreview(true);
    };

    const reTakePhoto = (): void => {
        setFile('');
        setHasPreview(false);
    };

    const sendFile = (data: any): void => {

        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ file })
        })
    };

    return (
        <div className="home d-flex justify-content-center align-items-center flex-column">
            {!hasPreview && (
                <>
                    <h5 className="text-center pb-5">Do you want to send an image to your landlord?</h5>
                    <Button variant="outline-light" className="btn btn-outline-secondary d-flex p-0">
                        <input type="file" accept="image/*" id="file" onChange={(e): void => getImagePreview(e)} />
                    </Button>
                </>
            )}
            {hasPreview && (
                <>
                    <img src={file} width="250" height="250" alt="Preview of the upload" />

                    <div className="text-center d-flex ">
                        <Button variant="warning" className="btn d-flex align-items-center mx-3" onClick={reTakePhoto}>
                            <p className="m-0 px-3">Delete</p>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                        <Button variant="info" className="btn d-flex align-items-center mx-3" onClick={sendFile}>
                            <p className="m-0 px-3">Send</p>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AccessCamera;

    // <img src="data:image/jpg;base64,{${imageSrc}}" width="250" height="250" alt="Image sent by the user" />

    // <img src=${imageSrc} width="250" height="250" alt="Image sent by the user" />
