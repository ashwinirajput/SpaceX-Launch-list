import React from "react";
import { connect } from "react-redux";
import { getSpaceList } from "./actions/spaceViewAction";
import FilterComponent from "../../components/filterComponent";
import List from "../../components/List/list";
import NoResultFound from "../../components/List/noResultFound";
import Errorhandler from "../../components/errorHandlerComponent";

interface ISpaceListProps {
  readonly spaceList: any;
  readonly spaceListError: any;
  readonly getSpaceList: (params: any) => void;
}
interface ISpaceListSate {
  readonly launchYear: any;
  readonly successfulLaunch: any;
  readonly successfulLanding: any;
  readonly loader: boolean;
}
class SpaceViewContainer extends React.Component<
  ISpaceListProps,
  ISpaceListSate
> {
  constructor(props: any) {
    super(props);
    this.state = {
      launchYear: [
        { label: 2006, selected: false },
        { label: 2007, selected: false },
        { label: 2008, selected: false },
        { label: 2009, selected: false },
        { label: 2010, selected: false },
        { label: 2011, selected: false },
        { label: 2012, selected: false },
        { label: 2013, selected: false },
        { label: 2014, selected: false },
        { label: 2015, selected: false },
        { label: 2016, selected: false },
        { label: 2017, selected: false },
        { label: 2018, selected: false },
        { label: 2019, selected: false },
        { label: 2020, selected: false },
      ],
      successfulLaunch: [
        { label: "true", selected: false },
        { label: "false", selected: false },
      ],
      successfulLanding: [
        { label: "true", selected: false },
        { label: "false", selected: false },
      ],
      loader: true,
    };
  }

  componentDidMount() {
    this.props.getSpaceList({ limit: 10 });
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.spaceList !== prevProps.spaceList) {
      this.setState({ loader: false });
    }
  }

  filterSelectedOne = (data: any) => {
    return data.filter((row: any) => !!row.selected);
  };

  /**
   * @method applyFiler
   * @description apply filter on click on items and reset on outer click
   */
  applyFilter = (event: any, name: any) => {
    const stateData: any = this.state;
    const data = stateData[name].map((row: any) => {
      if (row.label == event.target.id) {
        row.selected = true;
      } else {
        row.selected = false;
      }
      return row;
    });
    const nameData: any = {
      [name]: data,
    };
    this.setState({ ...nameData }, () => {
      this.fetchData(10);
    });

    event.preventDefault();
  };

  /**
   * @method fetchData
   * @description fetch data from api when filter is click or more buttton is clicked
   */
  fetchData = (limit: any) => {
    const request: any = { limit };
    if (this.filterSelectedOne(this.state.launchYear).length > 0) {
      request.launch_year = this.filterSelectedOne(
        this.state.launchYear
      )[0].label;
    }
    if (this.filterSelectedOne(this.state.successfulLaunch).length > 0) {
      request.launch_success = this.filterSelectedOne(
        this.state.successfulLaunch
      )[0].label;
    }
    if (this.filterSelectedOne(this.state.successfulLanding).length > 0) {
      request.land_success = this.filterSelectedOne(
        this.state.successfulLanding
      )[0].label;
    }
    this.setState({ loader: true });
    this.props.getSpaceList(request);
  };

  /**
   * @method loadMore
   * @description load more data on click
   */
  loadMore = (event: any) => {
    this.fetchData(this.props.spaceList.length + 10);
    event.preventDefault();
  };

  render() {
    const { spaceListError, spaceList } = this.props;
    return (
      <>
        <section className="section-container">
          <div className="section-title">
            <h2>SpaceX Launch Programs</h2>
            {this.state.loader && <div className="loader" />}
          </div>
          <div
            className="section-body"
            style={{ pointerEvents: this.state.loader ? "none" : "auto" }}
          >
            <FilterComponent
              launchYear={this.state.launchYear}
              successfulLaunch={this.state.successfulLaunch}
              successfulLanding={this.state.successfulLanding}
              selectedFilter={this.applyFilter}
            />
            <List
              listData={spaceList}
              loadMore={this.loadMore}
              scrollable={true}
            />
            {!spaceListError && !this.state.loader && (
              <NoResultFound list={spaceList} />
            )}
            {spaceListError && <Errorhandler error={spaceListError} />}
          </div>
          {spaceList.length >= 10 && !this.state.loader ? (
            <div className="load">
              <button className="load-more" onClick={this.loadMore}>
                Load More
              </button>
            </div>
          ) : null}
          {spaceList.length >= 10 && this.state.loader && (
            <div className="load">
              <p className="load-more">Loading...</p>
            </div>
          )}
        </section>
      </>
    );
  }
}
export const mapStateToProps = (state: any) => ({
  spaceList: state.space && state.space.spaceList,
  spaceListError: state.space && state.space.spaceListError,
});
export const mapDispatchToProps = (dispatch: any) => ({
  getSpaceList: (params: any) => dispatch(getSpaceList(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SpaceViewContainer);
