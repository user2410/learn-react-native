import { theme } from "../../../App.style";
import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
	appBar: {
		backgroundColor: theme.colors.primary
	},
	menu: {
		color: 'white'
	},
	appBarTitle: {
		color: 'white'
	}
})