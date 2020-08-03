import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";

class Specialevents extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://city-bay.org.au/wp-content/themes/citybay/dist/images/logo/city-bay-logo-main.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="https://city-bay.org.au/">
                City to Bay fun run
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://playandgo.com.au/wp-content/uploads/2020/03/mothers-day-classic-virtual-.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.mothersdayclassic.com.au/"
              >
                Mothers Day Classic fun run
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.rspcawa.asn.au/perch/resources/mpw2-235x345-ck.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.millionpawswalk.com.au/"
              >
                Million Paws Walk
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    if (this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://adelaidefringe.com.au/assets/share-off-season.png?v=2019-08-19) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://adelaidefringe.com.au/"
              >
                Adelaide Fringe
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.carnifest.com/wp-content/uploads/2018/10/WOMADelaide.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.womadelaide.com.au/"
              >
                WOMAdelaide
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.adelaidecabaretfestival.com.au/media/10742/no-dates-cabaret-festival-gold-900-compact.jpg?anchor=center&mode=crop&width=900&height=470&rnd=132167476710000000) center / cover",
              }}
            ></CardTitle>
            <CardText>Special Events being held in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.adelaidecabaretfestival.com.au/"
              >
                Adelaide Cabaret Festival
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>City to Bay fun run</Tab>
          <Tab>Mothers Day Classic fun run</Tab>
          <Tab>Million Paws Walk</Tab>
          <Tab>Adelaide Fringe</Tab>
          <Tab> WOMAdelaide</Tab>
          <Tab>Adelaide Cabaret Festival</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Specialevents;
