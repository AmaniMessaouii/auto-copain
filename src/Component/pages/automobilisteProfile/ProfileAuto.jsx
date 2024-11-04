import React, { useState } from 'react'
import logo from "../../../assets/Logo.svg"
import avatar from "../../../assets/avatar.png"
import edit from "../../../assets/editIcon.svg"
import profilelogo from '../../../assets/profilelogo.svg'
import DeconnectPopup from '../../common/DeconnectPopup'
import VerificationPopup from '../../common/VerificationPopup'
import Menu from '../../common/Menu'
import MobileMenu from '../../layout/MobileMenu'

function ProfileAuto() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen0, setIsOpen0] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setUploadedImage(imageURL);
        }
    };

    const openModal = () => {
        setIsOpen0(true);
    };
    return (
        <div className='Container'>
            <div className=''>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={logo} alt="arrow"  className='cursor-pointer' />
                    <h4 className='grey-color-900 title-nowrap'>Profil</h4>
                </div>
                <div className='flex-Column gap-20'>
                    <div className='flex-Column align-items-center gap-12 '>
                    <div className='position-relative'>
                            <img src={uploadedImage || avatar} alt="avatar" className='avatar-img' />
                            <label>
                                <img src={edit} alt='' className='position-absolute edit-position cursor-pointer' />
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        </div>
                
                        <h4 className='primary-dark-color'>Wajdi Madani</h4>
                        <span className='paraMediumR grey-color-900'>+33 06 00 55 00 88</span>
                    </div>
                    <div className="horizontal-divider"></div>
                    <div className='card-depanneur bg-blue flex-row align-items-center justify-content-between gap-20 cursor-pointer' onClick={openModal}>
                        <span className='white-color paraLargeB title-max-w'>Rejoignez notre réseau de dépanneurs AutoCopain</span>
                        <img src={profilelogo} alt='' />
                    </div>
                    <Menu setIsOpen={setIsOpen} />
                </div>
            </div>
            <MobileMenu />
            <VerificationPopup
                isOpen={isOpen0}
                setIsOpen={setIsOpen0}
                title='Complétez Votre Profil Dépanneur'
                description="Pour commencer à recevoir des demandes d'assistance, veuillez compléter votre profil en fournissant les informations nécessaires."
                valid='profile'
                bottomType='button'
                buttonContent='Compléter'
            />
            <DeconnectPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default ProfileAuto