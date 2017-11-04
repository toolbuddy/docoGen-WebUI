/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Segment } from 'semantic-ui-react';

/* Import components */
import Article from '../General/Text/Article.jsx';
import Section from '../General/Text/Section.jsx';
import Title from '../General/Text/Title.jsx';

/* Import data */
import abstract from '../../data/abstract.json';

/**
 * @class Abstract
 * @extends {React.Component}
 */
class Abstract extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = abstract.data[0].content;
        
        return (
            <Segment 
                style={{ 
                    border: 'none', 
                    paddingTop: '0' }} 
                vertical>
                <Title as='h2' text='Abstract' />
                <Article 
                    content={dataArr}
                    type='default' />
                <Divider />
            </Segment>
        );
    }
}

/* Export module */
export default Abstract;