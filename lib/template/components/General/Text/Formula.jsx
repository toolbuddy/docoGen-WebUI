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
                <div>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '1em 0 1em'
                        }}>
                        {this.props.info}
                    </Segment>
                </div>
            );
        } else if (this.props.inline != undefined) {
            return ( 
                <div>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '1em 0 1em'
                        }}>
                        {this.props.info}
                    </Segment>
                </div>
            );
        } else if (this.props.equation != undefined) {
            return ( 
                <div>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '1em 0 1em'
                        }}>
                        {this.props.info}
                    </Segment>
                </div>
            );
        }
    }
}

/* Export module */
export default Formula;