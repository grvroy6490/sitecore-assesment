import { buildTree } from "./buildTree";

describe("buildTree", () => {
  it("nests children under their parent", () => {
    const tree = buildTree([
      { id: 1, title: "Home", parentId: null },
      { id: 2, title: "Services", parentId: null },
      { id: 3, title: "Cardiology", parentId: 2 },
      { id: 4, title: "Neurology", parentId: 2 },
      { id: 5, title: "Heart Surgery", parentId: 3 }
    ]);

    expect(tree.map((n) => n.title)).toEqual(["Home", "Services"]);
    expect(tree[1].children.map((n) => n.title)).toEqual(["Cardiology", "Neurology"]);
    expect(tree[1].children[0].children[0].title).toBe("Heart Surgery");
  });

  it("returns an empty array for no items", () => {
    expect(buildTree([])).toEqual([]);
  });

  it("works when a child appears before its parent", () => {
    const tree = buildTree([
      { id: 2, title: "Child", parentId: 1 },
      { id: 1, title: "Parent", parentId: null }
    ]);
    expect(tree).toHaveLength(1);
    expect(tree[0].children[0].title).toBe("Child");
  });
});
