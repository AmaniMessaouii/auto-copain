import React, { useEffect, useState } from 'react'
import warring from '../../../assets/warring.svg'
import arrow from "../../../assets/Arrow - Left.svg"
import VerificationPopup from '../../common/VerificationPopup';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../constants';

function Confirmation() {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredServices, setFilteredServices] = useState([]);
    const navigate = useNavigate();
    const previousPage = () => {
        navigate('/declarer');
    };

    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];
        const matchedServices = servicesData.filter(service => 
          storedServices.includes(service.title)
        );
        setFilteredServices(matchedServices);
      }, []);
    const openPopup = () => {
        setIsOpen(true);
    };
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}/>
                    <h4 className='grey-color-900 title-nowrap'>Confirmation</h4>
                </div>

                <div className='flex-Column gap-24'>
                <div className='flex-Column gap-12 align-items-center justify-content-center'>
                    <img src={filteredServices[0]?.image} alt="" />
                    <span className='paraLargeB primary-dark-color'>{filteredServices[0]?.title}</span>
                    </div>
                    <div className='flex-Column gap-24'>
                        <div className='card-panne flex-Column align-items-center gap-24'>
                            <img src={warring} alt="" />
                            <span className='paraLargeM grey-color-900'>
                                Veuillez vous assurer que vous disposez de
                                tous les matériels nécessaires, y compris la roue de secours,
                                le cric et la clé démonte-roue.</span>
                        </div>
                        <div className='card-panne flex-Column gap-24'>
                            <div className='flex-row align-items-center justify-content-between '>
                                <span className='paraLargeM grey-color-700'>Prix de dépannage</span>
                                <span className='paraXlargeB grey-color-900'>30€</span>
                            </div>
                            <div className='flex-row align-items-center justify-content-between'>
                                <span className='paraLargeM grey-color-700'>Paiement</span>
                                <span className='paraXlargeB grey-color-900'>Carte bancaire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <VerificationPopup
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Panne Signalée avec Succès !'
                description="Nous informons immédiatement les dépanneurs AutoCopain les plus proches de vous."
                valid='OK'
                bottomType='button'
                buttonContent='Retour à l’accueil'
            />
            <button type="submit" className="button-primary w-100" onClick={openPopup}>
                Confirmer
            </button>
        </div>
    )
}

export default Confirmation