// 'use strict';

import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step1">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>The CRISP-Q study.</h1>
                <h3><p>Researchers: Yena (Grace) Kim (Scholarly Selective Student), Prof Jon Emery, A/Prof Marie Pirotta and Dr Jennifer Walker
                    The Department of General Practice, University of Melbourne </p>
                    <p>Thank you for taking part in this study. We are interested in how people think about their risk of bowel cancer and their use of bowel cancer screening tests</p></h3>
                <h1>Who can participate? </h1>    
                <h3><p>Any person 40 years or older but younger than 75, attending a GP appointment at Deepdene Surgery can participate in the study.</p></h3>
                <h1>What are the risks?</h1><h3><p>This survey is completely anonymous and therefore confidential, so there is no risk that we will know who said what. This study is completely voluntary and to withdraw during the study simply stop answering the questions. Due to the anonymous nature of the study we will not be able to delete your data if you withdraw.</p></h3>                    
                <h3><p>If you are concerned about your risk of bowel cancer, please discuss this with your doctor today.</p></h3>
              </label>
              
            </div>
          </form>
        </div>
      </div>
    )
  }
}
