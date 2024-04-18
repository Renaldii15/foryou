import { useState, useEffect } from 'react';
import styles from './css/AutoTyping.css';
// import AutoTyping from './AutoTyping';
import Typist from '../../node_modules/react-typist/src/Typist';

export default AutoTypings = ({ textArray, speed }) => {
  return <div>
    <Typist>
    <span>React Native Developer</span>
    <Typist.Backspace count={20} delay={2000} />
    <span>Laravel Developer</span>
  </Typist>
  </div>;
};

