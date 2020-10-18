import { useState } from 'react';

const REQUEST_URL = '/api/send';
const REQUEST_METHOD = 'POST';
const REQUEST_HEADERS = {
    'Content-Type': 'application/json',
};

const useUploadImg = () => {
    const [imgFile, setImgFile] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1); // 1 - default, 2 - preview, 3 - success, 4 - fail

    const previewImage = (src: any): void => {
        if (typeof src === 'string') {
            setImgFile(src);
            setStep(2);
        }
    };

    const createImageSrc = (e: any): void => {
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = (): void => previewImage(reader.result);
    };

    const reset = (): void => {
        setImgFile('');
        setStep(1);
    };

    const sendFile = (): void => {
        setIsLoading(true);

        fetch(REQUEST_URL, {
            method: REQUEST_METHOD,
            headers: REQUEST_HEADERS,
            body: JSON.stringify({ file: imgFile }),
        }).then(response => {
            updateUi(response.status);
        });
    };

    const updateUi = (status: number) => {
        setIsLoading(false);
        if (status !== 200) return setStep(4);
        setStep(3);
    };

    return {
        imgFile,
        step,
        isLoading,
        createImageSrc,
        reset,
        sendFile,
    };
};

export default useUploadImg;
