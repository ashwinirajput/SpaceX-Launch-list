import React from "react";
const NoResultFound = (props: any) => {
  return (
    <>
      {props.list && props.list.length === 0 && (
        <p className="no-record">No Result Found!</p>
      )}
    </>
  );
};
export default NoResultFound;
