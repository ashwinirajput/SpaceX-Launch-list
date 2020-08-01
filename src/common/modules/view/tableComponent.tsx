import React from "react";
class TableView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  cancelClicked = (index: any) => {
    this.props.cancel({
      bookingNumber: this.props.searchedList.bookingsList[index].bookingNumber
    });
  };
  toggleClick = (index: any) => {
    this.props.noShow({
      bookingNumber: this.props.searchedList.bookingsList[index].bookingNumber
    });
  };
  reAssign = (index: any) => {
    this.props.reAssign(this.props.searchedList.bookingsList[index]);
  };
  getListDetails = () => {
    const { searchedList } = this.props;
    return (
      <>
        {searchedList &&
          searchedList.bookingsList.map((row: any, index: any) => (
            <div className="clist" key={index}>
              <div className="crow">
                <div className="ccount">
                  <b>{index + 1}</b>
                </div>
                <div className="cfifth">
                  <b>Date</b>:<br />
                  <p>{row.appointmentDate}</p>
                </div>
                <div className="cfifth">
                  <b>Service</b>:<br />
                  <p>
                    {row.service2Name
                      ? row.service1Name + "," + row.service2Name
                      : row.service1Name}
                  </p>
                </div>
                <div className="cfifth" style={{ width: "15%" }}>
                  <b>Time Slot</b>:<br />
                  <p>{row.slotClockTime}</p>
                </div>
                <div className="cfifth" style={{ width: "34%" }}>
                  <div style={{ display: "flex" }}>
                    {this.props.noShow && row.noShowButtonVisibility && (
                      <button
                        className={
                          row.show
                            ? "btn btn-success toggle-on ml-button"
                            : "btn btn-danger active toggle-off ml-button"
                        }
                        onClick={() => this.toggleClick(index)}
                      >
                        {row.show ? "show" : " No Show"}
                      </button>
                    )}
                    {this.props.cancel && row.cancelButtonVisibility && (
                      <button
                        type="button"
                        className="btn btn-warning ml-button"
                        onClick={() => this.cancelClicked(index)}
                      >
                        <span
                          className="glyphicon glyphicon-remove"
                          aria-hidden="true"
                        ></span>{" "}
                        Cancel
                      </button>
                    )}
                    {this.props.reAssign && row.reassignButtonVisibility && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.reAssign(index)}
                      >
                        <span
                          className="glyphicon glyphicon-remove"
                          aria-hidden="true"
                        ></span>{" "}
                        Re assign
                      </button>
                    )}
                  </div>
                </div>
                <div className="cclear"></div>
              </div>
              <div className="crow">
                <div className="ccount"></div>
                <div className="cfifth">
                  <b>Staffer</b>:<br />
                  <p>
                    {row.staff2Name
                      ? row.staff1Name + "," + row.staff2Name
                      : row.staff1Name}
                  </p>
                </div>
                <div className="cfifth">
                  <b>Status</b>:<br />
                  <p>{row.status ? row.status : "-"}</p>
                </div>
              </div>
              <div className="crow">
                <div className="ccount"></div>
                <div className="ctwothird">
                  <p style={{ marginLeft: "41px" }}>
                    <b>Customer:</b> &nbsp;{row.bookerName}
                    <br />
                    {row.bookerComments}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };
  render() {
    const { searchedList } = this.props;
    return <>{this.getListDetails()}</>;
  }
}

export default TableView;
