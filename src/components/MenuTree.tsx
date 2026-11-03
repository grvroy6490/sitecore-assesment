import type { MenuNode } from "@/lib/buildTree";

/**
 * TASK 3 (part 2)
 * Render the tree recursively as nested <ul>/<li>.
 */
export default function MenuTree({ nodes }: { nodes: MenuNode[] }) {
  // TODO
  return <p>{nodes.length} top-level items.</p>;
}
