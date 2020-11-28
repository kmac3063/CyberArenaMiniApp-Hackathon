import React, {useState} from 'react';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {PanelHeaderBack} from "@vkontakte/vkui";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Information from "./tabs/Infromation";
import TourGrid from "./tabs/TourGrid";
import Participants from "./tabs/Participants";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const PlayerTourView = (props) => {
    const [activeTab, setActiveTab] = useState("information"); // tourGrid, participants

    const showTab = () => {
        switch (activeTab) {
            case "information":
                return <Information props={props}/>; // сюда надо передать id турнира
            case "tourGrid":
                return <TourGrid/>;
            case "participants":
                return <Participants/>;
        }
        return null;
    }

    return <Div>
        <Tabs>
            <TabsItem
                onClick={() => setActiveTab('information')}
                selected={activeTab === 'information'}
            >
                Информация
            </TabsItem>
            <TabsItem
                onClick={() => setActiveTab('tourGrid')}
                selected={activeTab === 'tourGrid'}
            >
                Сетка
            </TabsItem>
            <TabsItem
                onClick={() => setActiveTab('participants')}
                selected={activeTab === 'participants'}
            >
                Участники
            </TabsItem>
        </Tabs>
        {showTab()}
    </Div>
}

export default PlayerTourView