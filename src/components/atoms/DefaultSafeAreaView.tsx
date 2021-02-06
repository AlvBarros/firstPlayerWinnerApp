import React, { FunctionComponent } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";

type DefaultSafeAreaViewProps = {
    theme?: FPWTheme;
}

const styles = (theme: FPWTheme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between',
            
            backgroundColor: theme.backgroundColor,
        }
    });
}

const DefaultSafeAreaView: FunctionComponent<DefaultSafeAreaViewProps> = ({children, theme}) => {
    const _theme = !!theme ? theme : new LightTheme();

    return (
        <SafeAreaView style={styles(_theme).container}>
            <View style={{flex: 1, padding: '10%'}}>
                { children }
            </View>
        </SafeAreaView>
    );
}

export default DefaultSafeAreaView;