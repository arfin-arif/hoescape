import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export default function Search() {
  return (
    <form className="search-form">
      <label htmlFor="search">
        <FiSearch />
      </label>
      <input type="text" id="search" placeholder="Quick Search" />
      <button type="submit">
        <HiOutlineAdjustmentsHorizontal />
      </button>
    </form>
  );
}
