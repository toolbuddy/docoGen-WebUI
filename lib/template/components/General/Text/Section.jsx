/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Segment } from 'semantic-ui-react';

/* Import components */
import Article from './Article.jsx';
import Figure from '../Figure/Figure.jsx';
import Subsection from './Subsection.jsx';
import Title from './Title.jsx';

const titleAs = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

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
        let article_titleAs = (this.props.titleAs != 5) ? this.props.titleAs + 1 : 5;
        let subsection_titleAs = (this.props.titleAs != 5) ? this.props.titleAs + 2 : 5;
        
        if (this.props.titleAs != 0) {
            if (dataArr.type === 'none') {
                return (
                    <Segment style={{ border: 'none', padding: '0' }} vertical>
                        <Title 
                            as={titleAs[this.props.titleAs]}
                            text={this.props.title} />
                        <Article 
                            content={dataArr.data}
                            title={dataArr.name}
                            titleAs={article_titleAs}
                            type={dataArr.type} />
                    </Segment>
                );
            } else {
                if (dataArr.subarticle != undefined) {
                    if (dataArr.figure != undefined) {
                        return (
                            <Segment style={{ border: 'none', padding: '0' }} vertical>
                                <Title 
                                    as={titleAs[this.props.titleAs]}
                                    text={this.props.title} />
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                {
                                    dataArr['subarticle'].map(function(item, i) {
                                        return (
                                            <Subsection
                                                content={item.content[0]}
                                                title={item.title}
                                                titleAs={subsection_titleAs}/>
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
                                <Title 
                                    as={titleAs[this.props.titleAs]}
                                    text={this.props.title} />
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                {
                                    dataArr['subarticle'].map(function(item, i) {
                                        return (
                                            <Subsection
                                                content={item.content[0]}
                                                title={item.title}
                                                titleAs={subsection_titleAs} />
                                        );
                                    })
                                }
                            </Segment>
                        );
                    }
                } else {
                    if (dataArr.figure != undefined) {
                        return (
                            <Segment 
                                style={{ 
                                    border: 'none',
                                    padding: '0' }} 
                                vertical>
                                <Title 
                                    as={titleAs[this.props.titleAs]}
                                    text={this.props.title} />
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                <Figure 
                                    figPerRow={4}
                                    image={dataArr.figure} />
                            </Segment>
                        );
                    } else {
                        return (
                            <Segment 
                                style={{ 
                                    border: 'none',
                                    padding: '0' }} 
                                vertical>
                                <Title 
                                    as={titleAs[this.props.titleAs]}
                                    text={this.props.title} />
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                            </Segment>
                        );
                    }
                }
            }
        } else {
            if (dataArr.type === 'none') {
                return (
                    <Segment style={{ border: 'none', padding: '0' }} vertical>
                        <Article 
                            content={dataArr.data}
                            title={dataArr.name}
                            titleAs={article_titleAs}
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
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                {
                                    dataArr['subarticle'].map(function(item, i) {
                                        return (
                                            <Subsection
                                                content={item.content[0]}
                                                title={item.title}
                                                titleAs={subsection_titleAs}/>
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
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                {
                                    dataArr['subarticle'].map(function(item, i) {
                                        return (
                                            <Subsection
                                                content={item.content[0]}
                                                title={item.title}
                                                titleAs={subsection_titleAs} />
                                        );
                                    })
                                }
                            </Segment>
                        );
                    }
                } else {
                    if (dataArr.figure != undefined) {
                        return (
                            <Segment 
                                style={{ 
                                    border: 'none',
                                    padding: '0' }} 
                                vertical>
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                                <Figure 
                                    figPerRow={4}
                                    image={dataArr.figure} />
                            </Segment>
                        );
                    } else {
                        return (
                            <Segment 
                                style={{ 
                                    border: 'none',
                                    padding: '0' }} 
                                vertical>
                                <Article 
                                    content={dataArr.data}
                                    title={dataArr.name}
                                    titleAs={article_titleAs}
                                    type={dataArr.type} />
                            </Segment>
                        );
                    }
                }
            }
        }        
    }
}

/* Export module */
export default Section;