/* Import modules */
import React from 'react';
import { Link } from 'react-router';

/* Import Semantic-UI React components */
import { Icon, Image, Item, Menu } from 'semantic-ui-react';

/* Import components */
import Title from '../General/Text/Title.jsx';

/**
 * @class Sidebar_Item
 * @extends {React.Component}
 */
class Sidebar_Item extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Menu.Item>
                <Link to={this.props.to}>
                    <Item style={{ padding: '0' }}>
                        <Item.Content>
                            <Item.Header>
                                <Title as='h4' text={this.props.chapter} />
                            </Item.Header>
                        </Item.Content>
                    </Item>
                </Link>
            </Menu.Item>
        );
    }
}

/* Export module */
export default Sidebar_Item;