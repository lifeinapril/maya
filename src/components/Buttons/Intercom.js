import React from 'react';

class intercom  extends React.Component{
    constructor(props){
        super(props);
        window.Intercom('boot', {
          app_id: ""
        });
    }
}

export default intercom;