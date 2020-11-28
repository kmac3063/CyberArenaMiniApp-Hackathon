import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase";
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Cell, Search} from "@vkontakte/vkui";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import defHS from '../img/defaultHS.png';
import UserToursCell from "../cards/UserToursCell";

const Tournament = (props) => {
    let allTournamentsInfo = DataBase.getUserTournamentsInfo(props.fetchedUser);
    return (
        <Group>
            <Group separator="hide">
            <Search value={null} onChange={null} after={null}/>

            </Group>
            <Group separator="hide">
                <Cell
                    asideContent={<PanelHeaderButton onClick={() => {}}><Icon28AddOutline/></PanelHeaderButton>}
                >
                    Мои турниры
                </Cell>
                <CardScroll>
                    {allTournamentsInfo.createdTournaments.map(tour => {
                        return <UserToursCell title={tour}/>
                    })}
                </CardScroll>
            </Group>
            <Group separator="hide">
                <Cell>
                    Турниры в которых я участвую
                </Cell>
                <CardScroll>
                    {allTournamentsInfo.myTournaments.map(tour => {
                        return <UserToursCell props={tour}/>
                    })}
                </CardScroll>
            </Group>
            <Group separator="hide">
                <Cell>
                    Рекомендуемые турниры
                </Cell>
                <CardGrid>
                    <Card size="m" >
                        <div style={{
                            height: 120}}>
                        </div>
                    </Card>
                    <Card size="m">
                        <div style={{
                            height: 120}} />
                    </Card>
                    <Card size="m">
                        <div style={{
                            height: 120}} />
                    </Card>
                    <Card size="m">
                        <div style={{
                            height: 120}}/>
                    </Card>
                </CardGrid>
            </Group>
        </Group>

    )
}

export default Tournament;