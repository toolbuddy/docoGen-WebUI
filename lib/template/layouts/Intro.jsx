/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider } from 'semantic-ui-react';

/* Import components */
import Abstract from '../components/IntroPage/Abstract.jsx';
import IntroPage_Header from '../components/IntroPage/IntroPage_Header.jsx';
import Reference from '../components/IntroPage/Reference.jsx';
import Title from '../components/General/Text/Title.jsx';

/* Import data */
import intropage_header from '../data/header.json';

/**
 * @class Intro
 * @extends {React.Component}
 */
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(intropage_header.data).forEach(function(key) {
            dataArr.push(intropage_header.data[key]);
        });

        return (
            <Container textAlign='left'>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <IntroPage_Header
                                title={item.title}         
                                vers={item.vers} />
                        );
                    })
                }
                <Divider />
                <Abstract />

                <Reference />
            </Container>
        );
    }
}

/* Export module */
export default Intro;