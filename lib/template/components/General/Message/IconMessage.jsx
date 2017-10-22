/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Message } from 'semantic-ui-react';

/* Import components */
import ListItem from '../List/ListItem.jsx';

/**
 * @class IconMessage
 * @extends {React.Component}
 */
class IconMessage extends React.Component {
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
                <Message content='Get the best news in your e-mail every day.' header='Have you heard about our mailing list?' icon='inbox' info />
            );
        } else if (this.props.type === 'warning') {
            return ( 
                <Message content='Get the best news in your e-mail every day.' header='Have you heard about our mailing list?' icon='inbox' warning />
            );
        } else if (this.props.type === 'success') {
            return ( 
                <Message content='Get the best news in your e-mail every day.' header='Have you heard about our mailing list?' icon='inbox' success />
            );
        } else if (this.props.type === 'error') {
            return ( 
                <Message content='Get the best news in your e-mail every day.' header='Have you heard about our mailing list?' icon='inbox' error />
            );
        }
    }
}

/* Export module */
export default IconMessage;