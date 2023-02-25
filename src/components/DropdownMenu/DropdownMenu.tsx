import { useState } from 'react';
import IDropdown from '../../interfaces/IDropdown';
import './DropdownMenu.css';

type DropdownMenuProps = {
  dropdown: IDropdown,
};


const DropdownMenu = ({dropdown}: DropdownMenuProps) => {
  console.log('dropdown', dropdown)
  const [isOpened, setIsOpened] = useState(false);

  const handleClickButton = () => {
    setIsOpened(!isOpened);
  };

  const handleClickMenuItem = () => {
    setIsOpened(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={handleClickButton}>
        <img src={`assets/icons/${dropdown.mainIcon}.svg`} />
      </div>
      {isOpened && (
        <div className="dropdown-menu">
          {dropdown.list.map((item) => (
            <div className="dropdown-menu-item" key={item.itemText} onClick={handleClickMenuItem}>
              <span className="dropdown-menu-item-text">{item.itemText}</span>
              <img className="dropdown-menu-item-icon" src={`assets/icons/${item.itemIcon}.svg`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default DropdownMenu;