import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import { userData } from "../../constants"
import CardUser from '../../common/CardUser'
import { useNavigate } from 'react-router-dom';

function DepanneursDispo() {
    const navigate = useNavigate();

    const previousPage = () => {
        navigate('/home');
    
    };
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" className='cursor-pointer' onClick={previousPage}
                    />
                    <h4 className='grey-color-900 title-nowrap'>Nos dépanneurs disponibles</h4>
                </div>
                <div className='flex-Column gap-24'>
                {userData.map((item, index) => (
                    <CardUser item={item} key={index} buttonValid={true}
                    buttonText1='Décliner'
                    buttonText2='Accepter' />
                    ))}
                </div>
          

            </div>
        </div>
    )
}

export default DepanneursDispo