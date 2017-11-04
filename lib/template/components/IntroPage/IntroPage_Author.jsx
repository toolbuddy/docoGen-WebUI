/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, List, Image, Item } from 'semantic-ui-react';

/**
 * @class IntroPage_Author
 * @extends {React.Component}
 */
class IntroPage_Author extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{ this.props.name }</Card.Header>
                    <Card.Meta>{ this.props.unit }</Card.Meta>
                    <Card.Description>
                        <List>
                            <List.Item>
                                <List.Icon name='envelope' />
                                <List.Content>{ this.props.email }</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='call' />
                                <List.Content>{ this.props.phone }</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='external share' />
                                <List.Content>{ this.props.website }</List.Content>
                            </List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

/* Export module */
export default IntroPage_Author;