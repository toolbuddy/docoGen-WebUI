/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Grid, Image } from 'semantic-ui-react';

/* Import components */
import Figure_Item from './Figure_Item.jsx';
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
        let dataArr = this.props.image;

        return (
            <Card.Group itemsPerRow={this.props.figPerRow}>
                {
                    dataArr.map(function(figItem, i) {
                        return (
                            <Figure_Item
                                caption={figItem.caption}
                                img={figItem.path} />
                        )
                    })
                }
            </Card.Group>
        );
    }
}

/* Export module */
export default Figure;