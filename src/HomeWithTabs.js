import Home from "./panels/Home";
import React, {useState} from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import View from "@vkontakte/vkui/dist/components/View/View";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";

import Profile from "./panels/Profile";
import Tavern from "./panels/Tavern";
import Tournament from "./panels/Tournament";

const HomeWithTabs = (props) => {
    const [activePanel, setActivePanel] = useState('panel1');
    const [activeTab, setActiveTab] = useState('tournamentTab');

    const showTab  = () => {
        if (activeTab === "tournamentTab") {
            return <Tournament/>;
        } else if (activeTab === "tavernTab") {
            return <Tavern/>;
        } else if (activeTab === "profileTab") {
            return <Profile/>;
        }
        return null;
    }

    return (<View activePanel={activePanel}>
            <Panel id={"panel1"}>
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
                <Separator />
                {showTab()}
            </Panel>
        </View>);
}

export default HomeWithTabs;