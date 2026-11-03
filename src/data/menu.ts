export interface MenuItem {
  id: number;
  title: string;
  parentId: number | null;
}

export const menuItems: MenuItem[] = [
  { id: 1, title: "Home", parentId: null },
  { id: 2, title: "Services", parentId: null },
  { id: 3, title: "Cardiology", parentId: 2 },
  { id: 4, title: "Neurology", parentId: 2 },
  { id: 5, title: "Heart Surgery", parentId: 3 }
];
