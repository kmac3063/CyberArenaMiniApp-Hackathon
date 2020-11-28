import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import DataBase from "../server/DataBase";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import UserToursCell from "../cards/UserToursCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {Cell, FixedLayout, Search, View} from "@vkontakte/vkui";
import List from "@vkontakte/vkui/dist/components/List/List";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import PromoBanner from "@vkontakte/vkui/dist/components/PromoBanner/PromoBanner";

const Tavern = props => {
    let allTavern = DataBase.getTavernInfo(props.fetchedUser);

    const promoBannerProps = {
        title: 'Заголовок',
        domain: 'vk.com',
        trackingLink: 'https://vk.com',
        ctaText: 'Перейти',
        advertisingLabel: 'Реклама',
        iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
        description: 'Описание рекламы',
        ageRestrictions: "14+",
        statistics: [
            { url: '', type: 'playbackStarted' },
            { url: '', type: 'click' }
        ]
    };
    return (
        <Group>
            <Header mode="secondary">Игровые сообщества</Header>
            <Group separator={"show"}>
                <List>
                    <Cell before={<Avatar src={allTavern.publics[0]["publicAv"]}/>} description={allTavern.publics[0]["population"]}>{allTavern.publics[0]["name"]}</Cell>
                    <Cell before={<Avatar src ={allTavern.publics[1]["publicAv"]}/>} description={allTavern.publics[1]["population"]}>{allTavern.publics[1]["name"]}</Cell>
                </List>
            </Group>
            <Header mode="secondary">Поиск напарников</Header>
            <Group separator={"show"}>
                <Search/>
                <List>
                    <Cell before={<Avatar />} description={"Among us"}>Алексей Алексеев</Cell>
                    <Cell before={<Avatar />} description={"DOTA 2"}>Иван Петров</Cell>
                    <Cell before={<Avatar />} description={"Startcraft 2"}>Александр Саранцев</Cell>
                    <Cell before={<Avatar />} description={"Among us"}>Алексей Алексеев</Cell>
                    <Cell before={<Avatar />} description={"DOTA 2"}>Иван Петров</Cell>
                    <Cell before={<Avatar />} description={"Startcraft 2"}>Александр Саранцев</Cell>
                    <Cell before={<Avatar />} description={"Among us"}>Алексей Алексеев</Cell>
                    <Cell before={<Avatar />} description={"DOTA 2"}>Иван Петров</Cell>
                    <Cell before={<Avatar />} description={"Startcraft 2"}>Александр Саранцев</Cell>
                </List>
            </Group>

                    <FixedLayout vertical="bottom">
                        <PromoBanner bannerData={promoBannerProps} />
                    </FixedLayout>
        </Group>)
}

export default Tavern;