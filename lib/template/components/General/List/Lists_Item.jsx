/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Image, List } from 'semantic-ui-react';

/* Import components */
import Lists_Content from './Lists_Content.jsx';

/**
 * @class Lists_Item
 * @extends {React.Component}
 */
class Lists_Item extends React.Component {
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
                <List
                    bulleted={this.props.bulleted}
                    celled={this.props.celled}
                    divided={this.props.divided}
                    horizontal={this.props.horizontal}
                    ordered={this.props.ordered}
                    selection={this.props.selection}
                    style={this.props.style}
                    relaxed={this.props.relaxed} >
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
                </List>
            );
        } else if (this.props.listType === 'il') {
            return (
                <List
                    bulleted={this.props.bulleted}
                    celled={this.props.celled}
                    divided={this.props.divided}
                    horizontal={this.props.horizontal}
                    ordered={this.props.ordered}
                    selection={this.props.selection}
                    style={this.props.style}
                    relaxed={this.props.relaxed} >
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
                </List>
            );
        } else if (this.props.listType === 'ul') {
            return ( 
                <List
                    bulleted={this.props.bulleted}
                    celled={this.props.celled}
                    divided={this.props.divided}
                    horizontal={this.props.horizontal}
                    ordered={this.props.ordered}
                    selection={this.props.selection}
                    style={this.props.style}
                    relaxed={this.props.relaxed} >
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <List.Item>
                                    <ListItemContent 
                                        content={item}
                                        listType='ul' />
                                </List.Item>
                            );
                        })
                    }
                </List>
            );
        }
    }
}

/* Export module */
export default Lists_Item;