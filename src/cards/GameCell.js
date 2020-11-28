import React, {useState} from 'react';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

const GameCell = (props) => {
    return (
        <SimpleCell before={<Avatar size={36} src={props.img} />}
                    after={<PanelHeaderButton><Icon24Cancel /></PanelHeaderButton>}>
            <Text style={{paddingLeft : 20}}>{props.title}</Text>
        </SimpleCell>)
}

export default GameCell