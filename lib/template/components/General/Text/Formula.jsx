/* Import modules */
import React from 'react';
import MathJax from 'react-mathjax';

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
                        margin: '0 0 2em'
                    }}>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '0.5em 0 0.5em'
                        }}>
                        <MathJax.Context>
                            <MathJax.Node>{this.props.display}</MathJax.Node>
                        </MathJax.Context>
                    </Segment>
                </div>
            );
        } else if (this.props.inline != undefined) {
            return ( 
                <div
                    style={{
                        margin: '0 0 2em'
                    }}>
                    <Paragraph 
                        content={this.props.info}
                        formula={this.props.inline} />
                </div>
            );
        } else if (this.props.equation != undefined) {
            return ( 
                <div
                    style={{
                        margin: '0 0 2em'
                    }}>
                    <Paragraph 
                        content={this.props.info} />
                    <Segment
                        color='black'
                        style={{
                            margin: '0.5em 0 0.5em'
                        }}>
                        <MathJax.Context>
                            <MathJax.Node>{this.props.equation}</MathJax.Node>
                        </MathJax.Context>
                    </Segment>
                </div>
            );
        }
    }
}

/* Export module */
export default Formula;