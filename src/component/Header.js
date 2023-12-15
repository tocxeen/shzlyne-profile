const Header = (props) => {
  return (
    <>
      <h1 className="main-header">{props.header}</h1>
      <h1 className="hidden-header d-sm-none d-md-block d-xl-block">
        {props.header}
      </h1>

      <p className="header-text">{props.text}</p>
    </>
  );
};

export default Header;
