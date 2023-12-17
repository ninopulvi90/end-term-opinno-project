import { useState } from 'react';
import CloseIcon from '../components/close-btn/CloseIcon';
import NextIcon from '../components/post/NextIcon';
import '../components/close-btn/CloseIcon';
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
        <div className="relative overflow-hidden rounded-2xl">
            <img src={imageUrls[currentIndex]} className="w-full h-full rounded-2xl" />
            <div className="absolute top-3 left-0 w-full text-center p-4 text-[#FFFFFF] font-extrabold text-5xl transform -skew-y-6 drop-shadow-[0_15px_15px_rgba(0,0,0,0.75)] hover:text-6xl">
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