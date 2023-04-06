
export type CustomChipType = {
  skin: string,
  size: string,
  chipText: string,
  chipColor: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
}

export type UserItem = {
  title: string,
  src: string,
  icon?: string,
  subtitle: string,
  customChip?: CustomChipType,
  mb?: number,
  avatarVariant: "circular" | "rounded" | "square",
  more?: boolean
}

export type UserItemProps = {
  item: UserItem
}
