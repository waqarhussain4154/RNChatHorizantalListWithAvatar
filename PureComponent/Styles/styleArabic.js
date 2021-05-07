import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  myChatsMainContainer: {
    width: "100%",
  },
  mainTouchContainer: {
    marginTop: hp(1),
    width: wp(99),
    paddingRight: wp(4),
    marginBottom: wp(3),
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mainItemContainer: {
    width: wp(20),
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
    left: 1,
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
    marginRight: wp(3),
    width: wp(70),
    alignItems: "flex-end",
  },
  toNameTextContainer: {
    color: "#434B56",
    fontSize: RFPercentage(1.7),
    textAlign: "right",
  },
  shipmentTitleTextContainer: {
    width: wp(50),
    height: hp(2),
    color: "#434B56",
    textAlign: "right",
    fontSize: RFPercentage(1.5),
  },
  shipmentTitleHeaderContainer: {
    flexDirection: "row",
  },
  shipmentCategoryNameContainer: {
    color: "#FF7F72",
    marginTop: hp(0.6),
    textAlign: "right",
    fontSize: RFPercentage(1.6),
  },
  lastSceenTextContainer: {
    textAlign: "left",
    color: "#787C81",
    marginTop: hp(0.8),
    marginRight: wp(5),
    fontSize: RFPercentage(1.6),
  },
});

export default styles;
