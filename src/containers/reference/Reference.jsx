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
      <h1 className="gradient__text">Ai-Reference Site(Medical school)</h1>
      <p>
        1. DEPARTMENT OF TRANSFUSION MEDICINE SIRIRAJ HOSPITAL<br />
        2. ห้องปฏิบัติการธนาคารเลือด คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดีคณะแพทยศาสตร์มหาวิทยาลัยมหิดล<br />
        3. Chakri Naruebodindra Medical Institute<br />
        4. Faculty of Medicine, Khon Kaen University<br />
        5. Faculty of Medicine Vajira Hospital, Navamindradhiraj University<br />
        6. Thammasat University Hospital<br />
        7. Naresuan University Hospital<br />
        8. Mae Fah Luang University Medical Center<br />
      </p>
      <h1 className="gradient__text">Ai-Reference Site</h1>
      <ul>
        <li>1. Sunpasittiprasong Hospital</li>
        <li>2. King Narai Hospital</li>
        <li>3. Suratthani Hospital</li>
        <li>4. RajaNagarin Narathiwat Hospital</li>
        <li>5. Sakonnakhon Hospital</li>
        <li>6. Khon Kaen Hospital</li>
        <li>7. Phayao Hospital</li>
        <li>8. Bhudasothon Hospital</li>
        <li>9. Loei Hospital</li>
        <li>10. Kalasin Hospital</li>
        <li>11. Si Sa Ket Hospital</li>
        <li>12. Ratchaburi Hospital</li>
        <li>13. Vachira Phuket Hospital</li>
        <li>14. Pattani Hospital</li>
        <li>15. Roi Et Hospital</li>
        <li>16. Udon Thani Hospital</li>
        <li>17. Chiangrai Prachanukroh Hospital</li>
        <li>18. Lampang Hospital</li>
        <li>19. Rayong Hospital</li>
        <li>20. Chiang Kham Hospital</li>
        <li>21. Chao Phraya Abhaibhubejhr Hospital</li>
        <li>22. Buriram Hospital</li>
        <li>23. Buddhachinaraj Phitsanulok Hospital</li>
        <li>24. Lampang Cancer Hospital</li>
      </ul>
    </div>
  </div>
  )
};
export default Reference;