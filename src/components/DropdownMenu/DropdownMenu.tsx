import { useState } from 'react';
import IDropdown from '../../interfaces/IDropdown';
import './DropdownMenu.css';

type DropdownMenuProps = {
  dropdown: IDropdown,
};


const DropdownMenu = ({dropdown}: DropdownMenuProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClickButton = (e: React.MouseEvent<HTMLElement>) => {
    if (isOpened) {
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

    setIsOpened(true);
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