import React from 'react'
import "./info.css"
const Info = () => {
  return (
    <>
        <div className="ai_vision section__padding" id="info">
            <div className="ai_vision-heading-container">
                <div className="ai_vision-heading">
                    <h1 className="gradient__text">Our Vision</h1>
                </div>
                {/* <div className="ai_vision-container_feature"> */}
                    <div className="ai_vision-container_feature-text">
                        <p>Professional HTML templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.</p>
                    </div>
                {/* </div> */}
            </div>
            <div className="ai_vision-container">
                <div className="ai_vision-heading">
                    <h1 className="gradient__text">Workplace Policies</h1>
                </div>
                {/* <div className="ai_vision-container_feature"> */}
                    <div className="ai_vision-container_feature-text">
                        <p>Professional HTML templates. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.</p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default Info