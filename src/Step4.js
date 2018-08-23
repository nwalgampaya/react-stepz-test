
'use strict';

import React, { Component } from 'react';

export default class step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedToCloud: props.getStore().savedToCloud
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step4">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                {
                  (this.state.savedToCloud)
                  ?
                    <div>
                      <h1>Thanks!</h1>
                      <h2>Data was successfully saved to cloud...</h2>
                    </div>
                  :
                    <h1>You have updated data, go <a onClick={() => {this.props.jumpToStep(1)}}>back</a> and Save again!</h1>
                }
              </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
}
