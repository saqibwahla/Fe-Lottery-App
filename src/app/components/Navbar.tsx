import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4  text-black">
      <div className="text-xl cursor-pointer">&#9776;</div>
      <Link href="/">
        <div className="text-xl font-bold">Lottery</div>
      </Link>
      <div className="invisible"></div>
    </nav>
  );
};

export default Navbar;
