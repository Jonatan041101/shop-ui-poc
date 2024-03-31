import { useEffect, useRef } from "react";
import { useCurrentPage } from "../store/store";

export default function usePage(href: string, pathname: string) {
  const liRef = useRef<HTMLLIElement | null>(null);
  const { handleChangeCurrentPage } = useCurrentPage();

  useEffect(() => {
    if (href === pathname) {
      handleChangeCurrentPage(liRef.current?.offsetTop ?? 0);
    }
  }, [pathname]);
  return {
    liRef,
    handleChangeCurrentPage,
  };
}
