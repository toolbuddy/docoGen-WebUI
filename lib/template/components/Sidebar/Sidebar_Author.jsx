/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Image, List } from 'semantic-ui-react';

/**
 * @class Sidebar_Author
 * @extends {React.Component}
 */
class Sidebar_Author extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <List.Item>
                <List.Icon name='user circle' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header>{ this.props.name }</List.Header>
                    <List.Description horizontal>
                        { this.props.email }
                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

/* Export module */
export default Sidebar_Author;