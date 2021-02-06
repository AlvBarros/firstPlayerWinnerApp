import React, { FunctionComponent } from "react";
import { View } from "react-native";

type VisibilityComponentProps = {
    visible: boolean;
}

const VisibilityComponent: FunctionComponent<VisibilityComponentProps> = ({ children, visible }) => {
    
    const _visible = visible;
    
    return (
        <View>
        { _visible && children }
        </View>
    );
}

export default VisibilityComponent;