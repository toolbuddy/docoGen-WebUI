/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Segment } from 'semantic-ui-react';

/* Import components */
import Article from './Article.jsx';
import Subsection from './Subsection.jsx';
import Title from './Title.jsx';

/**
 * @class Section
 * @extends {React.Component}
 */
class Section extends React.Component {
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
            <Segment style={{ border: 'none', paddingTop: '0' }} vertical>
                <Title 
                    as='h1' 
                    text={this.props.title} />
                <Article 
                    content={dataArr.data}
                    title={dataArr.name}
                    type={dataArr.type} />
                {
                    dataArr['subsection'].map(function(item, i) {
                        return (
                            <Subsection
                                content={item.content[0]}
                                title={item.title} />
                        )
                    })
                }
                <Divider />
            </Segment>
        );
    }
}

/* Export module */
export default Section;