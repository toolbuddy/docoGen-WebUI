/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Lists from '../List/Lists.jsx';
import Paragraph from './Paragraph.jsx';
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

        if (this.props.type === 'text') {
            for (var i = 0; i < this.props.content.length; ++i) {
                dataArr.push(this.props.content[i].info);
            }

            return ( 
                 <div>
                    <Title 
                        as='h2' 
                        text={this.props.title} />
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
                <div>
                    <Lists 
                        content={this.props.content}
                        listParam={{
                            bulleted: true,
                            relaxed: true,
                            listType: 'ul'
                        }} />
                </div>
            )
        }
    }
}

/* Export module */
export default Article;