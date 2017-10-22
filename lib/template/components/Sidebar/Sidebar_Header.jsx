/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Header, Image, Label, List, Menu } from 'semantic-ui-react';

/* Import components */
import Sidebar_Author from './Sidebar_Author.jsx';
import Sidebar_Version from './Sidebar_Version.jsx';

/* Import data */
import sidebar_author from '../../data/author.json';

/**
 * @class Sidebar_Header
 * @extends {React.Component}
 */
class Sidebar_Header extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = [];
        Object.keys(sidebar_author.data).forEach(function(key) {
            dataArr.push(sidebar_author.data[key]);
        });

        return (
            <Menu.Item style={{ padding: '  1.5em 1em 2em' }}>
                <Header as='h2' textAlign='center'>
                    { this.props.title }
                </Header>
                <Sidebar_Version color='red' vers={this.props.vers}/>
                <List animated verticalAlign='middle'>
                    {
                        dataArr.map(function(item, i) {
                            return <Sidebar_Author 
                                        email={item.email} 
                                        name={item.name} />
                        })
                    }
                </List>
            </Menu.Item>
        );
    }
}

/* Export module */
export default Sidebar_Header;