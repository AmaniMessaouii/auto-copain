import React from 'react'
import ServicesList from '../../common/ServicesList';
import MobileMenu from '../../layout/MobileMenu';
function PanneList() {

  return (
    <div className='Container'>
        <div className='flex-Column gap-24'>
        <h4 className='grey-color-900 title-nowrap text-center' style={{padding:'12px 0'}}>
          Sélectionner votre type de panne</h4>
            <span className='primary-dark-color text-center paraXlargeR'>Veuillez sélectionner vos services</span>
         <ServicesList />
        </div>
        <MobileMenu />

</div>
  )
}

export default PanneList