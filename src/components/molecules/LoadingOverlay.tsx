import React, { FunctionComponent } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Overlay } from 'react-native-elements';
import { ConfigStore } from "../../redux/Config/store";
import LoadingIcon from "../atoms/LoadingIcon";
import { Colors } from "../colors";

type LoadingOverlayProps = {
    visible: boolean,
};

const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.BLACK,
        justifyContent: 'center'
    },
    loadingOverlay: {}
});

const LoadingOverlay: FunctionComponent<LoadingOverlayProps> = ({ visible }) => {
    return (
        <View style={[styles.overlayContainer, {
                opacity: !visible ? 0 : 0.8, 
                zIndex: !visible ? -100000 : 100000}]}
        >
            <View style={styles.loadingOverlay}>
                <LoadingIcon size='large' />
            </View>
        </View>
    );
}

export default LoadingOverlay;