/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Code from '../Code/Code.jsx';
import Formula from '../Text/Formula.jsx';
import Lists from '../List/Lists.jsx';
import Paragraph from './Paragraph.jsx';
import Tables from '../Table/Tables.jsx';
import Title from './Title.jsx';

/**
 * @class Article
 * @extends {React.Component}
 */
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = [];

        if (this.props.type === 'text' || this.props.type === 'none') {
            for (let i = 0; i < this.props.content.length; ++i) {
                dataArr.push(this.props.content[i].info);
            }

            return ( 
                 <div>
                    <Title 
                        as='h1' 
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Paragraph 
                                    content={item} />
                            );
                        })
                    }
                 </div>
             );
        } else if (this.props.type === 'default') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }

            return (
                 <div>
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Paragraph 
                                    content={dataArr[i]} />
                            );
                        })
                    }
                 </div>
             );
        } else if (this.props.type === 'list') {
            return (
                <div 
                    style={{
                        padding: '0 0 1.5em'
                    }}>
                    <Lists 
                        content={this.props.content}
                        listParam={{
                            bulleted: true,
                            relaxed: true,
                            listType: 'ul'
                        }} />
                </div>
            )
        } else if (this.props.type === 'table') {
            return (
                <div>
                    <Title 
                        as='h1' 
                        text={this.props.title} />
                    <Tables 
                        caption={"Table Caption"}
                        content={this.props.content} />
                </div>
            );
        } else if (this.props.type === 'code') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }

            return (
                <div>
                    <Title 
                        as='h1' 
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Code 
                                    caption={item.caption}
                                    lang={item.lang}
                                    raw={item.raw}
                                    src={item.src} />
                            );
                        })
                    }
                </div>
            );
        } else if (this.props.type === 'formula') {
            for (let item of this.props.content) {
                dataArr.push(item);
            }
            
            return (
                <div>
                    <Title 
                        as='h1' 
                        text={this.props.title} />
                    {
                        dataArr.map(function(item, i) {
                            return (
                                <Formula 
                                    display={item.display}
                                    equation={item.equation}
                                    info={item.info}
                                    inline={item.inline}/>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

/* Export module */
export default Article;