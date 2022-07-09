import React from 'react';
import possibilityImage from '../../assests/ref.png';
import './reference.css';
const Reference = () => {
  return(
  <div className="ai_possibility section__padding" id="possibility">
    <div className="ai_possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="ai_possibility-content">
      <h1 className="gradient__text">A.i.Reference Site(Medical school)</h1>
      <p>1.<a> Department of Transfusion Medicine Siriraj Hospital</a><br /></p>
      <p>2.<a> Naresuan University Hospital<br /></a></p>
      <p>3.<a> Chakri Naruebodindra Medical Institute<br /></a></p>
      <p>4.<a> Faculty of Medicine, Khon Kaen University<br /></a></p>
      <p>5.<a> Mae Fah Luang University Medical Center<br /></a></p>
      <p>6.<a> Thammasat University Hospital<br /></a></p>
      <p>7.<a> Faculty of Medicine Ramathibodi Hospital Mahidol University<br /></a></p>
      <p>8.<a> Faculty of Medicine Vajira Hospital, Navamindradhiraj University<br /></a></p>
      <h1 className="gradient__text">A.i.Reference Site</h1>
      <ul>
        <li>1.<a> Buriram Hospital</a></li>
        <li>2.<a> King Narai Hospital</a></li>
        <li>3.<a> Suratthani Hospital</a></li>
        <li>4.<a> Chiang Kham Hospital</a></li>
        <li>5.<a> Sakonnakhon Hospital</a></li>
        <li>6.<a> Khon Kaen Hospital</a></li>
        <li>7.<a> Phayao Hospital</a></li>
        <li>8.<a> Bhudasothon Hospital</a></li>
        <li>9.<a> Loei Hospital</a></li>
        <li>10.<a> Kalasin Hospital</a></li>
        <li>11.<a> Si Sa Ket Hospital</a></li>
        <li>12.<a> Ratchaburi Hospital</a></li>
        <li>13.<a> Vachira Phuket Hospital</a></li>
        <li>14.<a> Pattani Hospital</a></li>
        <li>15.<a> Roi Et Hospital</a></li>
        <li>16.<a> Udon Thani Hospital</a></li>
        <li>17.<a> Rayong Hospital</a></li>
        <li>18.<a> Lampang Hospital</a></li>
        <li>19.<a> Chao Phraya Abhaibhubejhr Hospital</a></li>
        <li>20.<a> RajaNagarin Narathiwat Hospital</a></li>
        <li>21.<a> Chiangrai Prachanukroh Hospital</a></li>
        <li>22.<a> Buddhachinaraj Phitsanulok Hospital</a></li>
        <li>23.<a> Sunpasittiprasong Hospital</a></li>
        <li>24.<a> Lampang Cancer Hospital</a></li>
      </ul>
    </div>
  </div>
  )
};
export default Reference;