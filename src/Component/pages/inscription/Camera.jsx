import React, { useState } from 'react'
import CloseIcon from '../../../assets/Close-Square.svg'
import cameraVisage from '../../../assets/VisageCamera.svg'
import selfieVisage from '../../../assets/selfie-visage.png'
import { useNavigate } from 'react-router-dom';
function Camera() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const toggleImage = () => {
        setIsVisible(!isVisible);
    };
    const handleClick = () => {
        setIsVisible(!isVisible);
        navigate('/patienter');

    };
    const previousPage= () => {
        navigate('/verif-identite');
    }
    return (
        <div className="Container bg-blue-gradient">
            <div>
                <img src={CloseIcon} alt="profile" className='arrow-top' onClick={previousPage} />
                {!isVisible ?
                    <div className="flex-Column gap-80">
                        <h4 className='text-center white-color'>Centrez votre visage dans le cercle</h4>
                        <div className='text-center'>
                            <img src={cameraVisage} alt='camera visage' className='camera-visage' onClick={toggleImage} />
                        </div>
                    </div>
                    :
                    <div className="flex-Column gap-80">
                        <h4 className='text-center white-color'>Restez immobile pendant que nous prenons une photo !</h4>
                        <div className='text-center slide-down'>
                            <img src={selfieVisage} alt='camera visage' className='camera-visage' onClick={handleClick} />
                        </div>
                        <span className='white-color paraXlargeR text-center'>Nous prenons votre selfie maintenant</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Camera