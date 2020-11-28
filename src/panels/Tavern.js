import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";

class Tavern extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.id
        };
    }

    render() {
        return <Group>
            <div>Таверна</div>
        </Group>
    }
}

export default Tavern;