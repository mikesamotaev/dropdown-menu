import { useState, Dispatch, SetStateAction } from 'react';
import IDropdown from '../../interfaces/IDropdown';
import cn from 'classnames';
import './DropdownMenu.css';

type DropdownMenuProps = {
  dropdown: IDropdown,
  activeDropdownId: number,
  setActiveDropdownId: Dispatch<SetStateAction<number>>,
};


const DropdownMenu = ({dropdown, activeDropdownId, setActiveDropdownId}: DropdownMenuProps) => {
  const [xCoord, setXcoord] = useState<string>('');
  const [yCoord, setYcoord] = useState<string>('');

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (activeDropdownId === dropdown.id) {
      setXcoord('');
      setYcoord('');
      setActiveDropdownId(0);
      return;
    }

    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;

    const clientRect = e.currentTarget.getBoundingClientRect()

    const distanceToLeftEdge = clientRect.left + clientRect.width;
    const distanceTorightEdge = screenWidth - clientRect.left;
    
    const distanceToTopEdge = clientRect.top;
    const distanceToBottomEdge = screenHeight - clientRect.top - clientRect.width;

    setXcoord(distanceToLeftEdge > distanceTorightEdge ? 'left' : 'right');
    setYcoord(distanceToTopEdge > distanceToBottomEdge ? 'top' : 'bottom');
    setActiveDropdownId(dropdown.id);
  };

  const handleClickMenuItem = () => {
    setActiveDropdownId(0);
  };

  const dropdownClasses = cn({
    'dropdown-menu': true,
    'dropdown-menu-xLeft': xCoord === 'left',
    'dropdown-menu-xRight': xCoord === 'right',
    'dropdown-menu-yTop': yCoord === 'top',
    'dropdown-menu-yBottom': yCoord === 'bottom',
  });

  console.log('DropdownMenu render')

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={handleClickButton}>
        <img src={`assets/icons/${dropdown.mainIcon}.svg`} />
      </div>
      {(activeDropdownId === dropdown.id) && (
        <div className={dropdownClasses}>
          {dropdown.list.map((item) => (
            <div className="dropdown-menu-item" key={item.itemText} onClick={handleClickMenuItem}>
              <span>{item.itemText}</span>
              <img src={`assets/icons/${item.itemIcon}.svg`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default DropdownMenu;