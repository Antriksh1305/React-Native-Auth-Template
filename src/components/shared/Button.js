import React from "react";
import { Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

const Button = React.memo((props) => {
    console.log("Button Clicked in: " + props.Title);
    return (
        <TouchableHighlight style={props.BtnHighlight} onPress={props.handleonPress}>
            <View style={props.BtnBox}>
                <Text style={props.BtnTxt}>{props.Title}</Text>
            </View>
        </TouchableHighlight>
    );
}, (prevProps, nextProps) => {
    // Compare relevant props to determine if the component should update
    return (
        prevProps.Title === nextProps.Title &&
        prevProps.BtnHighlight === nextProps.BtnHighlight &&
        prevProps.handleonPress === nextProps.handleonPress &&
        prevProps.BtnBox === nextProps.BtnBox &&
        prevProps.BtnTxt === nextProps.BtnTxt
    );
});

export default Button;
