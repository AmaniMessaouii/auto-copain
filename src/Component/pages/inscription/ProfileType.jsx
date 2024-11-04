import React, {useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import autoProfile from "../../../assets/auto-profile.svg"
import dapanneurProfile from "../../../assets/dapanneur-profile.svg"
import { useNavigate } from 'react-router-dom';

function ProfileType() {
    const [selectedProfile, setSelectedProfile] = useState('automobiliste');
    const navigate = useNavigate();

    const handleProfileSelect = (profile) => {
        setSelectedProfile(profile);
    };
const handleClick= () => {
        navigate('/info-compte');
        localStorage.setItem('userType', selectedProfile);
};

const previousPage = () => {
    navigate('/login');

};
    return (
        <div className='Container'>
            <div>
                <img src={arrow} alt="arrow"  className='arrow-top cursor-pointer' onClick={previousPage} />
                    <div className='flex-Column gap-24'>
                        <div className='flex-Column align-items-center gap-16'>
                            <h3 className='text-center primary-dark-color'>Sélection du Type de Profil</h3>
                            <span className='paraXlargeR primary-dark-color text-center'>Sélectionnez votre type de profil pour commencer.</span>
                        </div>
                        <div className='flex-Column gap-20'>
                            <div className={`flex-row align-items-center select-profile-layout gap-20 ${selectedProfile === 'automobiliste' ? 'selected-profile' : ''}`}
                                onClick={() => handleProfileSelect('automobiliste')}>
                                <img src={autoProfile} alt="auto profile" />
                                <div className='flex-Column gap-12'>
                                    <span className='paraMediumM grey-color-600'>Je suis :</span>
                                    <span className='paraXlargeSemi primary-dark-color'>Automobiliste / dépanneur</span>
                                </div>
                            </div>
                            <div className={`flex-row align-items-center select-profile-layout gap-20 ${selectedProfile === 'dapanneur' ? 'selected-profile' : ''}`}
                                onClick={() => handleProfileSelect('dapanneur')}>
                                <img src={dapanneurProfile} alt="auto profile" />
                                <div className='flex-Column gap-12'>
                                    <span className='paraMediumM grey-color-600'>Je suis :</span>
                                    <span className='paraXlargeSemi primary-dark-color'>Dépanneur Professionnel</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <button className="button-primary w-100" onClick={handleClick}>Continuer</button>

        </div>
    )
}

export default ProfileType