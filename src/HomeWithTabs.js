import Home from "./panels/Home";
import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import View from "@vkontakte/vkui/dist/components/View/View";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import PanelHeaderContext from "@vkontakte/vkui/dist/components/PanelHeaderContext/PanelHeaderContext";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import Group from "@vkontakte/vkui/dist/components/Group/Group" ;
import Search from "@vkontakte/vkui/dist/components/Search/Search";
import Counter from "@vkontakte/vkui/dist/components/Counter/Counter";
import List from "@vkontakte/vkui/dist/components/List/List";
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import {AppContainer} from "react-hot-loader";
import Profile from "./panels/Profile";
import Tavern from "./panels/Tavern";
import Tournament from "./panels/Tournament";

class HomeWithTabs extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            activePanel: 'panel1',
            contextOpened: false,
            mode: 'all',
            activeTab: 'tournamentTab',
        };

        this.select = this.select.bind(this);
    }

    select(e) {
        const mode = e.currentTarget.dataset.mode;
        this.setState({ mode, contextOpened: false });
    }

    showTab() {
        if (this.state.activeTab === "tournamentTab") {
            return <Tournament/>;
        } else if (this.state.activeTab === "tavernTab") {
            return <Tavern/>;
        } else if (this.state.activeTab === "profileTab") {
            return <Profile/>;
        }
        return null;
    }

    render () {
        return (<View activePanel={this.state.activePanel}>
            <Panel id={"panel1"}>
                <Tabs>
                    <TabsItem
                        onClick={() => this.setState({ activeTab: 'tournamentTab'})}
                        selected={this.state.activeTab === 'tournamentTab'}
                    >
                        Турниры
                    </TabsItem>
                    <TabsItem
                        onClick={() => this.setState({ activeTab: 'tavernTab'})}
                        selected={this.state.activeTab === 'tavernTab'}
                    >
                        Таверна
                    </TabsItem>
                    <TabsItem
                        onClick={() => this.setState({ activeTab: 'profileTab'})}
                        selected={this.state.activeTab === 'profileTab'}
                    >
                        Профиль
                    </TabsItem>
                </Tabs>
                <Separator />
                {this.showTab()}
            </Panel>
        </View>)
    }
}

export default HomeWithTabs;