import React, {useState} from 'react';
import {Avatar, Separator} from "@vkontakte/vkui";
import DataBase from "../server/DataBase";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Group from "@vkontakte/vkui/dist/components/Group/Group";

const Information = (props) => {

    let tour = DataBase.getTournamentInfo(0); //DataBase.getTournamentInfo(props.id);


    return <div>
        <div style={{marginLeft: 12, marginBottom: 50}}>
            <Avatar src={tour.img} mode={"app"} style={{width: 302, height: 131}}/>
        </div>
        <Separator/>
        <Group>
            <Header mode="secondary">Информация о турнире</Header>
            <SimpleCell multiline>
                <InfoRow header="Организатор">
                    {tour.orgName}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header="Число участников">
                    {tour.maxCommand}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header="Дата начала">
                    {tour.dateBegin}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header="Дата окончания">
                    {tour.dateEnd}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header="Правила">
                    {tour.ruleText}
                </InfoRow>
            </SimpleCell>
            <SimpleCell multiline>
                <InfoRow header="Описание">
                    {tour.tourDescription}
                </InfoRow>
            </SimpleCell>
        </Group>

    </div>;

}

export default Information;
