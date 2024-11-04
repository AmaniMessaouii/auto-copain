import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import emailIcon from "../../../assets/emailIcon.svg"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useNavigate } from 'react-router-dom';
function EditProfile() {
    const [phone, setPhone] = useState('');
    const userType = localStorage.getItem('userType');
    const navigate = useNavigate();

    const previousPage = () => {
        if (userType === 'automobiliste'){
            navigate('/profil-auto');

        } else navigate('/profile-depanneur')

    };
   
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div className='padding-container'>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow"  className='cursor-pointer' onClick={previousPage} />
                    <h4 className='grey-color-900 title-nowrap'>Informations sur le compte</h4>
                </div>
                <form className='flex-Column gap-30'>
                    <div className='flex-Column'>
                        <div className='input-group w-100 flex-row align-items-center'>

                            <input
                                type="text"
                                name="nom"
                                placeholder="Nom"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.nom}
                            />
                        </div>
                    </div>
                    <div className='flex-Column'>
                        <div className='input-group w-100 flex-row align-items-center'>

                            <input
                                type="text"
                                name="prenom"
                                placeholder="Prénom"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.prenom}
                            />
                        </div>
                    </div>
                    <div className='flex-Column'>
                        <div className='input-group w-100 flex-row align-items-center'>
                            <input
                                type="text"
                                name="CIN"
                                placeholder="CIN"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.CIN}
                            />
                        </div>
                    </div>
                    <div className='flex-Column'>
                        <div className='input-group w-100 flex-row align-items-center'>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.email}
                            />
                            <div className="input-icon-right">
                                <img src={emailIcon} alt="profile" className='icon-input' />
                            </div>
                        </div>
                    </div>

                    <div className='flex-Column'>
                        <div className='input-group w-100 flex-row align-items-center'>
                            <PhoneInput
                                defaultCountry="fr"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="button-secondary button-primary w-100">
                        Changer le mot de passe </button>
                </form>
            </div>
            <div className='flex-Column'>
                <div className="horizontal-divider"></div>
                <div className='padding-bottom'>
                    <button type="submit" className="button-primary w-100  ">Enregistrer</button>
                </div>
            </div>


        </div>
    )
}

export default EditProfile