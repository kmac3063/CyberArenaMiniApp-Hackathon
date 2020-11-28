import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {PanelHeaderBack} from "@vkontakte/vkui";

const OrgTourView = (props) => {

    return <Group>
        <PanelHeader separator={false} left={<PanelHeaderBack onClick={() =>{props.changePanel("panel1")}}/>}>
            1234
        </PanelHeader>
    </Group>
}

export default OrgTourView