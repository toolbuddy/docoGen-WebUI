/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Header, Icon } from 'semantic-ui-react';

const icon_size = [
    {
        "h1": "large"
    }, {
        "h2": "large"
    }, {
        "h3": "mini"
    }, {
        "h4": "mini"
    }, {
        "h5": "mini"
    }, {
        "h6": "mini"
    }
]

/**
 * @class Title
 * @extends {React.Component}
 */
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        if (this.props.icon != undefined) {
            return ( 
                <Header as={this.props.as} style={{ margin: '0', padding: '0.5em 0' }}>
                    <Icon name={this.props.icon} icon_size={icon_size[this.props.as]} />
                    <Header.Content>
                        { this.props.text }
                    </Header.Content>
                </Header>
            );
        } else {
            return ( 
                <Header as={this.props.as} style={{ margin: '0', padding: '0.5em 0' }}>
                    { this.props.text }
                </Header>
            );
        }
    }
}

/* Export module */
export default Title;