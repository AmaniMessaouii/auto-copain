import React, { useState } from 'react'
import logo from "../../../assets/Logo.svg"
import avatar from "../../../assets/avatar.png"
import profilelogo from '../../../assets/depanprofile.svg'
import DeconnectPopup from '../../common/DeconnectPopup'
import edit from '../../../assets/EditSquare.svg'
import stars from '../../../assets/stars.svg'
import Menu from '../../common/Menu'
import MobileMenu from '../../layout/MobileMenu'
import { useNavigate } from 'react-router-dom'
function ProfileDepanneur() {
    const [isOpen, setIsOpen] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setUploadedImage(imageURL);
        }
    };

    const openProfile = () => {
        navigate('/profil-auto');
        localStorage.setItem('userType', 'automobiliste');

    };
   
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div>
                <div className='bg-blue padding-container' style={{ paddingBottom: '24px' }}>
                    <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                        <img src={logo} alt="arrow" className='cursor-pointer' />
                        <h4 className='white-color title-nowrap'>Profil</h4>
                    </div>
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
                        <div className='flex-row align-items-center gap-8'>
                            <img src={stars} alt="stars" />
                            <span className='paraMediumM white-color'>4.8</span>
                        </div>
                        <h4 className='white-color'>Wajdi Madani</h4>
                        <span className='paraMediumR white-color'>+33 06 00 55 00 88</span>
                    </div>
                </div>
                <div className='flex-Column gap-20 padding-bottom'>
                    <div className='card-depanneur bg-blue flex-row align-items-center justify-content-between gap-20 cursor-pointer' onClick={openProfile}>
                        <span className='white-color paraLargeB title-max-w'>Basculez en profil automobiliste</span>
                        <img src={profilelogo} alt='' />
                    </div>
                    <Menu setIsOpen={setIsOpen} />
                </div>
            </div>
            <MobileMenu />
            <DeconnectPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default ProfileDepanneur