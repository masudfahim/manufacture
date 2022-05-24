

import React from 'react';




const Bannar = () => {
    return (
        <div class="carousel w-full ">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/StBVN47/bannar1.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/PWfP4d2/bannar2.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/TgRhRh5/bannar3.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Bannar;