import React from "react";

export default function List(props: any) {
  const getTableBody = () => {
    const { listData } = props;
    return (
      <>
        {listData.map((list: any, index: any) => (
          <div className="row" key={index}>
            <div className="image-wrapper">
              <img
                src={list.links.mission_patch_small}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="title">
              <span className="row_label">
                {list.mission_name}
                <span className="row_value">#{list.flight_number}</span>
              </span>
            </div>
            <div className="other_info">
              <span className="row_label">
                Mission Ids:
                <ul>
                  {" "}
                  {list.mission_id.map((row: any, keyIndex: any) => (
                    <li key={keyIndex}>{row}</li>
                  ))}
                </ul>
              </span>
              <span className="row_label">
                Launch Year:{" "}
                <span className="row_value"> {list.launch_year}</span>
              </span>
              <span className="info">
                <span className="row_label">Successful Launch: </span>
                <span className="row_value">
                  {list.launch_success ? "True" : "False"}
                </span>
              </span>
              <span className="info">
                <span className="row_label">Successful Landing: </span>
                <span className="row_value">
                  {" "}
                  {list.rocket.first_stage &&
                  list.rocket.first_stage.cores &&
                  list.rocket.first_stage.cores[0].land_success
                    ? "True"
                    : "False"}
                </span>
              </span>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div id="list" className="table">
      {getTableBody()}
    </div>
  );
}
