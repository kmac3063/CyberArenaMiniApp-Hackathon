import Home from "./tabs/Home";
import React, {useState} from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import View from "@vkontakte/vkui/dist/components/View/View";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Profile from "./tabs/Profile";
import Tavern from "./tabs/Tavern";
import Tournament from "./tabs/Tournament";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, PanelHeaderBack} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PlayerTourView from "./PlayerTourView";
import OrgTourView from "./OrgTourView";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Icon56GhostOutline from '@vkontakte/icons/dist/56/ghost_outline';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const HomeWithTabs = (props) => {
    const [activePanel, setActivePanel] = useState('panel0');
    const [activeTab, setActiveTab] = useState('tournamentTab');
    const [tempProps, setTempProps] = useState(null);

    const changePanel = (name, props) => {
        if (props != null) {
            setTempProps(props);
        }
        setActivePanel(name);
    }
    const showTab  = () => {
        switch (activeTab) {
            case "tournamentTab":
                return <Tournament fetchedUser={props.fetchedUser} changePanel = {changePanel}/>;
            case "tavernTab":
                return <Tavern fetchedUser={props.fetchedUser} changePanel = {changePanel}/>;
            case "profileTab":
                return <Profile fetchedUser={props.fetchedUser} changePanel = {changePanel}/>;
        }
        return null;
    }

    return (<View activePanel={activePanel}>
            <Panel id={"panel0"}>
                <div style={{marginTop : "20%"}}>{<Placeholder
                    icon={<Icon56GhostOutline />}
                    header={`Приветствую, ${props.fetchedUser ? props.fetchedUser.first_name : "XXXXXX"}!`}
                >
                        Отличный день, чтобы поиграть, верно?
                    </Placeholder>}
                    <Div>
                        <Button size="xl" mode="secondary" onClick={() => changePanel("panel1")}>Начать!</Button>
                    </Div>
                </div>
            </Panel>
            <Panel id={"panel1"}>
                <PanelHeader>
                    КиберАрена
                </PanelHeader>
                <Tabs>
                    <TabsItem
                        onClick={() => setActiveTab('tournamentTab')}
                        selected={activeTab === 'tournamentTab'}
                    >
                        Турниры
                    </TabsItem>
                    <TabsItem
                        onClick={() => setActiveTab('tavernTab')}
                        selected={activeTab === 'tavernTab'}
                    >
                        Таверна
                    </TabsItem>
                    <TabsItem
                        onClick={() => setActiveTab('profileTab')}
                        selected={activeTab === 'profileTab'}
                    >
                        Профиль
                    </TabsItem>
                </Tabs>
                {showTab()}
            </Panel>
            <Panel id={"PlayerTourView"}>
                <PanelHeader left={<PanelHeaderBack onClick={() => changePanel('panel1')}/>}>
                    {tempProps && tempProps.title.GameType}
                </PanelHeader>
                <PlayerTourView changePanel={changePanel} props={tempProps}/>
            </Panel>
            <Panel id={"OrgTourView"}>
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => changePanel('panel1')}/>}/>
                <OrgTourView changePanel={changePanel} props={tempProps}/>
            </Panel>
        </View>);
}

export default HomeWithTabs;