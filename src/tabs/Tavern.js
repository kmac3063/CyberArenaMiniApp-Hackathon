import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import DataBase from "../server/DataBase";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import UserToursCell from "../cards/UserToursCell";

const Tavern = props => {
    let allTavern = DataBase.getTavernInfo(props.fetchedUser);
    return (
        <Group>
            <Title level="2" weight="semibold" style={{textAlign : "left", paddingLeft: 44}} separator={false}>Игровые сообщества</Title>
            <Group>
                <CardScroll>
                    {allTavern.publics.map((pub) => {
                        return <UserToursCell title={pub}/>
                    })}
                </CardScroll>
            </Group>
        </Group>)
}

export default Tavern;