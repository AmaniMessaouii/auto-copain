
import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import CardUser from '../../common/CardUser'
import { useNavigate } from 'react-router-dom';
function DepanneursAcceptée() {
    const navigate = useNavigate();
    const storedAcceptedItems = JSON.parse(localStorage.getItem('acceptedItem')) || [];
    const previousPage = () => {
        navigate('/depanneur-dispo');
    };
  const handleClick = ()=>{
    navigate('/paiement');
  }
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}/>
                    <h4 className='grey-color-900 title-nowrap'>Nos dépanneurs disponibles</h4>
                </div>
                <div className='flex-Column gap-24' onClick={handleClick}>
                    {storedAcceptedItems.map((item, index) => (
                        <CardUser item={item} key={index} buttonValid={false} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default DepanneursAcceptée