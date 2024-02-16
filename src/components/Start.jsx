import React from 'react';
import Video from '../assets/sea.mp4';
import '../App.css';

const Start = () => {
  return (
    <section id='start' className='scroll-box snap-y snap-mandatory snap-center'>
        <video id='bg-video' src={Video} autoPlay muted loop></video>
        <header>
            <nav>
                <ul>
                    <li><a className='text-white' href="#start">Start</a></li>
                    <li><a className='text-white' href="#about">About</a></li>
                    <li><a className='text-white' href="#contact">Contact</a></li>
                    <li><a className='text-white' href="#footer">Footer</a></li>
                </ul>
            </nav>
        </header>
        <h1 className='sky-700'>Moin!</h1>
    </section>
  );
}

export default Start;