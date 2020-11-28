import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import DataBase from "../server/DataBase";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Cell, ModalRoot, Search} from "@vkontakte/vkui";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import CardScroll from "@vkontakte/vkui/dist/components/CardScroll/CardScroll";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import UserToursCell from "../cards/UserToursCell";
import EditProfile from "../modals/EditProfile";
import AddGame from "../modals/AddGame";
import AddService from "../modals/AddService";
import ChangeAvatar from "../modals/ChangeAvatar";
import CreateTournament from "../modals/CreateTournament";

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
                <CreateTournament id="createTournament" out={closeModal} create={createTournament} onClose={closeModal}/>
            </ModalRoot>
            <Group separator="hide">
            <Search value={null} onChange={null} after={null}/>

            </Group>
            <Group separator="hide">
                <Cell
                    asideContent={<PanelHeaderButton onClick={() => {}}>
                        <Icon28AddOutline onClick={() => setActiveModal("createTournament")}/>
                    </PanelHeaderButton>}
                >
                    Мои турниры
                </Cell>
                <CardScroll>
                    {allTournamentsInfo.createdTournaments.map((tour) => {
                        return <UserToursCell title={tour} />
                    })}
                </CardScroll>
            </Group>
            <Group separator="hide">
                <Cell>
                    Турниры в которых я участвую
                </Cell>
                <CardScroll>
                    {allTournamentsInfo.myTournaments.map((tour) => {
                        return <UserToursCell title = {tour}/>
                    })}
                </CardScroll>
            </Group>
            <Group separator="hide">
                <Cell>
                    Рекомендуемые турниры
                </Cell>
                <CardGrid style={{zIndex : 0}} >
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