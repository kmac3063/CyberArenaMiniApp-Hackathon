import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import DataBase from "../server/DataBase"
import Icon28WriteSquareOutline from '@vkontakte/icons/dist/28/write_square_outline';
import {Button, ModalPage, ModalRoot, Search, SimpleCell} from "@vkontakte/vkui";
import ModalPageHeader from "@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import GameCell from "../cards/GameCell";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import ServiceCell from "../cards/ServiceCell";
import Icon24Add from '@vkontakte/icons/dist/24/add';

const Profile = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    let user = DataBase.getUserInfo(props.fetchedUser);

    const save = () => {
        console.log("save");
        setActiveModal(null);
    }

    return (<Group>
        <Title level="2" weight="semibold" style={{"textAlign" : "center"}} separator={false}>Основная информация</Title>
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={"editProfile"}
                onClose={() => {setActiveModal(null)}}
                header={
                    <ModalPageHeader
                        left={<PanelHeaderButton onClick={() => {setActiveModal(null)}}><Icon24Cancel/></PanelHeaderButton>}
                        right={<PanelHeaderButton onClick={save}><Icon24Done/></PanelHeaderButton>}
                    >
                        Редактирование
                    </ModalPageHeader>
                }
            >
                <FormLayout>
                    <Textarea top="Новый никнейм" placeholder="Введите новый никнейм" />
                </FormLayout>
            </ModalPage>
        </ModalRoot>
        {props.fetchedUser && <RichCell style={{padding : "0px 5%"}}
            disabled
            multiline
            before={<Avatar size={54} src={user.avatar}/>}
            text={props.fetchedUser.city.title}
            caption={props.fetchedUser.city.title}
            after={<Icon28WriteSquareOutline onClick={()=>{setActiveModal("editProfile")}}/>}>
                    {user.nickname}
                </RichCell>}

        <CardGrid style={{"position" : "relative", "zIndex" : "0"}}>
            <Card size="l" mode="shadow" style={{marginTop : 20}}>
                <SimpleCell after={<PanelHeaderButton><Icon24Add/></PanelHeaderButton>}>
                    Игры</SimpleCell>
                <div>

                    <div style={{ height: 110, backgroundColor : "", "overflowY" : "auto"}}>
                        <Group>
                            {user.games.map(gameName => {
                                return <GameCell title = {gameName} img={DataBase.getGameAvatar(gameName)}/>
                            })
                            }
                        </Group>
                    </div>
                </div>
            </Card>

            <Card size="l" mode="shadow" style={{marginTop : 15}}>
                <SimpleCell after={<PanelHeaderButton><Icon24Add/></PanelHeaderButton>}>Ссылки</SimpleCell>
                <div style={{ height: 110, backgroundColor : "", "overflowY" : "auto"}}>
                    <Group>
                        {user.services.map(serviceName => {
                            return <ServiceCell title = {serviceName} img={DataBase.getServiceAvatar(serviceName)}/>
                        })
                        }
                    </Group>
                </div>
            </Card>
        </CardGrid>
    </Group>)
}

export default Profile;