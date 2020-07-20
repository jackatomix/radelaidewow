import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import {
  FaFootballBall,
  FaGolfBall,
  FaPalette,
  FaFilm,
  FaGlassCheers,
  FaUtensils,
  FaPlane,
  FaSuitcase,
  FaMusic,
  FaTheaterMasks,
  FaChild,
  FaBaby,
  FaRunning,
  FaWalking,
  FaPenAlt,
  FaVideo,
} from "react-icons/fa";
import { TiVideoOutline } from "react-icons/ti";

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
              <Link to="/sports">
                <FaFootballBall size={30} />
                <FaGolfBall size={30} />
              </Link>
              <Link to="/art">
                <FaPalette size={30} />
              </Link>
              <Link to="/movies">
                <FaFilm size={30} />
              </Link>
              <Link to="/foodandwine">
                <FaGlassCheers size={30} />
                <FaUtensils size={30} />
              </Link>
              <Link to="/holiday">
                <FaPlane size={30} />
                <FaSuitcase size={30} />
              </Link>
              <Link to="/music">
                <FaMusic size={30} />
              </Link>
              <Link to="/videos">
                <TiVideoOutline size={30} />
              </Link>
              <Link to="/theatre">
                <FaTheaterMasks size={30} />
              </Link>
              <Link to="/kids">
                <FaChild size={30} />
                <FaBaby size={30} />
              </Link>
              <Link to="/specialevents">
                <FaRunning size={30} />
                <FaWalking size={30} />
              </Link>
              <Link to="/vlogsandblogs">
                <FaPenAlt size={30} />
                <FaVideo size={30} />
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "blue" }} to="/">
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
