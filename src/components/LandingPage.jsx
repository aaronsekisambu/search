import React, { PureComponent, Fragment } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { getPlaceholders } from "../redux/action-creators";
import { highLightTextNew } from "../helpers";
import { NavigationBar } from "./NavigationBar";
import { NotFound } from "./NotFound";

class LandingPage extends PureComponent {
  state = {
    search: "",
    loading: true
  };

  componentDidMount() {
    const { getPlaceholders } = this.props;
    getPlaceholders();
  }

  search(e) {
    this.setState({ search: e.target.value });
  }

  searchByUsername(placeHolders) {
    const { search } = this.state;
    const searchData = placeHolders
      .filter(placeHolder => placeHolder.body.includes(search))
      .map((placeHolder, index) => (
        <div className="cards-container rounded-lg shadow-sm" key={index}>
          <div className="single-card-body">
            <div className="names">
              <h3 className="title">{placeHolder.title}</h3>
              <h4
                className="body"
                dangerouslySetInnerHTML={{
                  __html:
                    search === ""
                      ? placeHolder.body
                      : highLightTextNew(placeHolder.body, search)
                }}
              />
            </div>
          </div>
        </div>
      ));
    return searchData;
  }

  render() {
    const {
      placeHolders: { placeHolders }
    } = this.props;
    const override = css`
      ${{
        display: "block;",
        margin: "4em auto;"
      }}
    `;
    if (placeHolders === undefined) {
      return (
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={80}
          color={"#123abc"}
          loading={this.state.loading}
        />
      );
    }

    return (
      <Fragment>
        <main>
          <NavigationBar
            search={e => this.search(e)}
            direction="Use Dummy Data"
          />
          <section className="cards-section-area">
            {this.searchByUsername(placeHolders).length === 0 ? (
              <NotFound />
            ) : (
              this.searchByUsername(placeHolders)
            )}
          </section>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  placeHolders: state.placeHolders
});
export default connect(mapStateToProps, { getPlaceholders })(LandingPage);
