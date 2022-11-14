import React, {useState} from 'react';
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;

function RadioBox(props) {

    const [Value, setValue] = useState(0)
    

    const renderRadioBox = () => (
        props.list && props.list.map(value => (
            <Radio key={value._id} value={value._id}>{value.name}</Radio>
        ))
    )

    
    const hadleChange = (e) => {
        setValue(e.target.value)
        props.handleFilters(e.target.value);
    }


    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Price" key="1">
                    <Radio.Group onChange={hadleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
