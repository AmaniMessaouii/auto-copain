import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
// import notFound from '../../../assets/notFound.svg'
import { depanneurData } from "../../constants"
import search from '../../../assets/searchIcon.svg'
import DemandeCard from '../../common/DemandeCard'
import MobileMenu from '../../layout/MobileMenu'
import CardUser from '../../common/CardUser'
import { useNavigate } from 'react-router-dom'
function Demandes() {
    const [activeTab, setActiveTab] = useState('tab1')
    const [animation, setAnimation] = useState(false)
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        setAnimation(true);
        setTimeout(() => {
            setActiveTab(tab);
            setAnimation(false);
        }, 300);
    };
    const previousPage = () => {
        navigate('/profile-depanneur');

    };
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center justify-content-between' style={{ marginBottom: "30px" }}>
                    <div className='flex-row align-items-center gap-16'>
                        <img src={arrow} alt="arrow" className='arrow-top cursor-pointer' style={{ margin: 0 }} onClick={previousPage}                        />
                        <h4 className='grey-color-900 title-nowrap'>Mes demandes</h4>
                    </div>
                   
                    <img src={search} alt="search" />
                </div>
                <div>
                    {/* Tab Menu */}
                    <div className="tab-menu">
                        <div
                            className={`tab ${activeTab === 'tab1' ? 'active' : ''} paraXlargeSemi`}
                            onClick={() => handleTabClick('tab1')}
                        >
                            Actif
                        </div>
                        <div
                            className={`tab ${activeTab === 'tab2' ? 'active' : ''} paraXlargeSemi`}
                            onClick={() => handleTabClick('tab2')}
                        >
                            Complété
                        </div>
                        <div
                            className={`tab ${activeTab === 'tab3' ? 'active' : ''} paraXlargeSemi`}
                            onClick={() => handleTabClick('tab3')}
                        >
                            Annulé
                        </div>
                    </div>
                    {/* Tab Content */}
                    <div className={`tab-content ${animation ? 'fade-out' : 'fade-in'}`}>
                        {activeTab === 'tab1' &&
                            <div className="flex-Column gap-24">
                                {depanneurData.map((item, index) => (
                                    <CardUser
                                        item={item}
                                        key={index}
                                        buttonValid={true}
                                        buttonText1='Noter'
                                        buttonText2='Valider'
                                    />
                                ))}
                                {/* <div className="flex-Column align-items-center justify-content-center">
                                    <img src={notFound} alt='' className='notFound-img' />
                                    <div className='flex-Column align-items-center gap-12'>
                                        <h4 className='grey-color-900 title-nowrap'>Vous n'avez aucun signalement </h4>
                                        <span className='paraXlargeR grey-color-900'>Vous n'avez aucun signalement pour le moment.</span>
                                    </div>
                                </div> */}
                            </div>}
                        {activeTab === 'tab2' && <div className="">
                            {depanneurData.map((item, index) => (
                                <DemandeCard item={item} key={index} Valid={true} />
                            ))}
                        </div>}
                        {activeTab === 'tab3' && <div className="">
                            {depanneurData.map((item, index) => (
                                <DemandeCard item={item} key={index} Valid={false} />
                            ))}
                        </div>}
                    </div>

                </div>
            </div>
            <MobileMenu />
        </div>
    )
}

export default Demandes