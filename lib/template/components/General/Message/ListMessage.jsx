/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Message } from 'semantic-ui-react';

/* Import components */
import ListItem from '../List/ListItem.jsx';

/**
 * @class ListMessage
 * @extends {React.Component}
 */
class ListMessage extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        if (this.props.type === 'info') {
            return (
                <Message info>
                    <Message.Header>New Site Features</Message.Header>
                    <Message.List>
                        <Message.Item>You can now have cover images on blog pages</Message.Item>
                        <Message.Item>Drafts will now auto-save while writing</Message.Item>
                    </Message.List>
                </Message>
            );
        } else if (this.props.type === 'warning') {
            return (
                <Message warning>
                    <Message.Header>New Site Features</Message.Header>
                    <Message.List>
                        <Message.Item>You can now have cover images on blog pages</Message.Item>
                        <Message.Item>Drafts will now auto-save while writing</Message.Item>
                    </Message.List>
                </Message>
            );
        } else if (this.props.type === 'success') {
            return (
                <Message success>
                    <Message.Header>New Site Features</Message.Header>
                    <Message.List>
                        <Message.Item>You can now have cover images on blog pages</Message.Item>
                        <Message.Item>Drafts will now auto-save while writing</Message.Item>
                    </Message.List>
                </Message>
            );
        } else if (this.props.type === 'error') {
            return (
                <Message error>
                    <Message.Header>New Site Features</Message.Header>
                    <Message.List>
                        <Message.Item>You can now have cover images on blog pages</Message.Item>
                        <Message.Item>Drafts will now auto-save while writing</Message.Item>
                    </Message.List>
                </Message>
            );
        }
    }
}

/* Export module */
export default ListMessage;