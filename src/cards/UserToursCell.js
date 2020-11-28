import React, {useState} from 'react';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import defHS from "../img/defaultHS.png";
import Card from "@vkontakte/vkui/dist/components/Card/Card";

const UserToursCell = (props) => {

    return (
        <Card size="m" mode="shadow" >
            <div style={{
                height: 200,
                width: 300
            }} >
                <table style={{display:'flex',width : '100%', height: '50%',
                }}>
                    <Avatar src={defHS} align={"Center"} mode={"app"}
                            style={{marginBottom : 50, height: 100, width: 300,
                                overflow : "hidden", objectFit : "cover"}}/>
                </table>
                <table style={{width : '100%'}}>
                    <tr style={{width : '100%'}}>
                        <td style={{
                            width: '50%',
                            color: 'Green',
                            textAlign: 'center'
                        }} >
                            {(props.title["StartData"] != null) ? 'Начало: '+props.title["StartData"] : ''}
                            {(props.title["StartTime"] != null) ? ' ' + props.title["StartTime"] : ''}
                        </td>
                        <td style={{
                            width: '50%',
                            color: 'Red',
                            textAlign: 'center'
                        }}>
                            {(props.title["EndData"] != null) ? 'Окончание: ' + props.title["EndData"] : ''}
                            {(props.title["EndData"] != null) ? ' ' + props.title["EndTime"] : ''}
                        </td>
                    </tr>
                </table>
                <table style={{width : '100%'}}>
                    <tr style={{width: '100%'}}>
                        <td style={{
                            width: '100%',
                            textAlign: 'center',
                            fontSize: 'large'
                        }}>
                            {props.title["Name"]}
                        </td>
                    </tr>
                </table>
                <table style={{width : '100%'}}>
                    <tr style={{width : '100%'}}>
                        <td style={{
                            width: '50%',
                            textAlign: 'center'
                        }} >
                            {(props.title["Prize"] != null) ? 'Призовой фонд: ' + props.title["Prize"] : ''}
                        </td>
                        <td style={{
                            width: '50%',
                            textAlign: 'center'
                        }}>
                            {(props.title["EnterPrice"] != null) ? 'Вход: ' + props.title["EnterPrice"] : ''}
                        </td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}

export default UserToursCell