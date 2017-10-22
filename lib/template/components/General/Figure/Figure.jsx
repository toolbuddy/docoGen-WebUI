/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Grid, Image } from 'semantic-ui-react';

/* Import components */
import FigureItem from './FigureItem.jsx';
import Title from '../Text/Title';

/**
 * @class Figure
 * @extends {React.Component}
 */
class Figure extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Card.Group itemsPerRow={this.props.figPerRow}>
                {
                    this.props.image.map(function(figItem, i) {
                        return <FigureItem img={figItem.img} title={figItem.title} />;
                    })
                }
            </Card.Group>
        );
    }
}

/* Export module */
export default Figure;