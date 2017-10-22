/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Table } from 'semantic-ui-react';

/**
 * @class Tables
 * @extends {React.Component}
 */
class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>Table: Table Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>node_modules</Table.Cell>
                        <Table.Cell>Initial commit</Table.Cell>
                        <Table.Cell>10 hours ago</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>test</Table.Cell>
                        <Table.Cell>Initial commit</Table.Cell>
                        <Table.Cell>10 hours ago</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>build</Table.Cell>
                        <Table.Cell>Initial commit</Table.Cell>
                        <Table.Cell>10 hours ago</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

/* Export module */
export default Tables;