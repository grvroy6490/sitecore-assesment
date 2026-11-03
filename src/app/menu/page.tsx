import MenuTree from "@/components/MenuTree";
import { menuItems } from "@/data/menu";
import { buildTree } from "@/lib/buildTree";

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>
      <MenuTree nodes={buildTree(menuItems)} />
    </main>
  );
}
