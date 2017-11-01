/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Lists_Content from './Lists_Content.jsx';

/**
 * @class Lists_List
 * @extends {React.Component}
 */
class Lists_List extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = this.props.content;
        
        
        if (this.props.listType === 'al') {
            return (
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <List.Icon 
                                        name={item.icon} />
                                    <Lists_Content 
                                        content={item} />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        } else if (this.props.listType === 'il') {
            return (
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <Image 
                                        avatar src={item.img} />
                                    <Lists_Content 
                                        content={item} />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        } else if (this.props.listType === 'ul') {
            return ( 
                <List.List>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <Lists_Content
                                        content={item}
                                        listType='ul' />
                                </List.Item>
                            );
                        })
                    }
                </List.List>
            );
        }
    }
}

/* Export module */
export default Lists_List;