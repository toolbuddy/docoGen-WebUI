/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Step } from 'semantic-ui-react';

/**
 * @class StepDiagram
 * @extends {React.Component}
 */
class StepDiagram extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return ( 
            <Step.Group>
                {
                    this.props.step.map(function(stepItem, i) {
                        return <Step icon='caret right' title={stepItem.title} description={stepItem.detail} />;
                    })
                }
            </Step.Group>
        );
    }
}

/* Export module */
export default StepDiagram;