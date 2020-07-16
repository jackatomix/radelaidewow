import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                RADELAIDE.WOW
              </Link>
            }
          >
            <Navigation>
              <Link to="/sports">Sports</Link>
              <Link to="/art">Art</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/foodandwine">Food and Wine</Link>
              <Link to="/holiday">Holiday</Link>
              <Link to="/music">Music</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/theatre">Theatre</Link>
              <Link to="/kids">Kids</Link>
              <Link to="/specialevents">Special Events</Link>
              <Link to="/vlogsandblogs">Vlogs and Blogs</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                RADELAIDE.WOW
              </Link>
            }
          >
            <Navigation>
              <Link to="/sports">Sports</Link>
              <Link to="/art">Art</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/foodandwine">Food and Wine</Link>
              <Link to="/holiday">Holiday</Link>
              <Link to="/music">Music</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/theatre">Theatre</Link>
              <Link to="/kids">Kids</Link>
              <Link to="/specialevents">Special Events</Link>
              <Link to="/vlogsblogs">Vlogs and Blogs</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
