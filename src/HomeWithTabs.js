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
import {IOS} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PlayerTourView from "./PlayerTourView";
import OrgTourView from "./OrgTourView";

const HomeWithTabs = (props) => {
    const [activePanel, setActivePanel] = useState('panel1');
    const [activeTab, setActiveTab] = useState('tournamentTab');

    const changePanel = (name) => {
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
            <Panel id={"playerTourView"}>
                <PlayerTourView changePanel={changePanel}/>
            </Panel>
            <Panel id={"OrgTourView"}>
                <OrgTourView changePanel={changePanel}/>
            </Panel>
        </View>);
}

export default HomeWithTabs;