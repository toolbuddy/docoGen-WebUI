/* Import modules */
import React from 'react';
import Highlight from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/styles';

/* Import Semantic-UI React components */
import { Divider, Form, Icon, Message } from 'semantic-ui-react';

/* Import components */
import Title from '../Text/Title.jsx';

/**
 * @class Code
 * @extends {React.Component}
 */
class Code extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = this.props.image;

        if (this.props.raw != undefined) {
            return (
                <div>
                    <Message 
                        attached 
                        style={{ 
                            padding: '0 1em 0' 
                        }}>
                        <Title 
                            as='h5' 
                            icon='code' 
                            text={this.props.caption} />
                    </Message>
                    <Form 
                        className='attached fluid segment'
                        style={{
                            height: 'auto',
                            padding: '0',
                            width: 'inherit'
                        }}>
                        <Highlight 
                            language={this.props.lang}
                            lineNumberContainerStyle={{
                                float: 'left',
                                paddingRight: '15px'
                            }}
                            showLineNumbers={true}
                            style={vs2015}>
                            {this.props.raw}
                        </Highlight>
                    </Form>
                    <Message 
                        attached='bottom' 
                        compact 
                        style={{ 
                            margin: '-1px -1px 0', 
                            padding: '0 1em 0' 
                        }}>
                        <Title 
                            as='h6' 
                            icon='caret right' 
                            text={this.props.lang} />
                    </Message>
                    <Divider hidden />
                </div>
            );
        } else if (this.props.src != undefined) {
            return (
                <div>
                    <Message 
                        attached 
                        style={{ 
                            padding: '0 1em 0' 
                        }}>
                        <Title 
                            as='h5' 
                            icon='code' 
                            text={this.props.caption} />
                    </Message>
                    <Form 
                        className='attached fluid segment'
                        style={{
                            height: 'auto',
                            padding: '0',
                            width: 'inherit'
                        }}>
                        <Highlight 
                            language={this.props.lang}
                            lineNumberContainerStyle={{
                                float: 'left',
                                paddingRight: '15px'
                            }}
                            showLineNumbers={true}
                            style={vs2015}>
                            {this.props.src}
                        </Highlight>
                    </Form>
                    <Message 
                        attached='bottom' 
                        compact 
                        style={{ 
                            margin: '-1px -1px 0', 
                            padding: '0 1em 0' 
                        }}>
                        <Title 
                            as='h6' 
                            icon='caret right' 
                            text={this.props.lang} />
                    </Message>
                    <Divider hidden />
                </div>
            );
        }
    }
}

/* Export module */
export default Code;