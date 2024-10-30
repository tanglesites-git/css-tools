import ColorList from "../../colors";

import "./left-column.css";

const LeftColumn = () => {
  const color_map = Object.entries(ColorList);

  return (
    <>
      {color_map.map((o: [string, string], index: number) => (
        <div className="color-row" key={index} data-name={o[0]}>
          <span style={{ backgroundColor: o[1] }}></span>
          <span>{o[0]}</span>
        </div>
      ))}
    </>
  );
};

export default LeftColumn;
