import React, { FunctionComponent } from "react";
import { Image, StyleSheet } from "react-native";
import { FPWTheme, LightTheme } from "../themes/interface";

type LogoProps = {};
const LOGOPATH = require("../../assets/logo_fpw_1_reduced.png");

const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <Image style={{flex: 1, resizeMode: 'contain'}} source={LOGOPATH} />
    );
}

export default Logo;