import React, { useState } from 'react';
// components
import Welcome from './../Welcome/Welcome';
import Preview from './../Preview/Preview';
import Loader from './../Loader/Loader';
import StatusDialogue from './../StatusDialogue/StatusDialogue';
// hooks
import useUploadImg from './../../hooks/useUploadImg';
// style
import './style.less';

const Main: React.FC = () => {
    const { imgFile, step, isLoading, createImageSrc, reset, sendFile } = useUploadImg();

    return (
        <div className="main d-flex justify-content-center align-items-center flex-column">
            {step === 1 && <Welcome createImageSrc={createImageSrc} />}

            {step === 2 && isLoading && <Loader />}
            {step === 2 && !isLoading && <Preview reset={reset} send={sendFile} imgUrl={imgFile} />}

            {(step === 3 || step === 4) && (
                <StatusDialogue isSuccess={step === 3 ? true : false} reset={reset} />
            )}
        </div>
    );
};

export default Main;
