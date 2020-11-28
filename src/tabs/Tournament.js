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
import {Cell, Search, Separator} from "@vkontakte/vkui";
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
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import OtherToursCell from "../cards/OtherToursCell";
import Icon16Add from '@vkontakte/icons/dist/16/add';

const Tournament = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    let allTournamentsInfo = DataBase.getUserTournamentsInfo(props.fetchedUser);

    const closeModal = () => setActiveModal(null);
    const createTournament = (tour) => {
        // console.log(tour.tourName);
        // console.log(tour.dateBegin);
        // console.log(tour.dateEnd);
        // console.log(tour.ruleText);
        // console.log(tour.tourTupe);
        // console.log(tour.maxCommand);
        // console.log(tour.gameName);
        // console.log(tour.tourDescription);
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
                    <Group >
                        <Banner
                            mode="image"
                            header="У вас ещё нету созданных турниров"
                            subheader="Создать?"
                            background={
                                <div
                                    style={{
                                        backgroundColor: '#65c063',
                                        backgroundImage: newTourCard,
                                        backgroundPosition: 'right bottom',
                                        backgroundSize: 320,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            }
                            actions={<Button mode="overlay_primary"
                            onClick={() => {setActiveModal("createTournament")}}>
                                Создать новый турнир
                            </Button>}
                        />
                    </Group>
                :
                    <CardScroll>
                        {allTournamentsInfo.createdTournaments.map((tour) => {
                            return <UserToursCell title={tour} changePanel = {props.changePanel}/>
                        })}
                    </CardScroll>}
            </Group>
            <Separator/>
            <Group style={{ position: 'relative', zIndex: 0, marginBottom : 20}}>
                <Header mode="secondary">Турниры в которых я участвую</Header>


                    {allTournamentsInfo.myTournaments.map((tour) => {
                        return <UserToursCell title = {tour} changePanel = {props.changePanel}/>
                    })}

            </Group>
            <Separator/>
            <Group  style={{ position: 'relative', zIndex: 0, marginBottom : 20}}>
                <Header mode="secondary">Рекомендуемые турниры</Header>
                {allTournamentsInfo.recomendedTournaments.map((tour) => {
                    return <OtherToursCell title = {tour} changePanel = {props.changePanel}/>
                })}
            </Group>
            <Banner
                header="Главное о киберспорте"
                subheader="Объявлены победители региональной серии Blitz CIS Cup по World of Tanks Blitz"
                asideMode="expand"
                onClick={() => {}}
                style={{marginBottom : 20}}
            />
        </Group>

    )
}

export default Tournament;