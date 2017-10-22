/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Header, Label } from 'semantic-ui-react';

/**
 * @class IntroPage_Title
 * @extends {React.Component}
 */
class IntroPage_Title extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Header as='h1' style={{ padding: '0.5em 0' }}>
                { this.props.title }
                <Label basic color='blue' horizontal size='tiny'>
                    { this.props.vers }
                </Label>
            </Header>
        );
    }
}

/* Export module */
export default IntroPage_Title;