import GoBackHome from "./GoBackHomeBtn";

export default function NavBar() {
  return (
    <nav className="flex justify-between h-14 mt-12 mx-16 items-center">
      <div>
        <GoBackHome />
      </div>
      Nav Links
    </nav>
  );
}
