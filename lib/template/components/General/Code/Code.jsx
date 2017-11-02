/* Import modules */
import React from 'react';
import Highlight from 'react-highlight';

const fs = require('fs');

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
        this.handleFiles = this.handleFiles.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    handleFiles(files) {
        console.log(files);
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
                            className={this.props.lang}
                            style={{
                                margin: '0 !important'
                            }}>
                            { this.props.raw }
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
            var src_data = fs.readFileSync('/Users/yungshenglu/Project/docoGen-html-ui/test/example.py', 'utf-8');
            
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
                            className={this.props.lang}
                            style={{
                                margin: '0 !important'
                            }}>
                            {
                                src_data
                            }
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