import React , {useState} from 'react'
import Pricing from './Components/Pricing';
import Annually from './Components/Annually.json';
import Card from './Components/Card'
import './App.css';

const App = () => {
  const [choice, setChoice] = useState(Annually)
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <div className="container">
      <Pricing 
      setChoice={setChoice} 
      setIsAnnual={setIsAnnual} 
      isAnnual={isAnnual}
      />
      <div className="card-container">
        {choice.map(data => (
          <Card key={data.id} data={data}/>
        ))}
      </div>
    </div>
  );
}

export default App;