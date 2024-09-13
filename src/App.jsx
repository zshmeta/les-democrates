import { useState } from 'react';
import Header from './components/Header';
import Boards from './components/Boards';
import headerMenu from './data/header-menu';
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
      <h1>A Venir</h1>
      <Boards content={boardContent} alignment={alignment} />
    </div>
  );
}

export default App;
