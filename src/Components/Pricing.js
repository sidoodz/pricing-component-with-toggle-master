import React from 'react';
import './Pricing.css';
import Annually from './Annually.json';

const Pricing = ({setChoice, setIsAnnual, isAnnual}) => {
  const MonthlyData = [
    {
        id: 1,
        type: 'Basic', 
        price: 19.99, 
        features: ['500gb Storage','2 Users Allowed','Send up to 3GB'],
   },
    {   id: 2,
        type: 'Professional', 
        price: 24.99,
       features: ['1TB Storage','5 Users Allowed','Send up to 10GB'],
   },
    {       id: 3,
        type: 'Master', 
        price: 39.99, 
        features: ['2TB Storage','10 Users Allowed','Send up to 20GB'],
  }
  ]  
  const handleClick = () => {
    if(isAnnual) {
      setChoice(MonthlyData)
      setIsAnnual(false)
    }
    else {
      setChoice(Annually)
      setIsAnnual(true)
    }
  }
  return (
    <div className="pricing-container">
      <h1>Our Pricing</h1>
      <div>
        <p>Annually</p>
        <label>
          <input type="checkbox"/>
          <span onClick={handleClick} className='check'></span>
        </label>
        <p>Monthly</p>
      </div>
    </div>
  );
}


export default Pricing;