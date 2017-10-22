/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Image } from 'semantic-ui-react';

/* Import components */
import Title from './Title.jsx';

/**
 * @class FigureItem
 * @extends {React.Component}
 */
class FigureItem extends React.Component {
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
export default FigureItem;