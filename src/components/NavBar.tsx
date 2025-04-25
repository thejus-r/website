export default function NavBar() {
  return (
    <nav className="fixed flex justify-between w-screen py-12 px-16 top-0 left-0 text-white">
      <div>Thejus Rajendran</div>
      <ul className="flex gap-4">
        <li>
          <a>Works</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </nav>
  );
}
