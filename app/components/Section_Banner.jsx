import React from 'react';

export default function Section_Banner ({ 
    backgroundImage, 
    height = '300px', 
    text = '', 
    textColor = '#fff', 
    textAlign = 'center', 
    opacity = 0.8 
})  {
    return (
        <>
        <div 
            className="section-banner" 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: height,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}
        >
            <div 
                className="section-banner-overlay" 
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            ></div>
            <div 
                className="section-banner-content" 
                style={{
                    color: textColor,
                    textAlign: textAlign,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {text && <h2 className='section-banner-heading'>{text}</h2>}
            </div>
        </div>
        </>
    );
};


