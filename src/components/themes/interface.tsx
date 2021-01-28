import { Colors } from "../colors";

export interface FPWTheme {
    backgroundColor: string,
    
    titleColor: string,
    textColor: string,

    primaryButtonColor: string,
    secondaryButtonColor: string
}

export class LightTheme implements FPWTheme {
    backgroundColor = Colors.WHITE;
    titleColor = Colors.PURPLE;
    textColor = Colors.PURPLE;
    primaryButtonColor = Colors.GREEN;
    secondaryButtonColor = Colors.GRAY;
}