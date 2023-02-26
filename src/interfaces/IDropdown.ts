import IDropdownListItem from './IDropdownListItem'

export default interface IDropdown {
  id: number,
  mainIcon: string,
  list: IDropdownListItem[],
};