import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { dropdowns } from '../../utils/dropdowns'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="app-grid">
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[0]} />
        </div>
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[1]} />
        </div>
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[2]} />
        </div>
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[3]} />
        </div>
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[4]} />
        </div>
        <div className="app-grid-cell">
          <DropdownMenu dropdown={dropdowns[5]} />
        </div>
      </div>
    </div>
  );
};

export default App;
