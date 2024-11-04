import React from 'react';
import arrow from "../../../assets/Arrow - Left.svg";
import { useNavigate } from 'react-router-dom';
import ServicesList from '../../common/ServicesList';

function Services() {
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');

    const previousPage = () => {
        if (userType === 'automobiliste'){
            navigate('/inscrit-particulier');

        } else navigate('/info-supplementaires')
    };

    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage} />
                    <h4 className='grey-color-900 title-nowrap'>Services proposées</h4>
                </div>
                <div className='flex-Column gap-24'>
                    <span className='primary-dark-color text-center paraXlargeR'>Veuillez sélectionner vos services</span>
                    <ServicesList />
                </div>
            </div>
            <button type="submit" className="button-primary w-100" onClick={previousPage}>
                Valider
            </button>
        </div>
    );
}

export default Services;