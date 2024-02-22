import React from 'react';
import './style.css';

import I2 from '../../assets/I2.jpg';
import logo from '../../assets/Logo.png';
import agentPic from '../../assets/agentPic.jpg';
import topBG from '../../assets/TBG.jpg';
import bg from '../../assets/BG1.jpg';

//Icons
import { FaPhone } from 'react-icons/fa6';
import { BsEnvelopePaperFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { FaGlobe } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function IntroSection() {
  return (
    <div className='IntroSection'>
      <div className='top-bg'>
        <img src={topBG} alt='top-bg' />
      </div>
      <div className='topLogo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='agent-image-sec'>
        <div className='wave-wrap'>
          <svg version='1.1' id='wave' viewBox='0 0 119 26'>
            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='50%' stopColor='#151515' />
                <stop offset='100%' stopColor='#171717' />
              </linearGradient>
            </defs>
            <path
              className='path'
              d='M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z'
              fill='url(#gradient)'
            ></path>
          </svg>
        </div>
        <div className='agentPic'>
          <img src={agentPic} alt='agentPic' />
        </div>
        <div className='triangle-down'></div>
        <div className='half-circle'></div>
      </div>
      <div className='agent-name-info'>
        <h1 className='agent-name'>Johnson Smith</h1>
        <h2 className='agent-name agent-profession'>Real Estate Agent</h2>
      </div>
      <div className='main-social-icons'>
        <div className='icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='icon-1'>
              <FaPhone />
            </div>
            <h3>+01 123 423 10101</h3>
          </a>
        </div>
        <div className='icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='icon-2'>
              <BsEnvelopePaperFill />
            </div>
            <h3>mail@gmail.com</h3>
          </a>
        </div>
        <div className='icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='icon-3'>
              <FaMapMarkerAlt />
            </div>
            <h3>7 Seven Avenue, Ney York, NY, 1211</h3>
          </a>
        </div>
      </div>
      <div className='social-icons'>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <FaGlobe />
            </div>
          </a>
        </div>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <FaFacebookF />
            </div>
          </a>
        </div>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <AiFillInstagram />
            </div>
          </a>
        </div>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
      <div className='social-icons'>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <BsTwitterX />
            </div>
          </a>
        </div>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <FaYoutube />
            </div>
          </a>
        </div>
        <div className='social-icon'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='secondary-icon'>
              <FaFacebookMessenger />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
