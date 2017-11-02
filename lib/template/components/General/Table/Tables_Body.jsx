/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Table } from 'semantic-ui-react';

/* Import components */
import Tables_Row from './Tables_Row.jsx';

/**
 * @class Tables_Body
 * @extends {React.Component}
 */
class Tables_Body extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = this.props.tbody;

        return (
            <Table.Body>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <Tables_Row 
                                title={item.title}
                                value={item.value} />
                        );
                    })
                }
            </Table.Body>
        );
    }
}

/* Export module */
export default Tables_Body;