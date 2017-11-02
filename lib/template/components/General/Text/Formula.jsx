/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Segment } from 'semantic-ui-react';

/* Import components */
import Paragraph from './Paragraph.jsx';

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
                <div
                    style={{
                        margin: '0 0 1em'
                    }}>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '0.5em 0 0'
                        }}>
                        {this.props.display}
                    </Segment>
                </div>
            );
        } else if (this.props.inline != undefined) {
            return ( 
                <div
                    style={{
                        margin: '0 0 1em'
                    }}>
                    <Paragraph 
                        content={this.props.info + ' ' + this.props.inline + ' '} />
                </div>
            );
        } else if (this.props.equation != undefined) {
            return ( 
                <div
                    style={{
                        margin: '0 0 1em'
                    }}>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '0.5em 0 0'
                        }}>
                        {this.props.equation}
                    </Segment>
                </div>
            );
        }
    }
}

/* Export module */
export default Formula;