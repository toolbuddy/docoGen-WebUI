/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Segment } from 'semantic-ui-react';

/* Import components */
import Subarticle from './Subarticle.jsx';
import Title from './Title.jsx';

/**
 * @class Subsection
 * @extends {React.Component}
 */
class Subsection extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = this.props.content;

        return (
            <Segment style={{ border: 'none' }} vertical>
                <Title 
                    as='h3' 
                    text={this.props.title} />
                <Subarticle 
                    content={dataArr.data}
                    title={dataArr.name}
                    type={dataArr.type} />
                
                <Divider hidden />
            </Segment>
        );
    }
}

/* Export module */
export default Subsection;