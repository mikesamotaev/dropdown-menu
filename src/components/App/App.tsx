import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { dropdowns } from '../../utils/dropdowns'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <DropdownMenu dropdown={dropdowns[0]} />
    </div>
  );
};

export default App;
