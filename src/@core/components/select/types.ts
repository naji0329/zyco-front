type MenuItem = {
  value: number,
  text: string
}
export type SelectProps = {
  label: string,
  id: string,
  defaultValue: number,
  labelId?: string,
  menuItems: Array<MenuItem>
}