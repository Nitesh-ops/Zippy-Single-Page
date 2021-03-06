import React, { Component } from "react";

class UserCards extends Component {
  state = {
    data: [],
    per: 6,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="container" id="team">
        <br /><br />
        <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Zippy Team</h2>
        <br />
        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div>
                <div>
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default UserCards;
