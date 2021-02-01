import React from "react";


const Header = React.lazy(() => import("./Header"));

const Layout = ({
  className,
  children
}) => {
  return (
    <div>
      <Header /><br/>
      <div className="jumbotron" style={{minHeight:'90vh'}}>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
