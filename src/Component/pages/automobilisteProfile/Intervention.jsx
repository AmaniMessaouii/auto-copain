import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import camera from '../../../assets/Camerawhite.svg'
import VerificationPopup from '../../common/VerificationPopup'
import { useNavigate } from 'react-router-dom';
function Intervention() {
    const userType = localStorage.getItem('userType');
    const [isOpen, setIsOpen] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const navigate = useNavigate();
    const previousPage = () => {
        if (userType === 'automobiliste'){
            navigate('/panne');

        } else navigate('/demandes')
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setUploadedImage(imageURL);
        }
    };
    const openPopup = () => {
        setIsOpen(true);
    };
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div className='padding-container'>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow"  className='cursor-pointer' onClick={previousPage}
                    />
                    <h4 className='grey-color-900 title-nowrap'>Roue crevée</h4>
                </div>
                <div className='flex-Column gap-30'>
                    {uploadedImage == null ?
                        <div className='flex-Column align-items-center justify-content-center camera-upload gap-16'>
                            <div className='frame-bg-camera flex-Column align-items-center justify-content-center'>
                                {/* <img src={uploadedImage || extraitImage} alt="Extrait KBIS" className="kbis-image text-center" /> */}

                                <label>
                                    <img src={camera} alt="" />
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                    />
                                </label>
                            </div>
                            <h6 className='primary-blue-color text-max-w'>Ajouter une photo de l’intervention</h6>
                        </div>
                        :
                        <img src={uploadedImage} alt="" className='uploaded-image'/>
                    }

                    <div className='flex-Column gap-12'>
                        <h6 className='primary-dark-color'>Commentaire</h6>
                        <textarea placeholder='Ajouter un commentaire' className="comment-box paraMediumR" />
                    </div>
                </div>
            </div>
            <VerificationPopup
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Intervention terminée !'
                description="Votre intervention est maintenant terminée. Nous espérons que vous êtes satisfait du service reçu."
                valid='OK'
                bottomType='vide'
            />
            <div className='flex-Column'>
                <div className="horizontal-divider"></div>
                <div className='padding-bottom'>
                    <button type="submit" className="button-primary w-100" onClick={openPopup}>Envoyer</button>
                </div>
            </div>


        </div>
    )
}

export default Intervention