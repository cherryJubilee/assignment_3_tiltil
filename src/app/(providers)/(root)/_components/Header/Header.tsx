import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-40 bg-red-50">
      <section className="max-w-5xl	 flex items-center justify-between pt-8 m-auto">
        <Link href="/" className="font-extrabold text-6xl">
          TILTIL
        </Link>

        <HeaderAuthButtons />
      </section>
      <section className="mt-6  max-w-5xl m-auto">
        <nav>
          <ul className="flex text-xl">
            <li className=" rounded-md	px-3 py-1 m-1">
              <Link href="/til/trending">트렌딩</Link>
            </li>
            <li className=" rounded-md	px-3 py-1 m-1">
              <Link href="/til/latest">최신</Link>
            </li>
            <li className=" rounded-md	px-3 py-1 m-1">
              <Link href="/til/write">TIL 작성</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
