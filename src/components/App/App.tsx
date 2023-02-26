import { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { dropdowns } from '../../utils/dropdowns'
import './App.css';

const App = () => {
  const [activeDropdownId, setActiveDropdownId] = useState<number>(0);

  return (
    <div className="app">
      <div className="app-grid">
        {dropdowns.map((item) => (
          <div className="app-grid-cell" key={`cell_${item.id}`}>
            <DropdownMenu dropdown={item} activeDropdownId={activeDropdownId} setActiveDropdownId={setActiveDropdownId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
