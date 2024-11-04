import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import avatar from "../../../assets/avatar.png"
import time from "../../../assets/timeB-ICON.svg"
import stars from '../../../assets/stars.svg'
import phone from '../../../assets/appel-button.svg'
import BottomNotePopup from '../../common/BottomNotePopup'
import { useNavigate } from 'react-router-dom'

function DetailDepanneur() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');

    const previousPage = () => {
        if (userType === 'automobiliste') {
            navigate('/profil-auto');

        } else navigate('/profile-depanneur')
    };

    const openPopup = () => {
        setIsOpen(true);
    };
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div className='padding-container'>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}
                    />
                    <h4 className='grey-color-900 title-nowrap'>Détail</h4>
                </div>
                <div className='flex-Column gap-20'>
                    <div className='flex-Column align-items-center gap-12'>
                        <img src={avatar} alt='' />
                        <h4 className='primary-dark-color'>Marwen</h4>
                        <span className='paraMediumR grey-color-900'>+33 06 00 55 00 88</span>
                    </div>
                    <div className="horizontal-divider"></div>

                    <div className='flex-row align-items-center justify-content-center gap-40 card-depanneur'>
                        <div className='flex-Column align-items-center gap-12'>
                            <div className='img-detail-bg' onClick={openPopup}>
                                <img src={stars} alt="arrow" />
                            </div>
                            <div className='flex-Column align-items-center gap-4'>
                                <span className='paraXlargeB primary-dark-color'>4.8</span>
                                <span className='paraSmallR grey-color-600 '>Avis</span>
                            </div>
                        </div>
                        <div className='flex-Column align-items-center gap-12'>
                            <div className='img-detail-bg'>
                                <img src={time} alt="arrow" />
                            </div>
                            <div className='flex-Column align-items-center gap-4'>
                                <span className='paraXlargeB primary-dark-color'>2</span>
                                <span className='paraSmallR grey-color-600 '>Ans</span>
                            </div>
                        </div>
                    </div>
                    <div className='card-depanneur flex-Column gap-24'>
                        <div className='flex-row align-items-center justify-content-between '>
                            <span className='paraLargeM dark-color-400'>Membre Depuis</span>
                            <span className='paraXlargeSemi primary-dark-color'>Juin 2024</span>
                        </div>
                        <div className='flex-row align-items-center justify-content-between '>
                            <span className='paraLargeM dark-color-400'>Modèle de Voiture</span>
                            <span className='paraXlargeSemi primary-dark-color'>Peugeot</span>
                        </div>
                        <div className='flex-row align-items-center justify-content-between '>
                            <span className='paraLargeM dark-color-400'>No Immatriculation</span>
                            <span className='paraXlargeSemi primary-dark-color'>AAA-OOO-KK</span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNotePopup isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className='flex-Column align-items-center justify-content-center horizontal-divider-rounder padding-bottom'>
                <img src={phone} alt='' />
            </div>

        </div>
    )
}

export default DetailDepanneur