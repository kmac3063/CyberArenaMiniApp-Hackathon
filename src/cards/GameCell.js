import React, {useState} from 'react';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import {Button} from "@vkontakte/vkui";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";

const GameCell = (props) => {
    return (
        <Cell before={<Avatar size={48} src={props.img} />}
                    asideContent={<PanelHeaderButton><Icon24Cancel/></PanelHeaderButton>}>
            {props.title}
        </Cell>)
}

export default GameCell