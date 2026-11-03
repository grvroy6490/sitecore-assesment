import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hands-on</h1>
      <p>Read TASKS.md first.</p>
      <ul>
        <li><Link href="/doctors">Task 1: Doctor list</Link></li>
        <li><Link href="/products">Task 2: Products</Link></li>
        <li><Link href="/menu">Task 3: Menu tree</Link></li>
        <li>Task 4: GraphQL: no page, see TASKS.md</li>
      </ul>
    </main>
  );
}
