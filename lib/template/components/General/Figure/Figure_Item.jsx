/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Image } from 'semantic-ui-react';

/* Import components */
import Title from '../Text/Title.jsx';

/**
 * @class Figure_Item
 * @extends {React.Component}
 */
class Figure_Item extends React.Component {
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
                <Image src={this.props.img} />
                <Card.Header textAlign='center'>
                    { 'Figure: ' + this.props.title }
                </Card.Header>
            </Card>
        );
    }
}

/* Export module */
export default Figure_Item;