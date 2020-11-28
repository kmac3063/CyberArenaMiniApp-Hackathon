import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {PanelHeaderBack} from "@vkontakte/vkui";

const PlayerTourView = (props) => {

    return <Group>
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
            123
        </PanelHeader>
    </Group>
}

export default PlayerTourView