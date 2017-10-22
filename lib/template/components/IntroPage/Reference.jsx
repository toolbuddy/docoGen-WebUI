/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List, Segment } from 'semantic-ui-react';

/* Import components */
import Title from '../General/Text/Title.jsx';

/* Import data */
import reference from '../../data/reference.json';

/**
 * @class Reference
 * @extends {React.Component}
 */
class Reference extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = [];
        Object.keys(reference.data).forEach(function(key) {
            dataArr.push(reference.data[key]);
        });

        return (
            <Segment style={{ border: 'none', paddingTop: '0' }} vertical>
                <Title as='h2' text='Reference' />
                <List selection style={{ marginTop: '0' }}>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <List.Icon name='caret right' />
                                    <List.Content>
                                        <List.Header>{ item.name }</List.Header>
                                        <List.Description>{ item.content }</List.Description>
                                    </List.Content>
                                </List.Item>
                            );
                        })
                    }
                </List>
            </Segment>
        );
    }
}

/* Export module */
export default Reference;