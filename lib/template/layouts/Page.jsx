/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider } from 'semantic-ui-react';

/* Import components */
import Section from '../components/General/Text/Section.jsx';
import Title from '../components/General/Text/Title.jsx';

/**
 * @class Page
 * @extends {React.Component}
 */
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let pageArr = this.props.page;
        let contentArr = pageArr.content;

        return (
            <Container textAlign='left'>
                {
                    contentArr.map(function(item, i) {
                        return (
                            <Section
                                content={item}
                                title={pageArr.title} />
                        );
                    })
                }
            </Container>
        );
    }
}

/* Export module */
export default Page;