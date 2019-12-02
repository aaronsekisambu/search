import React, { Component, Fragment } from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import { highLightTextNew } from "../helpers";
import { NavigationBar } from "./NavigationBar";
import { NotFound } from "./NotFound";

const contacts = [
  {
    id: "1",
    name: "Aaron Sekisambu",
    handle: "aaronsekisambu",
    avatarURL: "https://i.postimg.cc/W1nxGR6D/33352484.jpg"
  },
  {
    id: "2",
    name: "Schema Eric",
    handle: "scheric",
    avatarURL: "https://i.postimg.cc/3R7yPv0f/Vr-Ik8ck-400x400.jpg"
  },
  {
    id: "3",
    name: "Nantongo Deborah Sandra",
    handle: "dnats",
    avatarURL: "https://i.postimg.cc/PJ1dh3Gm/images.jpg"
  }
];

class DummyData extends Component {
  state = {
    search: "",
    loading: true
  };

  search(e) {
    this.setState({ search: e.target.value });
  }

  searchByUsername(contacts) {
    const { search } = this.state;
    const searchData = contacts
      .filter(contact => contact.name.includes(search))
      .map(co => {
        const override = css`
          ${{
            display: "block;",
            margin: "4em auto;"
          }}
        `;
        if (co.avatarURL === "") {
          return (
            <BarLoader
              key={co.id}
              css={override}
              sizeUnit={"px"}
              size={20}
              width={50}
              color={"#123abc"}
              loading={this.state.loading}
            />
          );
        }
        return (
          <div className="cards-container rounded-lg shadow-sm" key={co.id}>
            <div className="single-card-body">
              <div className="avatar">
                <img src={co.avatarURL} alt="" />
              </div>
              <div className="names">
                <h3
                  className="real-name"
                  dangerouslySetInnerHTML={{
                    __html:
                      search === ""
                        ? co.name
                        : highLightTextNew(co.name, search)
                  }}
                />
                <h4 className="username">{co.handle}</h4>
              </div>
            </div>
          </div>
        );
      });
    return searchData;
  }

  render() {
    return (
      <Fragment>
        <main>
          <NavigationBar search={e => this.search(e)} />
          <section className="cards-section-area">
            {this.searchByUsername(contacts).length === 0 ? (
              <NotFound />
            ) : (
              this.searchByUsername(contacts)
            )}
          </section>
        </main>
      </Fragment>
    );
  }
}

export default DummyData;
