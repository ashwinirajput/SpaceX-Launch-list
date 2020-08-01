import React from "react";

const Loader = (props: any) => {
  return <>{props.loader && <div className="loader">Loading...</div>}</>;
};

export default Loader;
