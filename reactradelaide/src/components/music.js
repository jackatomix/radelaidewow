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

class Music extends Component {
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
                  "url(https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_900,h_598/https://australianentertainmenttalentagency.com.au/wp-content/uploads/rock-band-adeliade-for-hire.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              A look at where and when concerts are being held.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.songkick.com/metro-areas/26774-australia-adelaide"
              >
                Music events in Adelaide
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
                  "url(https://indaily.com.au/wp-content/uploads/2016/03/Womadelaide-Arrested-Development-2015-Tony-Lewis-850x455.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>When WOMADelaide starts and whats happening.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.womadelaide.com.au/"
              >
                WOMADelaide
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
                  "url(https://superloopadl500.com.au/file/resize/c833x400/10601_2020_concert_crowd_unwashed_2000x1333.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Local bands and where they are playing.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="http://www.musicsa.com.au/gigs/"
              >
                Music SA
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
                  "url(https://media-exp1.licdn.com/dms/image/C4E1BAQH92f60W4EhCw/company-background_10000/0?e=2159024400&v=beta&t=8QbmFVlgmxdsT_oKXqdVCBoY_nOOdBetDIW5Wo48wMk) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local music business that has all you music making needs.
            </CardText>
            <CardActions border>
              <Button colored target="_blank" href="https://derringers.com.au/">
                Derringers
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
                  "url(https://www.reedmusic.com/wp-content/uploads/winston_music.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>Local business for classic musical instruments.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.winstonmusic.com.au/?gclid=EAIaIQobChMImIOr5tng6gIVmn8rCh1DowKJEAAYASAAEgLHufD_BwE"
              >
                Winston Music
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
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="">
                Music
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
                background: "url() center / cover",
              }}
            ></CardTitle>
            <CardText>A list of skate parks and any competitions.</CardText>
            <CardActions border>
              <Button colored target="_blank" href="">
                Music
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
          <Tab>Song Kick</Tab>
          <Tab>Womadelaide</Tab>
          <Tab>Music SA</Tab>
          <Tab>Derringers</Tab>
          <Tab>Winston Music</Tab>
          <Tab></Tab>
          <Tab></Tab>
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

export default Music;
