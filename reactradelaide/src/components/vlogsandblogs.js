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

class Vlogsandblogs extends Component {
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="http://www.thegraciouslife.com.au/tag/adelaide-vlogger/"
              >
                The Gracious Life
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
                  "url(https://glamadelaide-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/glam-adelaide-banner.png) center / cover",
              }}
            ></CardTitle>
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://glamadelaide.com.au/adelaide-is-the-new-blog/"
              >
                Glam Adelaide
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=vAN9kpptFSs"
              >
                DAY IN THE LIFE IN ADELAIDE AUSTRALIA | VLOG
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
                  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUVFRUVFRUVGBUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygvLisBCgoKDg0OGhAQGi0fHyYtLS0vLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0vLf/AABEIAKkBKwMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAYFB//EAEUQAAECAwUFBAYGCQMFAQAAAAEAAgMRYQQSIVGhBRNBkfAGMXGBFCIyk7HRUlNUdNLxFiMzQkNigrPCJHLDRJKissEV/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAEDAgQFBv/EADARAAICAQIDBgUDBQAAAAAAAAABAhEDEiEEMUETIlFhgZEUMlJxsSOh8BVCwdHh/9oADAMBAAIRAxEAPwD4tKqJIknJbEFJOSckAK0BEIkqkEEK0BJgVTupgBWgK6mQnJO6Kq0BXaouDNVIIaArQJDVVwZ6KroqkQFaIK5XRICqyBoqi4Kq0DHIZ6JyqqDQncClAV0Z6JXBnorLR0Uw0S4811QMV2qdyqyBgSLVKBF2uilZQ0ILBXmmkGKVUSV3UXQpQILaouqiE5CqUCA2qV2qstCUgpQIcKou1V3RVIgVUopNyqkhUAggKUCJVRKqbgEXVKBICJVTkEpKAAglVinMqgkFOfgqBKYJVoEpzFFV49BGNVaApiiYlRVeKYcarqiEzFEEiivGqeNVaBjn4J3hkFkmaoBNUoEAiisSoqBNVnhsJz5LtROZSowNaMgrDKLotm9no8Zl9kMls5XnFjASO8AvIn5Lc/RO0/Vt97A/GtlhZ45cZjTq0clcoEiyi679E7T9W33sD8aY7J2n6tvvYP41exZFxuP6l7nI7ugRcoF2A7KWn6DfewfxpDsnafoN97B/GnYs6+MxfUvdHHhlEFtAuv8A0UtP0G+9gfjSd2TtP1bfewPxp2LOXxuP6l7nIllApkMgux/RW1fVt95A/GtPaPZ20Qm7x8M3ZgFzXMeAT3XrhN2dUeFiPGY26tHMmWQUEii24rSDxWuXGqwaPZGVkTFEAiiouNUTORUOzET4JTFFmvGqRJqpQMJPgnMUWSZqjGvJSgYsKJcllE6pXjVSgYuSJiiyGdVJJUaBjRyVzKMaqUUlO6UXaolVQDulMNKA2qoMqF1RAEM9FBaeiiVVV2q6oCDTTmmGmnNFyuiA2qtAYBnLBUWGnNSGVTIroqB3DTmkJpltdE2srorQG1hpzW7ZWLTaFvWNtVpjW558z7p0u3v2VjHAWYEDhMxYszLMrnnOA4Be92hH6qyY/wDSt/uxVzEQVW2R0eLhIKSNlrgeAW9YbEYrrrGgmUz3AADvc4nACpXmQG1XSWtm7AszcJXXRz9OIRMMP8rAZSzmV5pZGfo+E4HHp1z5Ij0azMwc90Q8dy0XfJ7yJ8ktxZXey90M8N60Fvm5hw5LorJ2bhmFDdEtLIT4wc6ExzHXS1ri2b4owZMgywK8vbGwYsB12I0tJxHFrhm1wwcKhZLKzftMF6dCr1/2eLbrC6GZOaMRNpBBa4cHNcMCFoPcMgvd2ey/OyuPqvnuif4caU2y/ld7JFQeC5+Myui1jkZjxfA49OuHIyMAyGi6Ds42TbUOBscaY4EtuEEihXLsFQum7Nd1p+5x/wDBenG7PznF41FHN2tmK0XNNOYXoWxmPevPeyuixyLc9mF90kg05phppzUlldE7tdFmbhcNOaTgR+abW10RdropRSbpondNOaHCuiJVQEoIPRTLK6JXaqAUz0Ui0pllUXaqUCLqMeiqlVF2qlAxnzQmJJmS5KPCqYHigSVCWS6SIKQqmfNGCrDIaroAQKoAFdE8MvikCMtSqAkK6JyFUCWXxQSOiUA5eKGHx0RMZfFU0ty1KpBtAqt2yea02ET7tSt+yEZarXHzMM3ynQdoR+qsn3Vv92KuZigVXTdoB+rsn3Vv92KuaeBl8VpkPNwTpGawEX23u4ObPwvY6LoLW3/Uxpznvon/ALmWklzcKWXxXv8ApJjneBhvNht3x7wS31b9AQGzrNeOSP1OCanhcFzOu2o0GBY/u7v70RbfZ0Rrkn3TYgRvfSP2TR+9unHEPA7g3ivLsfaKGIUNsSzNivgtc2G4vIh3S4uG8YPakSeOPFeXtjbMSOZxX3pey0erDYMmMGACx0t7HgWKTdUakQNNpZupy37d3Pvu70XCaykvD2w4GNFLe4xYkvC+6Ul7kB25b6S7B0iIDT3ueQRvJfQbOc+Jkubiy6mtoo+lnfZ4FF8zCwCq6fsyMLT9zj/4Lm2NGWq6bs0MLT9zj/4L2Ykfk+Ndo521+a0XNFVv2uWQWg8jDDUrPJzPRh+Uh4FdEroromZdTRMZalZnoEAKpHzQCOppzGQ1UAECuiUhXRDyJYDUpzblqUBI807orohxGXxSmMvioURHindFUEjL4omMvigJkKpECqYI6mlMUXII8tE59STBKZn0VAE6aJieWiAD0QqvHoroBe6kidNEEE/mlIj81dwUHU0QXT/JTj0VTZ9EK2AmctFV+miWPRCZaTw1Cqsg71NEmk5aKrzuihrnV5qgprqaLdsnhotOG12S3rI9w71pj57nnzfKdTtWzueyyBrXOPorcGtLj+1i8AF5L9jRvqYvu3/Je1tCI9sOyPY57Z2a7fY4txbFiXm3hxExh4LR9PtH2iN71/zXqcbPkY5zXI027FjfUxfdv+S2rNs60McHMhxmuHc4MeD8FQt1o+0Rvev+attuj/XxveP+azeNPoe3FxeeDuLRvNhxT+0sbifpMa+GT4tkW8gFLoMQexYnA8HRBEiS/pkGnzBW/wBn7YN8z0mPF3eM5xIgbO6bl8tMw29KcuCfaO2Den0aNEuXWzuRYhZfu+vuy43iyfdNY9mtWnc+j/VuK06u77b/AIOftWz7Q9xe+HGc495MN/IYYCi1HbGjfUxfdv8Akt1+0I/18b3r/msR2nH+0Rvev+a2WJLofOy8dnyO20YGbHjfUxfdv+S9bY1mcz0gPa5p9Dj4OaWmXq4yIWk3aUf7RG96/wCa9DZUSI5tpe9z3htkitvPcXSLi0NbMnCZ7gtFGkeHJknLmclbDicNFovfwloty2E9FaDgeivLN7n2MC7pLick2uOWibp9EJSOWoWZ6AvU0SLjlomLw86hF53RQCv00UzOWitwceHwT9YZqAxgnLRBd1JXfdXmpcHdFQEFO9TRBvdFI3uioUd6miJnLRDb3RSvHooDGAqKlVIZlcoFAeCAKjVMNGeiGgZ6LoBy1Tu1GqLozPJI+KAq7UaoAqNUSGZQAMyqQLtRqm4eGqR8Squ1KoEPLVW2HULJDhCui3YNgmJ4rm6KlZoNbULYhYcfits2CWatlhPQXSlRJQs3NmbZjwQWwo72AmZAOE85EYL0R2mtcp+lRNPkvK9Almsnokgu3mdGeLgMUp95L2Pe2htq1Q4jmC1RSBd77s/Wa13AVWR217VDkbRa4jJ90MXTFd/TL1BV3JaFt2oS4vgs3bnBt6IfWiYNDZM4MGHeMarwIpxJJJJxJOJJqVwssn1PrZuB4DG3JQT8q2/6dAO09q+0xOY+SR7T2v7S/T5LnoTZnvK3oFjJWna0fEnwONvaK9kb57UWz7TE0+S0rXtiPEex8SM5z4eLHGU2mc8MMwFsHZDpTIdLOWHNaVosMuKdsT4CK6L2N79KrZ9qfp8lq7Q23aIzbsWO97Zzuk4TqAMVqeiV0Vw7DPNV5RHgoJ2kvY8+K2fEarXLPDVe/wD/AJnWCwRdmeKxc7PYsTijxHQ6jVQG+Gq37RZ7vE8lpubUqkaMPLVEqhUWjMqS0ZlCATUJyqErgzKd2uiAkCo1Ry1TaKlF0ZlSikltRqndqEEVKCKoCZeCJJyqU5VOigMWHRTw6Km94Kr4yHJcIDEuinh0UXxkOSGuGQ5LoBh0U8MtUw8ZDkkXDIclQCBJIPoOSd+g5JsChLolVh0Vja7HuHJZWxBkOSuwN+wMBI+a+k9nmNhWXfQ2wzEdaBCfEiNEQQmFgLZNdgLxvTNF80scYA9w5L6F2MjB5dZnEBtpZu8e5sVvrQXf9wl/Uscpviq02rRsbb2cyKyHaWw2sL70OMxgutbHh98mj2Q5pBlQpbC2ZDaXx4rA6HAZfunufEcbsJhzBdiRk0r1NjTiB8Bw9aM0kA8LVA7x4uE5/wC5O3uEKDDhyxl6VFFT6sBh0JH8xWV9D1vhv1OzXj+3O/Yw2z9dZ4zozIQdCfBbDfDY2Gbzz68EhvtBomaXVqbItDYLIjmOa20OfChwyQHOYxxdvHsBwng0T+a2NsndMhWbiwb6NWNGE5GrWyHmVhskBpgPiFovttFma13EB18uHnIcks5UYPJstm/2sw9pf1tngx4kjFMSPCe8ANMQQ7hY5wGBd6xE1w1phY/mu92oP9HC+8Wr/iXJRYQn3DktIMzyqpNLxf5MnZ7ZJjRGQ2CbnGQxwHEkngAJk0C7RlpZZ5MsgHfc9ILN5HjPGB3DDg1k+PxXm9mG7uBaoo9psJkNp4gx4gaSK3QR5r1ID9xBixmYP3oskJ3GGxjC6I5uROGP8xXMpWzXDCKi5yV1SS8W/HyRtOi7SaL59Ol3k+o8+cKU1p3IdtkyI2G2M6YhR2DdtiPH8KOz915+l8QvJZaC115r3h853g516fjPFettN18Q48pOjwnufLAb+zuM4gHAkD/yK5NYqOV6HFJ9GvHzOcfsuRILZEEgg94IwIK9+Ds+FZAL8NkS0XQ5zYk9zZ2n2d4B7bzMerwnmvZLGvtkOI4CT4bLS4ZkQTEdzcw8152zmh73xoovhjHWl7T3RIrnXYbXUEwZVKarMseOLuUuSV/fwRkhbRtrm3oe/ucN1ZWiFKgliFpx9oQ3zFpgwokvaLWejWltZD1XmhmvQAe8GPaLU9gvXbwLzN8p3YcNp7gJaLMNpw8A62MiEH1HWiyOeWHhJ5MwPGa5vyK5xaf6a9L29dz592x2S2zxnwwbwaRInAlrmhzZjgZOE1yEVoy1XcdsYURsWIIxvRLxL3d94kTDgciCCKSXFR3DIcl6sb2PBNGmZTPzRh0VT3jIclDnDIcloZiPWKYI6JQHDIckXhkOSgFh0UYYa4qSaaIvUHJSyl4ZHmpMupqSaDkqLhkOSWBNkqkMtVN4U5IvDIckBF41QSVMvBF3wXFgyhxqqDz1JYgDRU1pouk2CiTNVeNVEvBMsNOau4KJNUNDqpXTTmiRpzVAwTVMklTI05py8OaENuDENV0OyrWRKRIIkQciDMHmuYhzpzXoWJ5B7xzUkrNYSo+l2narYkYxYJk97WR5SIuWhgnEaMwZONcFs2GMY8ffR5EAOtceXdch4QoY8TwycF5HZu1NiQnWdz4cOIHsj2d7yGtvt9V8Nz+AcJSqFs7ZtQgwHwb8Ixo0Rr4whODmQoMMfqoN4YTnjIcAF5q6dT6fxGNYa/urT6fzY8+1250R7ojvae4vd4uM5f8Axexs0zskT7zZf+RcULVM94XWdmom9gRYDC3e7yDGYxzg3eCHeDmtLsL2IK6kqR5sc1qV+K/JvWizOfZIV1rnStFpndBMv2ffJeHG2VF793EkMZ3XfJdDB2dbmTDIdoYCS6620wQJnvwCyizbSEi0x2mYk59pglgq4cQuLrqbZcabbUo9XzPM2JDLoNqgj2nwWxG1MB4eQK3SeS3bK3fwokFmLzEFqhN4xA5pbFY3Nwy43SvP2ztRrbW+JZntF14LXt9kuugRC0d10uvc0bNsgisbuIrHvEy6A9wgRWP4vs75yIOHyVZzhlFwcJOrpp+fmYWbPiOfdax5dOV0NN6fgti12QwXuZf3hay6QDNrY0YSMJmMiRMkkZL1HQtouFwtthHdIxYbWyrEyWi60Q7HJ73Q4kds9zAhG/CguP8AFjP/AHnjgMeHlLNYOOJ6nJN9Et9/8HqRLS2HbYcNxFxjGWV7uAnBMNx8nP0WjsiO1rnQ4jgGva6zvf3hjw+9CiGX7swBOhXJxrdOd4zJJJJPeSZklexsm0WeJDDC9tnjNBAe+ZgR2EzDYvfccM+7u8rpoyxTgk4y5NV9q5M6N1niMaYMazxXtvX2OgzDmukASx0i1zSAOS8/btk3WDTGAfZr5ZGdec1xigSIkJYAc1khbOtbRKHeu8NzbIYh+QcZgLVtFkYyfpUeFCB9pkN5tNpeJg3Z+y3u75rlbdTfFKOJ32irwV7+h5nb8/6h/wDsg/2Ia+f2pxnxXT9rdr7+LEiAXA6Qa0mZDWtDGg1k0TXJRiac16caaR8qbMMzj3qbxqkfLmkWmnNaGRT51SxyKTmkZc092ac0AXjVKRyKRYRlzRI05qfcAZ1TxqpLTRORohQaTVEzVSPJHJSwYfNPzUiVU8FkC/PRMeKgKhKq6QL89EeagnxTBFV1YMgFdEEVUTTbKqtgfnoqujPRTIIMqoDI3x0WWE+uiwerXRULtVRZ6cO2SHfok+2YYHReaHCqoFuZ0U0l1G42PXRbUK2cF5V4V5qWxBVGiqR0TLeEn24LwRGGZSMUZlc6Uda2e463V0SZb59+PkvG3ja8wgRG5nmF1pRNbOhO0zKRcZZTMuU1qRrfkdF5BijMpXxXmooIObPRNqr1zWWDbZcdF5N4V5qWxalVpE1HQenCnJREt+GB5BeJvRXmp3oqppRdbNy02knitQ48dEnEVUYVXSOWxyrokRXRDZcZok2qHIEV0SlXRJ0uE08K6IUQ8dEEV0Tk2ql0qqARTlXRIkVSJFVAOVdESropbKqeFVAYAVUxRSCmSVmUqYogEIBKA4qkLDhkEEiimZqqDiurA5iiYIoi8a8k2uNV0AmJ8E5jIIvGqHEy7jyVATGQQ1wyCWOR5IDjlolgq8MgkXDJEzkeSd415JYC8MgnMZBEzkeSQJyPJUggRkE5jIJ3jXkguOWiARcMgmHCXcEXjXki8a8kAAiiRIomCcjyQXmvJAIEUTvDIIJOR5IBNeSAkEURMUVXjXklM15IURcKJ3hkE7xryQHHI8kIIuGQU3hkEGeRReOR5KWUd4ZBBcMkiTkeSLxrySwIEUTmMgleNUTNeSgE4jIJEiiZcapFx6CgFeGQSmETKUzVc2DGnipCa4KUCUwSoCYVsF3ijFSmrYLvFMFQm1VMhePRTx6KkIcugVM9FMT6IUoVBU0zPoqOKaAvHooBPRUtQ35/FWwUZj80plCTkBYB6KTQeikhAPHopun0QoKAlgu+eipxP5hJIdyWCpnopTQkoCiT0USNOYQkqAxSx6ISQoBkomeipckpYKE+ilMpFI8FLAzNSSgpKNgJlGKQQuSn/9k=) center / cover",
              }}
            ></CardTitle>
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=2RYNadvjCd4"
              >
                Adventures in South Australia
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
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button
                colored
                target="_blank"
                href="https://www.youtube.com/watch?v=3tzi1RlpZYc"
              >
                South Australian Vloggers
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
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button colored target="_blank" href=""></Button>
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
            <CardText>Sharing a Vlog or Blog in Adelaide.</CardText>
            <CardActions border>
              <Button colored target="_blank" href=""></Button>
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
          <Tab>The Gracious Life</Tab>
          <Tab>Glam Adelaide</Tab>
          <Tab>Day in a life in Adelaide</Tab>
          <Tab>Adventures in South Australia</Tab>
          <Tab>South Australian Vloggers</Tab>
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

export default Vlogsandblogs;
