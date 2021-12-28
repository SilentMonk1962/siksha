import React from 'react';

const Home = ()=>{
    return (
        <div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                <img src="https://cdn.vox-cdn.com/thumbor/TzVXx4TCgo42XYawW-y5-A_ranA=/0x0:5120x2880/920x613/filters:focal(2151x1031:2969x1849):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69319101/PIXEL_6_PRO_5K3.0.jpeg"/>
                </div>
                <div className='text-wrapper item'>
                <span>
                    I-phone
                </span>
                <span>
                    Price: $1000.00
                </span>
                </div>
                <div className='btn-wrapper item'>
                <button>
                    Add To Cart
                </button>
                </div>
            </div>
        </div>
    )
}
export default Home;