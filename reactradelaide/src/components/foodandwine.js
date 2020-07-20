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

class FoodandWine extends Component {
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
                  "url(https://bracegirdles.com.au/wp-content/uploads/2016/07/footer_logo.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Speciality cafe, for the lovers of chocolate.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://bracegirdles.com.au/"
              >
                Bracegirdles
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
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCJ__ju8rHLIGZz05dwraU1neZXzlbH6V6zg&usqp=CAU) center / cover",
              }}
            ></CardTitle>
            <CardText>Fine dinning restaurant.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.lenzerheide.com.au/"
              >
                Lenzerheide
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
                  "url(https://cdn.businesstraveller.com/wp-content/uploads/2018/11/The-dArenberg-Cube.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Where art and wine mix.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.darenberg.com.au/darenberg-cube/"
              >
                D'Arenberg Cube
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://s3.amazonaws.com/listing-admin/logos/51848d5e7d17190002002259/original/chefs_logo.png?1427356074) center / cover",
              }}
            ></CardTitle>
            <CardText>Indian restaurant.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://chefsoftandoori.com.au/"
              >
                Chefs Of Tandoori
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    if (this.state.activeTab === 4) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.deputy.com/dptycms/wp-content/uploads/2017/07/san-churro-logo500x300.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Spanish Chocolate Cafe.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="https://www.sanchurro.com/">
                San Churro
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
                  "url(https://www.hiddencitysecrets.com.au/wp-content/uploads/2016/11/Osteria-Oggi-Restaurant-CBD-Restaurants-Adelaide-Italian-Dining-Top-Best-Good-001.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>10 of the best Italian Restaurants in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.thefork.com.au/restaurants/adelaide-sa-c5255/italian-t436"
              >
                Italian Restaurants
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 6) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://adelady.com.au/wp-content/uploads/2018/05/IMG_5237-1024x768.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>A beautiful winery, at Victor Harbor.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://mtjaggedwines.com.au/"
              >
                Mt Jaggered Winery
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
          <Tab>Bracegirdles</Tab>
          <Tab>Lenzerheide</Tab>
          <Tab>D'Arenberg Cube</Tab>
          <Tab>Chefs Of Tandoori</Tab>
          <Tab>San Churro</Tab>
          <Tab>Italian Restaurants</Tab>
          <Tab>Mt Jaggered Winery</Tab>
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

export default FoodandWine;
