import React from 'react';
// components
import Menu from './../Menu/Menu';
// styles
import './style.less';

interface Props {
    imgUrl: string;
    send: () => void;
    reset: () => void;
}

const Preview: React.FC<Props> = ({ imgUrl, reset, send }) => (
    <div>
        <h4 className="mb-4 text-center">Looks good?</h4>
        <img src={imgUrl} className="preview mb-4" alt="Preview of the upload" />
        <Menu reset={reset} send={send} />
    </div>
);

export default Preview;
