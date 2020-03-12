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
  yellow,
  goldenSand,
  sidebarWidth
} from "./colors";

const poochoTheme = {
  global: {
    white,
    gradient,
    textColor,
    favoritesColor: goldenSand,
    onlineColor: green
  },
  login: {
    bgColor: "#F4D052",
    flexDirection: "row-reverse",
    rightBgColor: "transparent",
    showMessengerLogo: "none",
    showPoochoLogo: true,
    formWrapperWidth: "583px",
    formWrapperLeft: "10%",
    formWrapperPadding: "100px 0px",
    formWrapperBgColor: "#f6fdff",
    formWrapperBoxShaw: "-2px 2px 4px 0 rgba(0, 0, 0, 0.16)",
    formWrapperBorderRadius: "8px",
    showFormDescription: "none",
    showPoochoFormTitle: "block",
    showFormItemLabel: "none",
    formItemBorderRadius: "8px",
    formItemBorderColor: "#979797",
    formItemBgColor: "#fff",
    showSignupBtn: "none",
    loginBtnColor: white,
    loginBtnBgColor: "#1E90B3",
    loginBtnRadius: "8px",
    showExtraBorder: "none",
    btnAlignment: "center",
    forgotBtnPos: "absolute",
    forgotBtnRight: "0px",
    rightlabel: white,
    description: gray,
    signupColor: royalBlue,
    forgotButtonColor: gost,
    mobileColor: athensGray1
  },
  header: {
    avatarColor: white,
    bgColor: white,
    borderColor: white,
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.14)",
    borderRadius: "8px"
  },
  sidebar: {
    bgColor: white,
    boxShadow: shadow,
    sidebarWidth,
    activeCard: athensGray,
    activeMenuColor: "#F4D052"
  },
  layout: {
    headerShow: "flex",
    headerHeight: "110px",
    headerBgColor: "#F6FDFF",
    headerPadding: "0px 16px 0px 20px",
    sideNavShow: "block",
    contentBgColor: "#F6FDFF",
    contentHeight: "calc(100vh - 134px)",
    contentMargin: "0px 16px 24px 20px",
    contentBoxShadow: "0 2px 8px 0 rgba(0,0,0,0.14)",
    contnetBorderRadius: "0 8px 8px 0"
  },
  messenger: {
    bgColor: athensGray,
    messageBodyBgColor: white,
    otherMessageColor: "#2c2c2c",
    myMessageColor: "#606060",
    myMessageBgColor: "#ebebeb",
    messageHoverBgColor: "#f4d052",
    mHeight: "calc(100% - 64px)",
    header: {
      bgColor: "#3C3B3C",
      width: `calc(100% - ${sidebarWidth}px)`,
      logoShow: "none",
      titleShow: "none",
      avatarShow: "flex"
    },
    mainCont: {
      mTop: "62px"
    },
    userList: {
      paddingTop: "0px",
      mTop: "62px"
    },
    messages: {
      marginTop: "62px",
      width: `calc(100% - ${sidebarWidth}px)`,
      bgColor: yellow,
      avatarShow: "block",
      borderRadiusOther: "5px 5px 5px 0px",
      borderRadiusMe: "5px 5px 0px 5px"
    }
  },
  userCard: {
    mUserNameWidth: "100%"
  },
  brackPoints: {
    md: "769px"
  }
};

export default poochoTheme;
