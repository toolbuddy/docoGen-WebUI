/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Table } from 'semantic-ui-react';

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
        let dataArr = this.props.value;

        return (
            <Table.Row>
                <Table.Cell collapsing>
                    {this.props.title}
                </Table.Cell>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <Table.Cell>
                                {item}
                            </Table.Cell>
                        );
                    })
                }
            </Table.Row>
        );
    }
}

/* Export module */
export default Tables_Body;