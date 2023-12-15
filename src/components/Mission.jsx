import { useState } from 'react';
import CloseIcon from '../components/post/CloseIcon';
import NextIcon from '../components/post/NextIcon';
import '../components/post/close-icon.css';
import '../components/post/next-icon.css';

const imageUrls = [
    'https://picsum.photos/id/16/1370/350',
    'https://picsum.photos/id/29/1370/350',
    'https://picsum.photos/id/28/1370/350',
    'https://picsum.photos/id/46/1370/350',
];

export default function Mission() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hidden, setHidden] = useState(false);

    const handleNextClick = () => {
        const newIndex = (currentIndex + 1) % imageUrls.length;
        setCurrentIndex(newIndex);
    };

    const handleCloseClick = () => {
        setHidden(true);
    };

    if (hidden) {
        return null;
    }

    return (
        <div className="relative rounded overflow-hidden  ">
            <img src={imageUrls[currentIndex]} className="w-full h-full rounded-lg" />
            <div className="absolute top-0 left-0 w-full text-center p-4 text-[#FFFFFF] font-extrabold text-4xl transform -skew-y-6">
                Missione in partenza!
            </div>
            <button
                onClick={handleNextClick}
                className="absolute top-0 right-8 p-4">
                <NextIcon />
            </button>
            <button
                onClick={handleCloseClick}
                className="absolute top-0 right-0 p-4">
                <CloseIcon />
            </button>
            <div className="absolute bottom-0 right-0 p-4">
                <button className="bg-[#006793] dark:bg-[#008ECB] rounded-md text-[#FFFFFF] px-4 py-2">Scopri di più</button>
            </div>
        </div>
    )
}