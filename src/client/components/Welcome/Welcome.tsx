import React from 'react';
// bootstrap
import Button from 'react-bootstrap/Button';
// style
import './style.less';

interface Props {
    createImageSrc: (e: object) => void;
}

const Welcome: React.FC<Props> = ({ createImageSrc }) => (
    <>
        <h4 className="text-center pb-5">Do you want to send an image to your landlord?</h4>
        <Button variant="outline-light" className="btn btn-outline-secondary d-flex p-0">
            <input
                className="upload__input"
                type="file"
                accept="image/*"
                id="file"
                onChange={(e): void => createImageSrc(e)}
            />
        </Button>
    </>
);

export default Welcome;
