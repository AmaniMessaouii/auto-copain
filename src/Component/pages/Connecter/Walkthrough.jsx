import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { welcomeData } from "../../constants"
import vector from "../../../assets/Vector.svg";
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
function Walkthrough() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null)
    const navigate = useNavigate();

 
    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <div className=''>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                ref={swiperRef}
            >
                {welcomeData.map((item, index) => (
                    <SwiperSlide key={index} className="slide-container">
                            <div className="phone-image-container w-100 position-relative">
                                <img
                                    src={item.image}
                                    alt="Phone with app"
                                    className="phone-image h-100 position-absolute"
                                />
                                <img src={vector} alt="shap rounded" className="rounded-container position-absolute" />

                            </div>
                            <div className='position-relative flex-Column align-items-center gap-40 text-container '>
                                    <h2 className="primary-dark-color">{item.title}</h2>
                                    <span className="paraXlargeR grey-color-900">{item.description}</span>
                            </div>
                    </SwiperSlide>
                )
                )}
            </Swiper>
            <div className='btn-groupe flex-row align-items-center justify-content-center gap-40'>
                {activeIndex === 2 ? (
                    <button className="button-primary w-100" onClick={() => navigate("/login")}>c&apos;est parti !</button>
                ) : (
                    <>
                        <button className="pass-btn" onClick={() => navigate("/login")}>Passer</button>
                        <button className="button-primary w-100" onClick={goToNextSlide}>Suivant</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Walkthrough