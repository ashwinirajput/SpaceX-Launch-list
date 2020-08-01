import React from "react";

const filterData = (data: any, selectedFilter: any, name: any) => {
  return (
    <ul className="launch-container" onClick={(e) => selectedFilter(e, name)}>
      {data.map((row: any, index: any) => (
        <li className={row.selected ? "selected launch" : "launch"} key={index}>
          <span className="c-primary" id={row.label}>
            {row.label}
          </span>
        </li>
      ))}
    </ul>
  );
};
const FilterComponent = (props: any) => {
  const { addressInfo } = props;
  return (
    <div className="filter">
      <h3 className="filter-widget__title">Filters</h3>
      <div className="filter-widget">
        <p className="filter-title">Launch Year</p>
        <hr />
        {filterData(props.launchYear, props.selectedFilter, "launchYear")}
      </div>
      <div className="filter-widget">
        <p className="filter-title">SuccessfulLaunch</p>
        <hr />
        {filterData(
          props.successfulLaunch,
          props.selectedFilter,
          "successfulLaunch"
        )}
      </div>
      <div className="filter-widget">
        <p className="filter-title">SuccessfulLanding</p>
        <hr />
        {filterData(
          props.successfulLanding,
          props.selectedFilter,
          "successfulLanding"
        )}
      </div>
    </div>
  );
};
export default FilterComponent;
