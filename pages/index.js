import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PC Store Data</title>
      </Head>
      Home
      <Link href="/notebook">Notebook</Link>
      <Link href="/notebook2">Notebook2</Link>
    </div>
  );
}
