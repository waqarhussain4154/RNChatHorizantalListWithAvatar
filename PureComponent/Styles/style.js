import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import fonts from "../../../../Components/fonts";

const styles = StyleSheet.create({
  myChatsMainContainer: {
    width: wp(95),
    flexDirection: "row",
  },
  mainTouchContainer: {
    marginTop: hp(1),
    width: wp(93),
    paddingLeft: wp(4),
    marginBottom: wp(3),
  },
  mainItemContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  myChatsLinearGradientContainer: {
    width: 70,
    height: 70,
    borderRadius: wp(12),
    borderWidth: hp(2),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  },
  addUserContainer: {
    width: 62,
    height: 62,
    borderRadius: wp(12),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  myChatsBadgeContainer: {
    position: "absolute",
    top: 4,
    right: 1,
    elevation: 5,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 20,
  },
  myChatsBadgeStyleContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#31D709",
  },
  toNameContainer: {
    marginLeft: wp(2),
    width: wp(45),
  },
  toNameTextContainer: {
    color: "#434B56",
    textAlign: "left",
    fontSize: RFPercentage(1.7),
  },
  shipmentTitleTextContainer: {
    width: wp(50),
    height: hp(2.2),
    color: "#434B56",
    textAlign: "left",
    fontSize: RFPercentage(1.5),
  },
  shipmentTitleHeaderContainer: {
    flexDirection: "row",
  },
  shipmentCategoryNameContainer: {
    color: "#FF7F72",
    textAlign: "left",
    fontSize: RFPercentage(1.6),
  },
  lastSceenTextContainer: {
    color: "#787C81",
    marginLeft: wp(3),
    fontSize: RFPercentage(1.6),
  },
});

export default styles;
