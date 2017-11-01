/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Segment } from 'semantic-ui-react';

/**
 * @class Formula
 * @extends {React.Component}
 */
class Formula extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        if (this.props.display != undefined) {
            return ( 
                <Segment
                    color='black'>
                    {this.props.info}
                </Segment>
            );
        } else if (this.props.inline != undefined) {
            return ( 
                <Segment
                    color='black'>
                    {this.props.info}
                </Segment>
            );
        } else if (this.props.equation != undefined) {
            return ( 
                <Segment
                    color='black'>
                    {this.props.info}
                </Segment>
            );
        }
    }
}

/* Export module */
export default Formula;