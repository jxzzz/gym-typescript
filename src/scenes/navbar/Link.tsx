import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "@/shared/types";
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        lowerCasePage === selectedPage ? "text-promary-500" : ""
      } translate duration-500 hover:text-primary-300 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
