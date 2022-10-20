import React, { useState } from 'react';

import './App.css';
import LeftArrow from './component/images/LeftArrow';
import Pikachu from './assets/images/pikqchu.png';

const creatures = [
  {
    title: '#8826',
    id: 1
  },
  {
    title: '#8823',
    id: 2
  },
  {
    title: '#8824',
    id: 3
  },
  {
    title: '#8825',
    id: 4
  },
  {
    title: '#8827',
    id: 5
  },
  {
    title: '#8828',
    id: 6
  }
]

function App() {
  const [unavaliableCreatures, setUnavaliableCreatures] = useState([]);
  const [selectedCreatures, setSelectedCreatures] = useState([]);
  const setProceed = () => {
    setUnavaliableCreatures([...unavaliableCreatures, ...selectedCreatures])
    setSelectedCreatures([]);
  };
  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='arrow'>
            <LeftArrow />
            <span>Exit</span>
          </div>
        </div>
        <div className='content'>
          <div className='content-heading'>
            <div className='round-shapes'>
              <span></span>
              <span></span>
            </div>
            <div className='content-header-main'>
              <p className='step-title'>step 1 OF 3</p>
              <p className='title'>SELECT CREATURE</p>
              <p className='description'>Select creature(s) to transform, don't worry you'll still have the original.</p>
              <p className='total-heading'>you have 8 creatures</p>
            </div>
          </div>
          <div className='content-body'>
            {creatures.map(res => {
              let is_in_unavaliable = unavaliableCreatures.includes(res.id);
              return (
                <div className={`creature-block `} key={`pikachu-creature-${res.title}`} onClick={() => !is_in_unavaliable ? setSelectedCreatures([...selectedCreatures, res.id]) : null}>
                  <div className='iamge-block '>
                    <img src={Pikachu} width="100%" alt="pikachu" />
                    {selectedCreatures.includes(res.id) ? <div className='selected'> Selected</div> : null}
                    {is_in_unavaliable ?
                      <div className='unavaliable-conter'>
                        <div className='unavaliable-text-container'>
                          <p>UNAVALIABLE</p>
                          <p className='small-text'>ALREADY TRANSFROMED</p>
                        </div>
                      </div> : null}
                  </div>
                  <p className='title'>Creature {res.title}</p>
                </div>
              )
            })}
          </div>
          <div className='content-footer'>
            <div className='proceed-btn' onClick={() => setProceed()}> <span>PROCEED</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
