import Link from "next/link";
const Navigator = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home Page </a>
      </Link>
      <Link href="/people">
        <a>Star Wars People </a>
      </Link>
      <Link href="/about">
        <a>About </a>
      </Link>
    </nav>
  );
};

export default Navigator;
