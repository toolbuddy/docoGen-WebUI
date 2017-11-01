/* Import modules */
import React from 'react';

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
                <Form className='attached fluid segment'>
                    {this.props.raw}
                </Form>
                <Message 
                    attached='bottom' 
                    compact 
                    style={{ 
                        margin: '0', 
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

/* Export module */
export default Code;