/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Header } from 'semantic-ui-react';

/**
 * @class Title
 * @extends {React.Component}
 */
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return ( 
            <Header as={this.props.as} style={{ margin: '0', padding: '0.5em 0' }}>
                { this.props.text }
            </Header>
        );
    }
}

/* Export module */
export default Title;