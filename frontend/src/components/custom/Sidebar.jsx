import LogoBox from "./LogoBox";
import NavLinks from "./NavLinks";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar === true ? "active" : ""}`}>
      {/* Logo */}
      <LogoBox showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* page info */}
      <div className="page-info">
        <p className="dm-sans">HOME</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="3"
          viewBox="0 0 10 3"
          fill="none"
        >
          <circle cx="1" cy="1.5" r="1" fill="#B2B3BD" />
          <circle cx="5" cy="1.5" r="1" fill="#B2B3BD" />
          <circle cx="9" cy="1.5" r="1" fill="#B2B3BD" />
        </svg>
      </div>

      {/* Page Link */}
      <NavLinks />
    </div>
  );
};

export default Sidebar;
