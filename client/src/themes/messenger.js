import {
  gradient,
  shadow,
  white,
  gray,
  athensGray,
  athensGray1,
  textColor,
  royalBlue,
  gost,
  green,
  goldenSand,
  sidebarWidth
} from "./colors";

const messengerTheme = {
  global: {
    white,
    gradient,
    textColor,
    favoritesColor: goldenSand,
    onlineColor: green
  },
  login: {
    bgColor: white,
    rightBgColor: gradient,
    rightlabel: white,
    formWrapperLeft: "50%",
    showMessengerFormTitle: "block",
    formItemBorderRadius: "20px",
    loginBtnBgColor: gradient,
    loginBtnColor: white,
    description: gray,
    signupColor: royalBlue,
    forgotButtonColor: gost,
    mobileColor: athensGray1
  },
  header: {
    avatarColor: white
  },
  sidebar: {
    bgColor: white,
    boxShadow: shadow,
    sidebarWidth,
    activeCard: athensGray
  },
  messenger: {
    bgColor: athensGray,
    otherMessageColor: "#212121",
    messageBodyBgColor: white,
    myMessageColor: white,
    myMessageBgColor: gradient,
    messageHoverBgColor: "transparent",
    paddingTop: "62px",
    mHeight: "calc(100% - 62px)",
    header: {
      bgColor: gradient,
      width: "100%",
      avatarShow: "none"
    },
    mainCont: {
      mTop: "62px",
      mPaddingTop: "0px"
    },
    userList: {
      marginTop: "0px"
    },
    messages: {
      bgColor: athensGray,
      marginTop: "0px",
      width: `calc(100% - ${sidebarWidth}px)`,
      borderRadiusOther: "20px 20px 20px 4px",
      borderRadiusMe: "20px"
    }
  },
  layout: {
    headerShow: "none",
    sideNavShow: "none",
    contentHeight: "100vh"
  },
  userCard: {},
  brackPoints: {
    md: "769px"
  }
};

export default messengerTheme;
