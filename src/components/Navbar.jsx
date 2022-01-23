import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-fit bg-gray-800 flex justify-center basis-auto">
      <div className="w-fit my-1 flex items-center cursor-default" id="logo">
        <img src={logo} className="w-10" alt="logo" />
        <div className="text-2xl font-bold text-gray-50">
          Code<span className="text-[#3aafa9]">Set</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
