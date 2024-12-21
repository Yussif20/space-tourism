import logo from '../assets/logo.svg';

const Navbar = () => {
  const navItemClasses = `flex gap-2`;
  return (
    <nav className="py-8 px-20 flex justify-between items-center">
      <img className="size-[48px]" src={logo} alt="logo icon" />
      <ul className="flex gap-4 text-white font-bellefair font-medium text-2xl">
        <li className={navItemClasses}>
          <span>00</span>
          <span>Home</span>
        </li>
        <li className={navItemClasses}>
          <span>01</span>
          <span>Destination</span>
        </li>
        <li className={navItemClasses}>
          <span>02</span>
          <span>Crew</span>
        </li>
        <li className={navItemClasses}>
          <span>03</span>
          <span>Technology</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
