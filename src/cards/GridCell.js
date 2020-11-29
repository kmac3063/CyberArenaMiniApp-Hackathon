import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import React from "react";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon24Cancel from "@vkontakte/icons/dist/24/cancel";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

const GridCell = (props) => {
    return (
        <Group separator={"show"}>
            <Header mode="secondary">Матч {props.p["first"]}-{props.p["second"]}</Header>
            <SimpleCell before={<Avatar size={36} />}
                        after={<Radio name={props.p["first"]} id="1"/>}>
                <Text style={{paddingLeft : 20}}>{props.p["first"]}</Text>
            </SimpleCell>
            <SimpleCell before={<Avatar size={36} />}
                        after={<Radio name={props.p["first"]} id="2"/>}>
                <Text style={{paddingLeft : 20}}>{props.p["second"]}</Text>
            </SimpleCell>
        </Group>

    )
}


export default GridCell