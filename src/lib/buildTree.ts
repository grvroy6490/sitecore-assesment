import type { MenuItem } from "@/data/menu";

export interface MenuNode extends MenuItem {
  children: MenuNode[];
}

/**
 * TASK 3
 * Turn the flat list into a nested tree. See TASKS.md.
 */
export function buildTree(items: MenuItem[]): MenuNode[] {
  // TODO
  return [];
}
