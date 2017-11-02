/* Import modules */
import React from 'react';
import MathJax from 'react-mathjax';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/**
 * @class Paragraph
 * @extends {React.Component}
 */
class Paragraph extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        if (this.props.formula != undefined) {
            return (
                <div 
                    style={{ 
                        marginBottom: '1em' 
                    }}>
                    { this.props.content }
                    <MathJax.Context>
                        <MathJax.Node inline>
                            { this.props.formula }
                        </MathJax.Node>
                    </MathJax.Context>
                </div>
            );
        } else {
            return (
                <div 
                    style={{ 
                        marginBottom: '1em' 
                    }}>
                    { this.props.content }
                </div>
            );
        }
    }
}

/* Export module */
export default Paragraph;