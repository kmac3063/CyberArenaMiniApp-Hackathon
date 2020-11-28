import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
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
                    <Card size="l" mode="outline" >
                        <div style={{
                            height: 120}} />
                    </Card>
                </CardScroll>
            </Group>
            <Group separator="hide">
                <Cell>
                    Турниры в которых я участвую
                </Cell>
                <CardScroll>
                    <Card size="m" mode="shadow" >
                        <div style={{
                            height: 228,
                            width: 448
                        }} >
                            <table style={{display:'flex',width : '100%', height: '50%',
                                }}>
                                <img src={defHS} width={"100%"} align={"Center"} />
                            </table>
                            <table style={{width : '100%'}}>
                                <tr style={{width : '100%'}}>
                                    <td style={{
                                        width: '50%',
                                        color: 'Green',
                                        textAlign: 'center'
                                    }} >
                                        Начало: {allTournamentsInfo.myTournaments[1]["StartData"]} {allTournamentsInfo.myTournaments[1]["StartTime"]}
                                    </td>
                                    <td style={{
                                        width: '50%',
                                        color: 'Red',
                                        textAlign: 'center'
                                    }}>
                                        Окончание: {allTournamentsInfo.myTournaments[1]["EndData"]} {allTournamentsInfo.myTournaments[1]["EndTime"]}
                                    </td>
                                </tr>
                            </table>
                            <table style={{width : '100%'}}>
                                <tr style={{width: '100%'}}>
                                    <td style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        fontSize: 'large'
                                    }}>
                                        {allTournamentsInfo.myTournaments[1]["Name"]}
                                    </td>
                                </tr>
                            </table>
                            <table style={{width : '100%'}}>
                                <tr style={{width : '100%'}}>
                                    <td style={{
                                        width: '50%',
                                        textAlign: 'center'
                                    }} >
                                        Призовой фонд: {allTournamentsInfo.myTournaments[1]["Prize"]}
                                    </td>
                                    <td style={{
                                        width: '50%',
                                        textAlign: 'center'
                                    }}>
                                        Вход: {allTournamentsInfo.myTournaments[1]["EnterPrice"]}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Card>
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