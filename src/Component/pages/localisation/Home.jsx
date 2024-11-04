import React, { useState } from 'react'
import localisation from '../../../assets/localisation.svg'
import { localisationData } from '../../constants'
import localbtn from '../../../assets/Button.svg'
import stations from '../../../assets/stations.svg'
import garages from '../../../assets/garages.svg'
import map from '../../../assets/Maps-Component.svg'
import garagePosition from '../../../assets/garage-position.svg'
import stationPosition from '../../../assets/station-position.svg'
import avatarPosition from '../../../assets/avatar.png'
import MobileMenu from '../../layout/MobileMenu'
import VerificationPopup from '../../common/VerificationPopup'
import garageActive from '../../../assets/garagesactive.svg'
import stationActive from '../../../assets/stationsactive.svg'

function Home() {
    const [isOpen, setIsOpen] = useState(true);
    const [active, setActive] = useState("tous");

    return (
        <div>
            <div className='position-relative'>
                <img src={localisation} alt='' className='localisation-img' />
                <div className='flex-Column gap-8 groupe-btn-local position-absolute'>
                    <button className={`btn-map-groupe paraMediumR w-100 flex-row justify-content-center align-items-center gap-16 
                     ${active === "tous" ? "bg-blue white-color" : "bg-white-color primary-dark-color"}`}
                      onClick={() => setActive("tous")} >
                        Tous</button>
                    <div className='flex-row gap-8'>
                        <button className={`btn-map-groupe paraMediumR w-100 flex-row justify-content-center align-items-center gap-12 
                        ${active === "stations" ? "bg-blue white-color" : "bg-white-color primary-dark-color"}`}
                         onClick={() => setActive("stations")} >
                            <img src={active === "stations" ? stationActive : stations} alt='' /> Stations </button>
                        <button className={`btn-map-groupe paraMediumR w-100 flex-row justify-content-center align-items-center gap-12 
                        ${active === "garages" ? "bg-blue white-color" : "bg-white-color primary-dark-color"}`}
                         onClick={() => setActive("garages")}>
                            <img src={active === "garages" ? garageActive : garages } alt='' /> Garages </button>
                    </div>
                </div>
                <img src={garagePosition} alt='' className='position-absolute garage-position' />
                <img src={garagePosition} alt='' className='position-absolute garage-position0' />
                <img src={stationPosition} alt='' className='position-absolute station-position' />
                <div className='position-absolute avatar-map'>
                    <div className='avatar-map-2'>
                        <img src={avatarPosition} alt='' className='avatar-position' />
                    </div>
                </div>
            </div>
            <div className="popup-overlay-bottom-local position-relative">
                <img src={map} alt='' className='map-local-img position-absolute' />

                <div className="popup-bottom-local flex-Column gap-24 align-items-center">
                    <div className='devider-image' style={{ marginBottom: '24px' }}></div>
                    <div className='flex-Column w-100 gap-24'>
                        {localisationData.map((item, index) => (
                            <div key={index} className='flex-Column gap-24'>
                                <div key={index} className='flex-row align-items-center justify-content-between gap-12'>
                                    <div className='flex-row align-items-center gap-20'>
                                        <img src={item.image} alt='' />
                                        <div className='flex-Column '>
                                            <span className='paraSmallB primary-dark-color'>{item.title}</span>
                                            <span className='paraSmallR primary-dark-color'>{item.local}</span>
                                        </div>
                                    </div>
                                    <img src={localbtn} alt='' />

                                </div>
                                <div className="horizontal-divider"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <MobileMenu />
            <VerificationPopup
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Activer la Localisation'
                description="Nous avons besoin d'accéder à votre localisation pour pouvoir utiliser ce service."
                valid='local'
                bottomType='vide'
            />
        </div>
    )
}

export default Home