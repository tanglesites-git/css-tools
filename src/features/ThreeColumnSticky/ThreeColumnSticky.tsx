import { ReactNode } from "react";
import "./three-col-sticky.css";

interface ThreeColumnStickyOptions {
  left: ReactNode;
  main: ReactNode;
  right: ReactNode;
}

const ThreeColumnSticky = (props: ThreeColumnStickyOptions) => {
  return (
    <section className="main-body">
      <div className="left-container">
        <div className="inner-container">
          <div className="left-inner-container">{props.left}</div>
        </div>
      </div>
      <main>{props.main}</main>
      <div className="right-container">
        <div className="inner-container">
          <div className="left-inner-container">{props.right}</div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSticky;
