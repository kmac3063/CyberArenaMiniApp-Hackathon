import React, {useState} from 'react';
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Icon56GhostOutline from '@vkontakte/icons/dist/56/ghost_outline';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Icon56HideOutline from '@vkontakte/icons/dist/56/hide_outline';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import UserToursCell from "../cards/UserToursCell";
import GridCell from "../cards/GridCell";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";

const TourGrid = (props) => {

    let players = [{"name":"Igor"},{"name":"Alex"}, {"name":"Alexander"}, {"name":"Yura"},{"name":"Nastya"} ];
    let pairs = [];
    let last = {
        "one":players[players.length-1]["name"]
    };
    let j = 0;
    if(players.length%2===0){
        for (let i = 0; i<players.length; i+=2){
            pairs.push({
                "first": players[i],
                "second": players[i+1]
            })
        }

    }
    else{

        for (let i = 0; i<players.length; i+=2){
            if(i!=players.length-1)
                pairs.push({
                    "first": players[i]["name"],
                    "second": players[i+1]["name"]
                })
        }
    }
    return(
        <Group>
            <Group>
                {
                    pairs.map((pair1) => {
                    return <GridCell p = {pair1}/>
                })}
            </Group>

                {(last["one"]!==null) ?
                    <Group>
                        <Header mode="secondary">Матч {props.k}</Header>
                        <SimpleCell before={<Avatar size={36} />}
                                    after={<Radio name="radio" id="1"/>}>
                            <Text style={{paddingLeft : 20}}>{last["one"]}</Text>
                        </SimpleCell>
                </Group> :
                    <Group/>
                }
        </Group>
    )

}

export default TourGrid;
