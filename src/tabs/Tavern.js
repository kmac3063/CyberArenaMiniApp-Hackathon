import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";

const Tavern = props => {

    return (
        <Group>
            <Title level="2" weight="semibold" style={{textAlign : "left", paddingLeft: 44}} separator={false}>Игровые сообщества</Title>


        </Group>)
}

export default Tavern;