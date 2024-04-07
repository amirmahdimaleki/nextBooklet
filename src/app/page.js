import Link from 'next/link'

export default function Home() {

  let id = 23444
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <Link href={`/products ${id}`}>product {id}</Link>
    </main>
  );
}
