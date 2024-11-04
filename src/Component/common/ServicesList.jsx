import React, { useEffect, useState } from 'react'
import { servicesData } from "../constants"
import tick from '../../assets/Tick Square.svg'
import { useNavigate } from 'react-router-dom';
function ServicesList() {
    const [selectedServices, setSelectedServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const storedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];
      setSelectedServices(storedServices);
    }, []);
  
    const handleServiceClick = (title) => {
      let updatedSelectedServices;
  
        // only allow one selection
      if (window.location.pathname === '/panne-list') {
        updatedSelectedServices = [title];
        navigate('/declarer')
      } else {
        // Allow multiple selections
        updatedSelectedServices = selectedServices.includes(title)
          ? selectedServices.filter(service => service !== title)
          : [...selectedServices, title];
      }
  
      setSelectedServices(updatedSelectedServices);
      localStorage.setItem('selectedServices', JSON.stringify(updatedSelectedServices));
    };
    return (
        <div className="services-grid">
            {servicesData.map((item, index) => (
                <div
                    key={index}
                    className='position-relative flex-Column align-items-center justify-content-center gap-12'
                    onClick={() => handleServiceClick(item.title)}
                >
                    <img src={item.image} alt={item.title}  className='service-image-' />

                    <span className={`paraLargeB text-center ${selectedServices.includes(item.title) ? 'color-blue' : 'primary-dark-color'}`}>
                        {item.title}
                    </span>
                    {selectedServices.includes(item.title) ?
                        <div className='tick-container position-absolute'>
                            <img src={tick} alt='tick' />
                        </div> : null
                    }

                </div>
            ))}
        </div>
    )
}

export default ServicesList