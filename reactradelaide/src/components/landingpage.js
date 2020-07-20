import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div class="image">
              <img
                src="https://attachment.outlook.live.net/owa/MSA%3ADAM180%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC05ZmFiLWI1ZjMtMDACLTAwCgBGAAADxeHU0ki%2BMEqWo4RJgW6WYgcA2emy4VqqikCQtSnD4NJvcgAAAgEMAAAA2emy4VqqikCQtSnD4NJvcgAD6WOmhgAAAAESABAAlH79uc9LrkO%2BlajPjoSvYg%3D%3D&thumbnailType=2&owa=outlook.live.com&scriptVer=2020070601.02&isc=1&X-OWA-CANARY=MlzAfvViDkafPSCbaqRb3MDOFdTZJ9gYCuWnRa-Ftn3QUYLbhVDjTJsWQ_GWtuQoOonyZ9cyy40.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU2MzU4ODUyMzRCOTI1MkRERTAwNTc2NkQ5RDlGMjc2NTY1RjYzRTIiLCJ4NXQiOiJWaldJVWpTNUpTM2VBRmRtMmRueWRsWmZZLUkiLCJ0eXAiOiJKV1QifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6Ijc3YWZmNGFiMmEzOTQ1OWQ5NjJiYmQyYTBkZjE0MWRlIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS0yNjc4ODMwNTc5XCIsXCJwdWlkXCI6XCIxODk5OTQ1ODg2NzI1NjE5XCIsXCJvaWRcIjpcIjAwMDZiZmZkLTlmYWItYjVmMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCJ9IiwibmJmIjoxNTk0NzE5NDc3LCJleHAiOjE1OTQ3MjAwNzcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.coCx4c1ac9cOosdoh6Iq6ehqRVsYv2BIxGWdvsmA8n58nG_lDbioyWgFMfulBwEvrJ0buoN7YDRNTxpNOuc72RAMIWrKGmqbFbRCr9VQveHddCK7PwAdahKAzXNPXWgo4IkqQMs5v87rprAI9kc7CBiJpCGXGIdtvCiqP76Z247R0AMSmWDn1a5Hl8jeViipNaSEYjTrK7mosR9bcD3Ur7G813xtHpvftaRFLzTv8Lc_CIxTthq9F8tki3hKc1yxCZACKjR1J3YknUA_zy-NNR6Gi5zeICR3iLB_mE5wV3FtOFbeds0LLAgVVxjocc-Y6Z_pEO3_-Z6EDSrBB3mNzA&animation=true"
                alt="radelaide"
                className="radelaide-img"
              />

              <h1>Welcome to,</h1>
              <h2>E-Magazine.</h2>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
