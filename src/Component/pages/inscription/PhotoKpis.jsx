import React, { useState } from 'react'
import extraitImage from '../../../assets/image 1.png'
import photo from '../../../assets/photo0.svg'
import image from '../../../assets/Image0.svg'
import folder from '../../../assets/Folder0.svg'
import arrow from '../../../assets/arrow-white.svg'
import { useNavigate } from 'react-router-dom'

function PhotoKpis() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };
  const previousPage = () => {
    navigate('/info-supplementaires');

};

  return (
    <div className="Container kbis-container gap-30">
      <img src={arrow} alt="profile" className='arrow-top' onClick={previousPage}/>

      <div className='flex-Column align-items-center gap-30'>
        <h3 className="white-color text-center">Photo</h3>
        <img src={uploadedImage || extraitImage} alt="Extrait KBIS" className="kbis-image text-center" />
      </div>
      <div className="flex-row gap-20 align-items-center justify-content-center">
        <div className="small-button">
          <img src={image} alt='' />
        </div>
        <div className="large-button">
          <label>
            <img src={photo} alt="" />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div className="small-button">
          <img src={folder} alt='' />
        </div>
      </div>
    </div>
  )
}

export default PhotoKpis