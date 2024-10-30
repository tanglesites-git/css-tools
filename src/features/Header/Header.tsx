import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="title">Color Spaces</h1>
        <div className="generate-container">
          <button>Generate</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
