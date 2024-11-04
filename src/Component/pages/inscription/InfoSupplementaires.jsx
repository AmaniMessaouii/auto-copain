import React, { useEffect, useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import workIcon from "../../../assets/Work.svg"
import arrowIcon from "../../../assets/ArrowRight.svg"
import cameraIcon from "../../../assets/Camera.svg"
import { toast } from 'react-toastify';
import BottomPopup from '../../common/BottomPopup'
import { useNavigate } from 'react-router-dom'
function InfoSupplementaires() {
    // const [loader, setLoader] = useState(false);
    const [value, setValue] = useState({
        nomEntreprise: "",
        numSiret: "",
        service: "",
        NIV: "",
        assurance: "",
        kpis: "",

    });
    // const [errors, setErrors] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const openPopup = () => {
        setIsOpen(true);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));


    };

    // const validate = () => {
    //     const newErrors = {};

    //     if (!value.nomEntreprise) {
    //         newErrors.nomEntreprise = "Le nom d'entreprise est requis";
    //     }

    //     if (!value.numSiret) {
    //         newErrors.numSiret = "Le Numéro Siret est requis";
    //     }

    //     if (!value.service) {
    //         newErrors.service = "Le Type de service(s) offert(s) est requis";
    //     }
    //     if (!value.NIV) {
    //         newErrors.NIV = "Le Numéro d’immatriculation du véhicule est requis";
    //     }
    //     if (!value.assurance) {
    //         newErrors.assurance = "L'assurance est requis";
    //     }
    //     if (!value.kpis) {
    //         newErrors.kpis = "kpisest requis";
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    const previousPage = () => {
        navigate('/info-compte');

    };
    const typeServices = () => {
        navigate('/services');

    };

    const onFinish = () => {
        // if (validate()) {
        // setLoader(true);
        toast.success('success !', { theme: 'light' });
        navigate('/home');

        // } else {
        //     setLoader(false);
        //     toast.error('Failed !', { theme: 'light' });
        // }
    };
    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];
        if (storedServices.length > 0) {
            setValue(prevValue => ({
                ...prevValue,
                service: storedServices.join(', ')
            }));
        }
    }, []);
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage} />
                    <h4 className='grey-color-900'>S’inscrire</h4>
                </div>
                <div className='flex-Column gap-30'>
                    <h4 className='primary-dark-color text-center'>Informations supplémentaires</h4>
                    <form className='flex-Column gap-30'>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="text"
                                    name="nomEntreprise"
                                    placeholder="Nom de l’entreprise"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.nomEntreprise}
                                />
                            </div>
                            {/* {errors.nomEntreprise && <span className="error-message">{errors.nomEntreprise}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="text"
                                    name="numSiret"
                                    placeholder="Numéro Siret"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.numSiret}
                                />
                            </div>
                            {/* {errors.numSiret && <span className="error-message">{errors.numSiret}</span>} */}
                        </div>

                        <div className='double-icon-input flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <div className="input-icon-left">
                                    <img src={workIcon} alt="work Icon" className='icon-input' />
                                </div>
                                <input
                                    type='text'
                                    name="service"
                                    placeholder="Type de service(s) offert(s)"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.service}
                                    onClick={typeServices}
                                    readOnly 
                                />
                                <div className="input-icon-right">
                                    <img src={arrowIcon} alt="work Icon" className='icon-input' onClick={typeServices} />
                                </div>
                            </div>
                            {/* {errors.service && <span className="error-message">{errors.service}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="text"
                                    name="NIV"
                                    placeholder="Numéro d’immatriculation du véhicule"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.NIV}
                                />
                            </div>
                            {/* {errors.NIV && <span className="error-message">{errors.NIV}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>

                                <input
                                    type="text"
                                    name="assurance"
                                    placeholder="Assurance"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.assurance}
                                    onClick={openPopup}
                                    readOnly


                                />
                                <div className="input-icon-right">
                                    <img src={cameraIcon} alt="camera Icon" className='icon-input' onClick={openPopup}
                                    />
                                </div>
                            </div>
                            {/* {errors.assurance && <span className="error-message">{errors.assurance}</span>} */}
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center' >

                                <input
                                    type="text"
                                    name="kpis"
                                    placeholder="Kpis"
                                    className="input-field"
                                    onChange={handleChange}
                                    value={value.kpis}
                                    onClick={openPopup}
                                    readOnly

                                />
                                <div className="input-icon-right">
                                    <img src={cameraIcon} alt="camera Icon" className='icon-input' onClick={openPopup} />
                                </div>
                            </div>
                            {/* {errors.kpis && <span className="error-message">{errors.kpis}</span>} */}
                        </div>
                    </form>
                </div>
            </div>
            <BottomPopup isOpen={isOpen} setIsOpen={setIsOpen} />
            <button type="submit" className="button-primary w-100"  onClick={onFinish}>
                Continuer
            </button>
        </div>
    )
}

export default InfoSupplementaires