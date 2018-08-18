import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { styles } from './fishbowlListStyles'
export default class listItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('fishbowlSet')} >
                <View style={styles.container} >
                    <View style={styles.topArea}>
                        <Text>水族箱名:{this.props.fishbowlName}</Text>
                    </View>
                    <View style={styles.midArea}>
                        <View style={styles.dataArea}>
                            <Text style={styles.dataWord} >温度:{this.props.temperature}</Text>
                            <Text style={styles.dataWord}>喂食:{this.props.feed}</Text>
                            <Text style={styles.dataWord}>PH:{this.props.PH}</Text>
                        </View>
                        <View style={styles.workTime}>
                            <Text>工作时间:{this.props.workTime}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomArea}>
                        <Text>地址:{this.props.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )

    }
}