import React, {useState} from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.id
        };
    }

    render() {
        return <Group>
            <div>Профиль</div>
        </Group>
    }
}

export default Profile;