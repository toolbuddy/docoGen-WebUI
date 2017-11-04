/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Button, Icon, Menu } from 'semantic-ui-react';

/* Import components */
import Title from '../General/Text/Title.jsx';

/**
 * @class Navbar
 * @extends {React.Component}
 */
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return ( 
            <Menu borderless={true} fixed='top' inverted size='large'>
                <Menu.Menu position='left'>
                    <Menu.Item>
                        <Button icon='align justify' inverted onClick={this.props.push} size='mini' />
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Header as='h3'>
                        <Menu.Item>
                            <Icon name='book' />docoGen UI
                        </Menu.Item>
                    </Menu.Header>
                </Menu.Menu>
            </Menu>
        );
    }
}

/* Export module */
export default Navbar;