import toast, { Toaster } from "react-hot-toast";

import PropTypes from "prop-types";
import css from "./SearchBar.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { FormEvent, useRef } from "react";

type Prop = {
  onSearch: (filter: string) => void;
};

const Header = ({ onSearch }: Prop) => {
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    if (
      (form.elements.namedItem("searchBar") as HTMLInputElement).value.trim() ==
      ""
    ) {
      toast.error("Enter something in search bar!");
      return;
    }
    onSearch((form.elements.namedItem("searchBar") as HTMLInputElement).value);

    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          className={css.textInput}
          type="text"
          name="searchBar"
          placeholder="Search images and photos"
        />
        <LoadMoreBtn type="submit">
          <p>Search</p>
        </LoadMoreBtn>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
