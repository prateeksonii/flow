import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  return (
    <ul className="menu bg-base-300 p-2">
      <li className="menu-title">
        <span>Sorting</span>
      </li>
      <li>
        <Link href="/sort/selection-sort">
          <a
            className={`${
              router.pathname === "/sort/selection-sort" ? "active" : ""
            }`}
          >
            Selection Sort
          </a>
        </Link>
      </li>
      <li>
        <Link href="/sort/bubble-sort">
          <a>Bubble Sort</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
