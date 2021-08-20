import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const editstyles = StyleSheet.create({
  scroll: {},
  chat: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
    color: colors.black,
    fontWeight: "bold",
  },
  list: {
    color: colors.gray,
    fontSize: 17,
    fontWeight: "400",
  },
  group: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    alignItems: "center",
    marginTop: 15,
  },
  right: {
    color: colors.black,
  },
  bar: {
    height: 60,
  },
  left: {
    color: colors.blue,
    fontSize: 18,
  },
});
