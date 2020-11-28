import React, {useState} from 'react';
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
import newTourCard from '../img/newTourCard.png';
import UserToursCell from "../cards/UserToursCell";
import CreateTournament from "../modals/CreateTournament";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";

const Tournament = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    let allTournamentsInfo = DataBase.getUserTournamentsInfo(props.fetchedUser);

    const closeModal = () => setActiveModal(null);
    const createTournament = (tour) => {
        closeModal();
    }
    return (
        <Group>
            <ModalRoot activeModal={activeModal}>
                <CreateTournament id="createTournament" out={closeModal}
                                  create={createTournament} onClose={closeModal}/>
            </ModalRoot>
            <Group separator="hide">
            <Search value={null} onChange={null} after={null}/>

            </Group>
            <Group separator="hide" style={{ position: 'relative', zIndex: 0 }}>
                <Cell
                    asideContent={<PanelHeaderButton onClick={() => {setActiveModal("createTournament")}}>
                        <Icon28AddOutline/>
                    </PanelHeaderButton>}
                >
                    Мои турниры
                </Cell>
                {(allTournamentsInfo.createdTournaments.length == 0) ?
                    <table style={{width:'100%'}} align={"center"}>
                        <tr style={{width:'100%'}} align={"center"}>
                            <td style={{width:'100%', display:'flex'}} align={"center"}>
                                <Card size="m" style={{background: 'Green'}}>
                                    <table style={{display:'flex',width : '100%', height: '100%',
                                    }}>
                                        <Avatar src={newTourCard} align={"Center"} mode={"app"}
                                                style={{marginBottom : 50, height: 100, width: 300,
                                                    overflow : "hidden", objectFit : "cover"}}>
                                            <Title weight={"bold"} level={"3"} style={{textAlign : "center", paddingLeft: 30}}>
                                                Создать новый турнир
                                            </Title>
                                        </Avatar>
                                        <div style={{height: 100, width: 300}}/>
                                    </table>
                                </Card>
                            </td>
                        </tr>
                    </table>
                :
                    <CardScroll>
                        {allTournamentsInfo.createdTournaments.map((tour) => {
                            return <UserToursCell title={tour}/>
                        })}
                    </CardScroll>}
            </Group>
            <Group separator="hide" style={{ position: 'relative', zIndex: 0 }}>
                <Cell>
                    Турниры в которых я участвую
                </Cell>
                <CardScroll>
                    {allTournamentsInfo.myTournaments.map((tour) => {
                        return <UserToursCell title = {tour}/>
                    })}
                </CardScroll>
            </Group>
            <Group separator="hide" style={{ position: 'relative', zIndex: 0 }}>
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