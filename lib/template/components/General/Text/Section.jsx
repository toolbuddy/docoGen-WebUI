/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Segment } from 'semantic-ui-react';

/* Import components */
import Article from './Article.jsx';
import Figure from '../Figure/Figure.jsx';
import Subsection from './Subsection.jsx';

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
        
        if (dataArr.type === 'none') {
            return (
                <Segment style={{ border: 'none', padding: '0' }} vertical>
                    <Article 
                        content={dataArr.data}
                        title={dataArr.name}
                        type={dataArr.type} />
                </Segment>
            );
        } else {
            if (dataArr.subarticle != undefined) {
                if (dataArr.figure != undefined) {
                    return (
                        <Segment style={{ border: 'none', padding: '0' }} vertical>
                            <Article 
                                content={dataArr.data}
                                title={dataArr.name}
                                type={dataArr.type} />
                            {
                                dataArr['subarticle'].map(function(item, i) {
                                    return (
                                        <Subsection
                                            content={item.content[0]}
                                            title={item.title} />
                                    );
                                })
                            }
                            <Figure 
                                figPerRow={4}
                                image={dataArr.figure} />
                        </Segment>
                    );
                } else {
                    return (
                        <Segment style={{ border: 'none', padding: '0' }} vertical>
                            <Article 
                                content={dataArr.data}
                                title={dataArr.name}
                                type={dataArr.type} />
                            {
                                dataArr['subarticle'].map(function(item, i) {
                                    return (
                                        <Subsection
                                            content={item.content[0]}
                                            title={item.title} />
                                    );
                                })
                            }
                        </Segment>
                    );
                }
            } else {
                if (dataArr.figure != undefined) {
                    return (
                        <Segment style={{ border: 'none', padding: '0' }} vertical>
                            <Article 
                                content={dataArr.data}
                                title={dataArr.name}
                                type={dataArr.type} />
                            <Figure 
                                figPerRow={4}
                                image={dataArr.figure} />
                        </Segment>
                    );
                } else {
                    return (
                        <Segment style={{ border: 'none', padding: '0' }} vertical>
                            <Article 
                                content={dataArr.data}
                                title={dataArr.name}
                                type={dataArr.type} />
                        </Segment>
                    );
                }
            }
        }
    }
}

/* Export module */
export default Section;