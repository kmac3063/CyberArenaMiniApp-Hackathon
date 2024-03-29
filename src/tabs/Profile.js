import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
import {SimpleCell} from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import GameCell from "../cards/GameCell";
import ServiceCell from "../cards/ServiceCell";
import AddService from "../modals/AddService";
import AddGame from "../modals/AddGame";
import EditProfile from "../modals/EditProfile";
import ChangeAvatar from "../modals/ChangeAvatar";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

const Profile = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);
    let user = DataBase.getUserInfo(props.fetchedUser);

    const closeModal = () => {
        setActiveModal(null);
    }

    const saveProfile = (text) => {
        console.log(text);
        closeModal();
    }
    const saveGame = (text) => {
        console.log(text);
        closeModal();
    }
    const saveService = (text) => {
        console.log(text);
        closeModal();
    }
    const saveAvatar = (img) => {
        setUserAvatar(img);
        closeModal();
    }

    let link = 'https://vk.com/id' + user.id;
    return (<Group>
        <Group>
            <Header mode="first" style={{marginBottom: 30}}>Основная информация</Header>
        </Group>
        <ModalRoot activeModal={activeModal}>
            <EditProfile id="editProfile" out={closeModal} save={saveProfile} onClose={closeModal}/>
            <AddGame id="addGame" out={closeModal} save={saveGame} onClose={closeModal}/>
            <AddService id="addService" out={closeModal} save={saveService} onClose={closeModal}/>
            <ChangeAvatar id="changeAvatar" out={closeModal} save={saveAvatar} onClose={closeModal}/>
        </ModalRoot>

        {props.fetchedUser && <RichCell style={{padding : "0px 5%"}}
            disabled
            multiline
            before={<Avatar size={54} src={userAvatar ? userAvatar : user.avatar} onClick={() => setActiveModal("changeAvatar")}/>}
            caption={"Никнейм: BLGALEX"}
            after={<Icon28WriteSquareOutline onClick={()=>{setActiveModal("editProfile")}}/>}>
                    {user.nickname}
                </RichCell>}

        <CardGrid style={{"position" : "relative", "zIndex" : "0"}}>
            <Group separator={"show"}>
                <SimpleCell before={<PanelHeaderButton onClick={() => setActiveModal("addGame")}>
                    <Icon24Add/>
                </PanelHeaderButton>}>
                    <Text weight={"regular"} >Игры</Text>
                </SimpleCell>
                <div>
                    <div style={{ height: 110, backgroundColor : "", "overflowY" : "auto"}}>
                        <Group>
                            {user.games.map(gameName => {
                                return <GameCell title = {gameName} img={DataBase.getGameAvatar(gameName)}/>
                            })}
                        </Group>
                    </div>
                </div>
            </Group>
        </CardGrid>
        <SimpleCell>
            <InfoRow header="Ссылка ВКонтакте">
                {/*<Link href=link>{user.firstName} {user.secondName}</Link>*/}
            </InfoRow>
        </SimpleCell>
    </Group>)
}

export default Profile;