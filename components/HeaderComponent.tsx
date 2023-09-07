import React from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className={style.placeholder}>
      <div className={style.container}>
        <div className={style.header_container}>
          <Link href={"#home"} className={style.header_container__logo}>
            Yan Zhabko
          </Link>
          <ul className={style.header_container__navigation}>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
