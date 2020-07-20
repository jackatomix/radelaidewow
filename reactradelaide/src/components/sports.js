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

class Sports extends Component {
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
                  "url(https://pbs.twimg.com/profile_images/1125926844807565313/uKISHFT0_400x400.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Local football results and interstate games.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://sanfl.com.au/communityfootball/"
              >
                FootBall
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
                  "url(https://content.api.news/v3/images/bin/d06453bdeaf2967c10432a4ec103d352?width=650) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local soccer results, interstate games and overseas updates.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.adelaidenow.com.au/sport/football/local-soccer-sa"
              >
                Soccer
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
                  "url(https://slsa-collections.s3.amazonaws.com/e2/b7/e323-0dfd-5f18-9261-edebf3296360.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local club results, interstate competitions and overseas update of
              turnaments.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?q=golf+adelaide&rlz=1C1CHBF_enAU877AU877&oq=golf+ade&aqs=chrome.1.69i57j0l6j46.17661j0j7&sourceid=chrome&ie=UTF-8"
              >
                Golf
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
                  "url(https://superloopadl500.com.au/files/11157_500club_promo_home.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Local racing events at Mallala and The Bend as well as interstate
              and overseas racing.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.thebend.com.au/hot-laps?gclid=EAIaIQobChMIs5GthNnV6gIVDSUrCh0WAwbgEAAYASAAEgJmEPD_BwE"
              >
                Motor Racing
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
                  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBARERIWFRMQDw8SEBAQEA8VGBMPFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGysiHyEvNS0rKy0rLTIrLSsrLSstLS0tKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMP/AABEIAKoAqgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEUQAAIBAgIGBgYGBwcFAAAAAAECAAMRBBIFBiEiMUETMlFSYXEHFEKBkaEjgpKxssEzNWJydMLhFTSiw9Hw8SQlU3Pi/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQUGAv/EAC0RAAICAgAFAgUDBQAAAAAAAAABAgMEEQUSITFBUWETFCIjgTKh0QYVM3Gx/9oADAMBAAIRAxEAPwDuMREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAPHugcJixFdUUu7AKBckmwA8Zz3WLXV6hanhtxOBqkbzfuLyHjx8pNTRO16iirk5VdC3J/guuktN4fD/paqqeS3ux+oNshKmvuEGzLUPiEW3zM5wiPUewDO7ngAzMx/OT+F1Kxri5CJfk7bfgAZsPkqK19yXU1P9wybX9qHQvGi9aMJiDlWpZjwRxkJ8r7D7pOgzj+k9WMXQBZ0zKNrNSOYDzXiJM6n6zlGWhiGujWFKqx2qeSO3Mdh5fdBdiR5eap7RZoz5qahdHTfk6VE+CfZQNuIiIAiIgCIiAIiIAiIgCIiAebzWxeKSijVHYKqi7MeQnurWVFLMQAoLMSbAAcTOU606wNjHspIoodxeGc98/l2SxjY0rpa8eSlmZkceG33fYazaxVMY9tq0VO7T5t+2/j4cpp6F0RVxdQJTGwbXqEbqD+Y+Ex6K0fUxNUUqfE7WYjYqc2M61ofRlPC0lp0xsG1mPFjzY+M2eRkQxYKuHc0uLjWZljss7GHQmgaOEW1NdpG87bWbzbs8JLkRmHbPOcds0U7lJ7lLqdJXVGEeWK0gbbJzvXjVsUwcTRXdJ+nRRsF/bHh2/GdEzCY61FXVlYXDAgg8CDxEmoyOSScWQ5OMrYNP8ABWtRtM+sUeic3qUbAk8Xp+w/5Hy8Za5ynD5tG6RCnYgfKST1qD8G92z3oZ1ZZLl1pS5o9n1RDg3OUXCXePQ9xESsXxERAEREAREQD5Pk+zXxGJRBdiB5mRzsjBc0npGUm3pGaDIPE6bHCmv1m2D4Sma4aw1QvQo5NSqN4LsFNO9s5mUI8SrstVdS5n7C6Lqrc59EfdetZ1qscPTf6NG+lKm+dx7PkPmfKUz1zMQqISWIVQeZaYaWAbwHhxM6B6PtV6Y/6qqt+Iohu7zfL8hN/KzIpp+lKK9+5y8I/N5HV7/g2tX6VTDUsi26R96qypclu75D/WSvRYp+/wC9soliVUUcgPCwE8VMdSUEl1AHEl1sJzNmHK2Tlda237nXUyjVFQrguhBroeseJA82Yz3/AGHU7yn3Gauk9fsFSuEqdKw2WpLmF/3+Eq+N9I9dr9GqUxyLXc/kJ7jwrG8y3/tl+qrKt6pJL36Fy/sOoODj/EJ89UxKcHv5O35znf8Ab+kcQd2rWa/KlTyr8h+c2E0RpOptzVNvfxeU/Zzz0uH4qelPT9mWHiSj/ksiSGvtOsaaVmS/RnJUOW10bq7w2bD+KWfU3WCniMJRzGzqvRtm5smzj4ix98pdfVbSrI6XYh1sR60xB7OsZAat1tIUjVphXIG8y5FqAMu626v1ZsVTd8vqufNy+voaaeFVDMXLNamvHqd7Bn2cx0Nr2aTBMQhsNhK5iV+odol/0fpCliKYqUnDKeDA/wC9sjpscuk1polycOyh/Uunr4JGIiWCqIieCbe7nMN6B9vMGIxKUxdmt5yKx2mgNlP7R6o8u2QGIxgY3ZixPPjNJmcXjW+StbkWqsZvrN6RM4vTbNsTdHaRc/Z5SOSm9Vtl2J4m9/i3KYUzHjsHZxP9Jn6RrZb7o9m9h75z9uRbfP7rbXoieVtVK+hdRpFqOEotVruGIFloq3Xf2VzcZzfEY7pHZ26ztmawsP3fKbOn9Jes1bJ+jp3VAODH2qnv+60j1wxNh2mwAFyZ2XCMeymrdVaTfnXU43imdLJs5N9Eb+h8KcTVVOCDeqMBwRfZ8zwnQDimVTv5URQLBsqog4SCw+JwujKPRlemxTgNVpht1D7KueAt2bTxlc0ppWtiDeqwCg3WkgyonkvteZkeVjZWXZ9dmoo6fgnAp/DU5LW/LJvSetSi4oJ0p/8AJUzBB5c3+UreJq4nFMFdmqE9WiguPcg2fGWDV/VCtid+pelSO27DfYeCngPE/CdF0RoTD4VMtJAO8xF2Y94niZ7q4dTV7v1N3bdi4n01rmkc90P6Oq9Terv0S8lUKze9uA+ctuB1HwdHqi7d+oFdvnLVEknjVSWmjU3Z11j6vS9ERB0IO+1hy3bTE+gex/tLJ6JXfDMd+Cs5NlbGjK6bUP2WYfIylUcS+D0tvLseobg7Lit/9fhnV5zz0jU+jr4euOOUg7Nl6bB1+9pNh4LhJxrm1tfgoZz0oz9GWPE0sFjBkq0hc7AGFm+q4/Iz1q9q5RwRq9EzkVWDZXbMFt3f6+EzvoynVUOu7nUMLbQb7erNZMRWw+xwWTgG428jy8jKvxrqZauW0vKNkrpOHKpPT8FinyYMLiVqAMp4/H3zYl+MlNbTIjWxuKWkhdjYAbe0+A8ZTtI6aq1iR1V5Abfj2ywayYR6lECmLlXDFRxYbdnzlbw+iq7mwpso5lxlA+M0/EZ3SlyRT17FinliuZ9zUVWc24+Z4Tfw+GsbAZmPYLn3SdwegFUDMb9oXYD5niZL0cOiCyqAOwCVKuE22frel+4su5uxX8Pomo1s1lHjtPwkHrniKeHpigm2rVXfYnq0/LgCeHleXLSuOWhSeq3BFvbmTyUeJOycY0vpTMz16x3qjMco4nsQeAFhOl4TwamE+drevU0vEsqUYquH6meGIAJJAAFyTsAmnhtIM7k0rqqHr8GZ/Du/fIXF4t67Acr2RBwDfzGWPQui6lQpQormci7E7FA9p3bkP+BOgyblCPLEtf09wWDs+Pkdo9fYYei9RlRFLu53VAuWPtf1JnR9V9TEo5a2Is9UbUXitP8Ad7W8fhJXVnVulg12b1RgM9VhtbwHYPCQ2t2tz0Kvq1Bd+9LPWbKQqu3VReZtzPDxmmnZvsdDn8UlZ9urpH/pegJ9nhWB4H4GY2xKA5S637pdb/ZkRpjPETBUxKL1nUeDMogGeJjp1AwupBHaDcQ7gC5NgOZNhAPUqXpHw2bCZ7fo6iNfwbcP4pZqeKpsbK6k9ispM1dN4FcRQq0mNg65b91uIb42numfJNN+pBkV89bivJrao4jpMFhz2Uwp803PykuyAix58QZF6t6N9Ww6Uc2cqWLMBYXLZtgkg2JQHKXUHul1B+E82qMpP0PVKkoRUu+jxhcElPNkFsxBIvsm3ESOEIxWkiU+xET1oHyfJ9lZ191gOj8FUqrtqMVpUFI2dM+bKT4AAn6szGLckkYb0tlM9J2sqCp0Cm/RG7KD1q3j4D7yZzKvWZ2LObk/AfsjuieHcsSzMWZjmdmNyzd4zPgMHVxFWnRormq1Wyoo/wATHugDaTN9CKqgl4RSjSudyfVsldVNEVMTWAprdjcKT1UHN38B8zsncdXdA08HSCLtY5TUqMN537T+Q5TDqpq3TwFBaa2LkA1KltrP/oOQk+bTU33c8n6G1le1Wqo9l+7Mk4hrBooYXFPQDlhmRszBQfpWzdXwvO3zkGv5/wC5v4DDEnsG7KzICY08jaJwSYWjVYvXrVHNayqyU9me2XgeqL+Jmrg9Q1qYL1hnbp3pdKikKV6twpvtJOzbfnN30q0CfVao6v0iX5BmysvxsfhPOgNTsJisPSrCvWuyDpFWou5U9pMttlmvAMep2m6lTBY2k7sWo4Z6lJyzZhTam2zN4EbPOQep2gKePrVErMwyUlfMpUsxZsu1jeXKnqvQwdDG1KVR3LYStTYOyELlVm5DrSD9FH94r/w9P8cAjcC1TR2khSp1CVXEUqTDgtSk+XivC4z8e1Zl9I7k49lJJUUaOVSzFRmzXsvCeNYv1u/8Xhv8qe/SN+sW/wDVh/5pgGXWzVCngaVOtSqMfpEQhgoN2vZkZLZeE3q+kKmI0E7VTmZKwplm4sErrZj42tJn0n/3Ff4mj+FpXcJ+oK/8V/mpMg86sYx8PozSNWlscVaaq3cZlRc3uzXmjqrq5Sx5r9JWK1EIyiysz3X9K2baRfZLB6NqVN8NjVqgGm1QBw3AoaS3vIfW/VtMAaVWjVaz1GVFL2dDlvmRxtI/pMA6XofADDUKVEMW6NFXMxuWPNpISvakaSqYnB06lU3cM6M1rZ8jFc0sM9AREQD5K1rxq0NJYYUQ/RulRalOplzAOAVsy81IZhLLEzGTi00GtnFKfokx5azV8OFHtjpmJ+pYffOg6oal4fRykrepWcWeu43iO4i+wnh8SZaoks8iya030PKgkfYiJCehKnrVqeuMdaqv0dQLkY5cwdOWZe0XO2WyIBWNGaqJTwbYSs5rB3dybMpUnhk2m1rbJX6no3cMejxRCntRg3vykBp0eJjQKtoXVUYXDYmgKzN6yr5mKKAjNTyZlX4cTynnVXVH1CpUqdN0mekqW6PLazXzcTLXEyCmaR1JNbGHFdPa9WlU6Por9TLu5r/sz7rDqT63iTX6fJdKa5OjzdT9q8uUTGgQmtGg/XaAo9J0dqiPmyZurfdtcdsjaWp+XAPgunO/W6Tpej4b6tbLm8O2W2JkFNwepOTCYjCnEFhiHRy4pqLBbbpUk5gcsi6Xo2bMM+KJUbN2nvZe6GYkD4To0TGgaejsDTw9JKNIWSmuVRe/+zNyImQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB/9k=) center / cover",
              }}
            ></CardTitle>
            <CardText>Local results, interstate and overseas games.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.tennis.com.au/sa/players"
              >
                Tennis
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
                  "url(https://www.weekendnotes.com/im/007/08/adrenaline-adelaide-south-australia-thrill-seeking71.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              A list of practice days at Mallala and The Bend.
            </CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.adrenaline.com.au/drifting/?gclid=EAIaIQobChMIosTUyNfV6gIV1gorCh233Af7EAAYASAAEgJo2PD_BwE"
              >
                Drifting
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
                  "url(https://live.staticflickr.com/3769/11864624264_0c7eedd07b_b.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>A list of skate parks and any competitions.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.google.com/search?rlz=1C1CHBF_enAU877AU877&q=skate+parks+in+adelaide&npsic=0&rflfq=1&rlha=0&rllag=-34861011,138548426,9682&tbm=lcl&ved=2ahUKEwia6-Ho1NXqAhWWdn0KHdODBZkQtgN6BAgLEAQ&rldoc=1#rlfi=hd:;si:;mv:[[-34.6956425,138.71488259999998],[-35.0460255,138.4659421]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1"
              >
                Skateboarding
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
          <Tab>FootBall</Tab>
          <Tab>Soccer</Tab>
          <Tab>Golf</Tab>
          <Tab>Motor Racing</Tab>
          <Tab>Tennis</Tab>
          <Tab>Drifting</Tab>
          <Tab>Skateboarding</Tab>
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

export default Sports;
