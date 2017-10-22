/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Label } from 'semantic-ui-react';

/**
 * @class Sidebar_Version
 * @extends {React.Component}
 */
class Sidebar_Version extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Divider horizontal>
                <Label circular color={this.props.color} size='tiny'>{ this.props.vers }</Label>
            </Divider>
        );
    }
}

/* Export module */
export default Sidebar_Version;