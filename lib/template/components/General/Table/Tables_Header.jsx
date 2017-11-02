/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Table } from 'semantic-ui-react';

/**
 * @class Tables_Header
 * @extends {React.Component}
 */
class Tables_Header extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell 
                        colSpan={this.props.colSpan}
                        style={{
                            padding: '0.5em 0.75em 0.5em'
                        }}>
                        {this.props.caption}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    }
}

/* Export module */
export default Tables_Header;