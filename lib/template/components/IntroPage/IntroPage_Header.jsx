/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card } from 'semantic-ui-react';

/* Import components */
import IntroPage_Author from './IntroPage_Author.jsx';
import IntroPage_Title from './IntroPage_Title.jsx'

/* Import data */
import intropage_author from '../../data/author.json';

/**
 * @class IntroHeader
 * @extends {React.Component}
 */
class IntroPage_Header extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = [];
        Object.keys(intropage_author.data).forEach(function(key) {
            dataArr.push(intropage_author.data[key]);
        });

        return (
            <div>
                <IntroPage_Title title={this.props.title} vers={this.props.vers} />
                <Card.Group itemsPerRow={3}>
                    {
                        dataArr.map(function(item, i) {
                            return <IntroPage_Author 
                                        email={item.email} 
                                        name={item.name}
                                        phone={item.phone}
                                        unit={item.unit}
                                        website={item.website} />
                        })
                    }
                </Card.Group>
            </div>
        );
    }
}

/* Export module */
export default IntroPage_Header;