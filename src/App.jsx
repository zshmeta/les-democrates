import { useState } from 'react';
import Header from './components/Header';
import Boards from './components/Boards';
import headerMenu from './data/header-menu';
import Button from './components/ui/Button';
import './App.css';

function App() {
  const [boardContent, setBoardContent] = useState(''); 
  const [alignment, setAlignment] = useState(null);     

  const handleMenuClick = (content, alignment) => {
    setBoardContent(content);
    setAlignment(alignment); 
  };

  return (
    <div className="App">
      <Header
        headerMenu={headerMenu}
        onMenuClick={(content, alignment) => handleMenuClick(content, alignment)}
      />
      <div className="button">
          <Button text="Soutenez Nous" onClick={() => setBoardContent('')} />
      </div>
      <div className="coming-soon">
        <h1>À Venir</h1>
        <h1>Coming Soon</h1>
        <h1>قريباً</h1>
        <h1>Скоро</h1>
        <h1>即将到来</h1>
      </div>
      <Boards content={boardContent} alignment={alignment} />
    </div>
  );
}

export default App;
