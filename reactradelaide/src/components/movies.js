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

class Movies extends Component {
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
                  "url(https://photos.cinematreasures.org/production/photos/171492/1466268148/large.jpg?1466268148) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?gs_ssp=eJwFwcsNgCAMANB4NU7giYtni0pFRnCLlqAhEfBLGN_36qbfe3nmIfM1M1Smg4LEckCrAElpdtJAIbVsCLypRcM0Mq5tSNm7R9ArYqL7-OJOwvroAv3F3RkP&q=movies+at+noarlunga+cinema&rlz=1C1CHBF_enAU877AU877&oq=movies+at+n&aqs=chrome.1.69i59j46j0l2j46l3.9917j1j7&sourceid=chrome&ie=UTF-8"
              >
                Noarlunga
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
                  "url(https://res.cloudinary.com/scentre-group-au/image/fetch/c_pad,b_auto,w_1152,h_1152,f_auto/https://cam.scentregroup.io/m/6212e0a45ff49575) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsKzMqTk4uMWC0UjWoMEtMMkhJNEtNSU4xSDRLSrMyqEgxSzWyMDIzNjAxTzMzSUv1EsjNL8tMLVZILFHITSzKzM8DAPQaFfY&q=movies+at+marion&rlz=1C1CHBF_enAU877AU877&oq=movies+at+&aqs=chrome.2.69i59l2j46l2j0j69i60l3.7221j0j7&sourceid=chrome&ie=UTF-8"
              >
                Marion
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
                  "url(https://media-cdn.tripadvisor.com/media/photo-s/0a/32/fa/88/reading-cinemas.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?rlz=1C1CHBF_enAU877AU877&ei=Hl0SX4neG4iurQHoyJjYBA&q=movies+at+west+lakes&gs_ssp=eJzj4tVP1zc0TDJLzygryDEzYLRSNagwS0wySDYxTDQ1SjY1SbRIszKoMEo2M7FMM09NNTZJTDS0TPESyc0vy0wtVkgsUShPLS5RyEnMTi0GAFFLF1s&oq=movies+at+wes&gs_lcp=CgZwc3ktYWIQAxgAMgsILhDHARCvARCTAjICCAAyAggAMggILhDHARCvATICCAAyCAguEMcBEK8BMgIIADIICC4QxwEQrwEyCAguEMcBEK8BMgIIADoHCAAQRxCwAzoGCAAQBxAeOgQIABAeOgYIABAIEB46DgguEMcBEK8BEJECEJMCOgUIABCRAlDemAFYpa0BYIPGAWgAcAB4AIAB8gGIAaQQkgEFMC40LjaYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab"
              >
                West Lakes
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
                  "url(https://i.ytimg.com/vi/EW0dh6rRzEY/maxresdefault.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?rlz=1C1CHBF_enAU877AU877&ei=Hl0SX4neG4iurQHoyJjYBA&q=movies+at+adelaide&oq=movies+at+ade&gs_lcp=CgZwc3ktYWIQAxgBMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BwgAEEcQsAM6DQguEMcBEK8BEEMQkwI6CgguEMcBEK8BEEM6CAguEMcBEK8BOgIIADoLCC4QxwEQrwEQkwJQ4C5Y4Dpg_1VoAHAAeACAAfgBiAH8B5IBBTAuMi4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab"
              >
                City
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.wallis.com.au/cinemas/piccadilly"
              >
                North Adelaide
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    if (this.state.activeTab === 5) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.australia247.info/assets/uploads/b5fdfd406977a6f5f5a0a85608918072_-south-australia-city-of-mitcham-torrens-park-mitcham-cinemas-08-8305-4444html.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.wallis.com.au/cinemas/mitcham"
              >
                Mitcham
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
                  "url(https://www.hiddencitysecrets.com.au/wp-content/uploads/2016/09/Capri-Theatre-cinema-venues-adelaide-movies-live-music-goodwood-entertainment-to-do-014.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://capri.org.au/movies/"
              >
                Goodwood
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 7) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.abc.net.au/reslib/200901/r334849_1515441.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.eventcinemas.com.au/Cinema/Glenelg"
              >
                Glenelg
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 8) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.newsapi.com.au/image/v1/6ff5a3b4cea143156c833cb24709d8a8?width=1024) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.hoyts.com.au/cinemas/tea-tree-plaza?selectedDate=2020-07-18&view=list"
              >
                Tea Tree Plaza
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 9) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://photos.cinematreasures.org/production/photos/191809/1479053873/large.jpg?1479053873) center / cover",
              }}
            ></CardTitle>
            <CardText>What is showing and time table.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.hoyts.com.au/cinemas/salisbury?selectedDate=2020-07-18&view=list"
              >
                Salisbury
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
          <Tab>Noarlunga</Tab>
          <Tab>Marion</Tab>
          <Tab>West Lakes</Tab>
          <Tab>City</Tab>
          <Tab>North Adelaide</Tab>
          <Tab>Mitcham</Tab>
          <Tab>Goodwood</Tab>
          <Tab>Glenelg</Tab>
          <Tab>Tea Tree Plaza</Tab>
          <Tab>Salisbury</Tab>
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

export default Movies;
