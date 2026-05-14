import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Space Galactica Next.js</h1>
      <ul>
        <li>
          <Link href="/astronomy">🔭 Astronomy Picture of the Day</Link>
        </li>
        <li>
          <Link href="/rover">🚀 Mars Rover Photos</Link>
        </li>
        <li>
          <Link href="/blogs">📝 Blogs</Link>
        </li>
        <li>
          <Link href="/epic?date=2021-01-01">🌍 NASA EPIC Image</Link>
        </li>
        <li>
          <Link href="/articles-server">📰 Articles (Server Side)</Link>
        </li>
        <li>
          <Link href="/articles-client">📰 Articles (Client Side)</Link>
        </li>
      </ul>
    </main>
  );
}