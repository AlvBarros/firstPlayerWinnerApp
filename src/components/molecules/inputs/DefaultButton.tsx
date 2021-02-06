import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from '../../colors';
import DefaultText from "../../atoms/DefaultText";
import ClickableComponent from "../../atoms/ClickableComponent";

type DefaultButtonProps = {
    title: string;
    onPress: Function;
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: Colors.GREEN,
        borderRadius: 5,
        paddingVertical: 9,
        alignItems: 'center'
    }
});

const DefaultButton: FunctionComponent<DefaultButtonProps> = ({ onPress, title }) => {
    return (
        <ClickableComponent onPress={() => onPress()}>
            <View style={[ styles.appButtonContainer ]}>
                    <DefaultText color={Colors.WHITE}>
                        {title}
                    </DefaultText>
            </View>
        </ClickableComponent>
    );
};

export default DefaultButton;