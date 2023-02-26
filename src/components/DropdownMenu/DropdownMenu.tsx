import { useState } from 'react';
import IDropdown from '../../interfaces/IDropdown';
import cn from 'classnames';
import './DropdownMenu.css';

type DropdownMenuProps = {
  dropdown: IDropdown,
};


const DropdownMenu = ({dropdown}: DropdownMenuProps) => {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  const [xCoord, setXcoord] = useState<String>('');
  const [yCoord, setYcoord] = useState<String>('');

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (isOpened) {
      setXcoord('');
      setYcoord('');
      setIsOpened(false);
      return;
    }

    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    console.log('screenWidth/screenHeight', screenWidth, screenHeight);

    const clientRect = e.currentTarget.getBoundingClientRect()
    console.log('clientRect', clientRect);

    const distanceToLeftEdge = clientRect.left + clientRect.width;
    const distanceTorightEdge = screenWidth - clientRect.left;
    console.log('left/right', distanceToLeftEdge, distanceTorightEdge);
    
    const distanceToTopEdge = clientRect.top;
    const distanceToBottomEdge = screenHeight - clientRect.top - clientRect.width;
    console.log('top/bottom', distanceToTopEdge, distanceToBottomEdge);

    setXcoord(distanceToLeftEdge > distanceTorightEdge ? 'left' : 'right');
    setYcoord(distanceToTopEdge > distanceToBottomEdge ? 'top' : 'bottom');
    setIsOpened(true);
  };

  const handleClickMenuItem = () => {
    setIsOpened(false);
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
      {isOpened && (
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