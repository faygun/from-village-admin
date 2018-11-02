import React, {Component} from 'react';
import { Alert } from 'reactstrap';

const AlertMessage = (props) => {
    return(
        <div>
            <Alert color={props.alertType} tag="">
                {props.message}
            </Alert>
        </div>
    );
  };
  
  export default AlertMessage;
