/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Lists_List from './Lists_List.jsx';

/**
 * @class Lists_Content
 * @extends {React.Component}
 */
class Lists_Content extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        if (this.props.content.hasOwnProperty('content')) {
            return ( 
                <List.Content>
                    <List.Header>{ this.props.content['name'] }</List.Header>
                    <List.Description>{ this.props.content['content'] }</List.Description>
                </List.Content>
            );
        } else {
            if (this.props.content.hasOwnProperty('subitems')) {
                return ( 
                    <div>
                        { this.props.content['name'] }
                        <Lists_List 
                            content={this.props.content['subitems']}
                            listType={this.props.listType} />
                    </div>
                );
            } else {
                return ( 
                    <div>
                        { this.props.content['name'] }
                    </div>
                );
            }
        }
    }
}

/* Export module */
export default Lists_Content;