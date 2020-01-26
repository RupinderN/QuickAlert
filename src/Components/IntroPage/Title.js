import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Title extends Component {

    render() {
        return (
            <div style={
                {
                    width:'80%',
                    paddingTop: "7%",
                    marginLeft: "5%" 
                }
            }>
                <div style={{textAlign: "left"}}>
                    <Typography style={{ color: "white", marginLeft: "6%"}} 
                        variant="h1" component="h2" gutterBottom>
                        Quick Alert
                    </Typography>
                    <Typography style={{ color: "white", marginLeft: "8%" }}
                        variant="h4" component="h2" gutterBottom>
                        All for your safety.
                    </Typography>
                    <Typography style={{ color: "white", margin: "9%" }}
                        variant="h6" component="h2" gutterBottom>
                        A web application that ensures that emergency services near you know about all relevant information that
                        might concern you, all with one text message about your address. Helps hospitals know about their patient before they arrive to the hospital.
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Title;