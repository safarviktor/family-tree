
import React from 'react';
import { Person } from '../Models';
import './PersonNode.css';

const PersonNode: React.FC<Person> = (info: Person) => {
  return (
    <div className='person-wrapper'>
        <div className='parents'>
            {info.parent1 && <PersonNode {...info.parent1} />}
            {info.parent2 && <PersonNode {...info.parent2} />}
        </div>
        <div className='person-info'>
            {/* <button onClick={() => alert('Hello World!')}>Add relationship</button> */}
            <h2>{info.name}</h2>
            <p>{info.age}</p>
        </div>
        
    </div>
  );
};

export default PersonNode;
