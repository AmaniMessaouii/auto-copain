import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import search from '../../../assets/search-grey.svg'
import { faqData } from '../../constants'
import FaqItem from '../../common/FaqItem'
import { ContactData } from '../../constants'
import { useNavigate } from 'react-router-dom'

function AssistanceCenter() {
    const [activeTab, setActiveTab] = useState('tab1')
    const [animation, setAnimation] = useState(false)
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');

    const previousPage = () => {
        if (userType === 'automobiliste'){
            navigate('/profil-auto');

        } else navigate('/profile-depanneur')

    };
    const handleTabClick = (tab) => {
        setAnimation(true);
        setTimeout(() => {
            setActiveTab(tab);
            setAnimation(false);
        }, 300);
    };
    const filterAndNavigate = (title) => {
        if (title === "Service Clientèle") {
          navigate('/service-client');
        }
      };
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center justify-content-between' style={{ marginBottom: "30px" }}>
                    <div className='flex-row align-items-center gap-16'>
                        <img src={arrow} alt="arrow" className='arrow-top cursor-pointer' style={{ margin: 0 }} onClick={previousPage}/>
                        <h4 className='grey-color-900 title-nowrap'>Centre d’assistance</h4>
                    </div> 
                </div>
                <div>
                    {/* Tab Menu */}
                    <div className="tab-menu">
                        <div
                            className={`tab ${activeTab === 'tab1' ? 'active' : ''} paraXlargeSemi`}
                            onClick={() => handleTabClick('tab1')}>
                            FAQ
                        </div>
                        <div
                            className={`tab ${activeTab === 'tab2' ? 'active' : ''} paraXlargeSemi`}
                            onClick={() => handleTabClick('tab2')}>
                            Contact us
                        </div>
                    </div>
                    {/* Tab Content */}
                    <div className={`tab-content ${animation ? 'fade-out' : 'fade-in'}`}>
                        {activeTab === 'tab1' &&
                            <div className="flex-Column align-items-center justify-content-center gap-24">
                                <div className='input-group w-100 flex-row align-items-center'>
                                    <div className="input-icon-left">
                                        <img src={search} alt="lock icon" className='icon-input' />
                                    </div>
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Search"
                                        className="input-field"
                                    // onChange={handleChange}
                                    // value={value.search}
                                    />

                                </div>
                                <div className="flex-Column gap-24">
                                    {faqData.map((faq, index) => (
                                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>}
                        {activeTab === 'tab2' && <div className="">
                            <div className='flex-Column gap-24'>
                            {ContactData.map((item, index) => (
                                <div key={index} className='faq-item flex-row align-items-center gap-16' onClick={() => filterAndNavigate(item.title)}>
                                   <img src={item.image} alt=""/>  
                                   <span className='paraXlargeB'>{item.title}</span>
                                </div>
                                    ))}
                            </div>
                        </div>}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AssistanceCenter