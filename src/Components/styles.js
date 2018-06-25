import {PixelRatio} from 'react-native';
import {purple_dulce, black_dulce} from '../styles';

export const styles = {
  absences: {
    title: {
      margin: 5,
      alignSelf: 'center',
      fontSize: 17,
      color: purple_dulce,
      fontFamily: 'Raleway'
    },
    container1: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    date: {
      color: purple_dulce,
      fontSize: 20,
      fontFamily: 'Lato'
    },
    dates: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginRight: 5,
      marginLeft: 5,
      marginTop: 10,
      borderColor: purple_dulce,
      borderWidth: 2,
      borderRadius: 5,
      fontFamily: 'Lato'
    },
    justify: {
      flex: 1.5,
      backgroundColor: '#ede8f7',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      borderColor: purple_dulce,
      borderWidth: 2,
      borderRadius: 5
    },
    button: {
      width: 200,
      marginTop: 15,
      marginRight: 5,
      marginLeft: 10
    },
    view1: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '100%'
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    documentContainer: {
      borderColor: '#9B9B9B',
      backgroundColor: '#fff',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center'
    },
    document: {
      borderRadius: 5,
      width: 180,
      height: 180
    },
    picker: {
      height: 50,
      width: 170,
      marginLeft: 10
    },
    text: {
      color: black_dulce,
      fontFamily: 'Lato'
    }
  },
  agrButton: {
    container: {
      backgroundColor: purple_dulce,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      flex: 8,
      alignSelf: 'center',
      marginBottom: 0,
      width: 180
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Raleway',
      alignItems: 'center'
    }
  },
  agrInput: {
    textInput: {
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      marginBottom: 10,
      width: '100%',
      alignSelf: 'center',
      fontFamily: 'Lato'
    },
    container: {
      paddingHorizontal: 30
    },
    label: {
      fontFamily: 'Lato',
      marginTop: 5
    }
  },
  googleButton: {
    container: {
      height: 45,
      marginTop: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      marginBottom: 0,
      backgroundColor: '#FFF',
      width: 280
    },
    text: {
      fontSize: 20,
      alignSelf: 'center',
      fontFamily: 'Raleway'
    },
    img: {
      height: 40,
      resizeMode: 'contain'
    }
  },
  scaleIcon: {
    container: {
      marginTop: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      height: 100,
      width: 100
    }
  },
  scheduleItem: {
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    }
  },
  screenHeader: {
    header: {
      backgroundColor: purple_dulce
    },
    text: {
      fontFamily: 'Raleway'
    }
  },
  sideMenu: {
    header: {
      flexDirection: 'column',
      paddingTop: 45,
      paddingLeft: 16,
      height: 170,
      backgroundColor: purple_dulce
    },
    headerLogo: {
      width: 64,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 32,
      overflow: 'hidden',
      backgroundColor: '#fff'
    },
    subTitle: {
      height: 56,
      paddingTop: 8
    },
    drawerTitle: {
      color: '#fff',
      fontFamily: 'Raleway',
      fontSize: 21
    },
    drawerEmail: {
      color: '#fff',
      fontFamily: 'Raleway',
      fontSize: 14
    },
    container: {
      flex: 8
    },
    navItemStyle: {
      padding: 10,
      color: '#fff',
      fontFamily: 'Lato',
      fontSize: 15
    },
    route: {
      paddingVertical: 7,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10
    },
    footerContainer: {
      padding: 20,
      backgroundColor: purple_dulce,
      flexDirection: 'row',
      alignItems: 'center'
    },
    routesContainer: {
      marginTop: 20
    }
  },
  IconButton: {
    container: {
      backgroundColor: purple_dulce,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      flex: 8,
      alignSelf: 'center',
      marginBottom: 0,
      width: 180
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Raleway',
      alignItems: 'center'
    },
    icon: {
      color: '#ffffff',
      height: 25,
      width: 25
    }
  },
  smallButton: {
    container: {
      backgroundColor: '#FFF',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
    },
    text: {
      fontSize: 18,
      color: 'black'
    }
  },
  smallLogo: {
    logo: {
      alignSelf: 'center',
      marginTop: 45,
      marginBottom: 30,
      width: 200,
      height: 100,
      resizeMode: 'contain',
      backgroundColor: 'transparent'
    }
  },
  userItem: {
    item: {
      height: 60,
      borderBottomWidth: 1,
      justifyContent: 'center'
    },
    text: {
      color: 'black',
      fontSize: 25
    }
  }
};

//Components:
export const absences = styles.absences;
export const agrButton = styles.agrButton;
export const agrInput = styles.agrInput;
export const googleButton = styles.googleButton;
export const scaleIcon = styles.scaleIcon;
export const scheduleItem = styles.scheduleItem;
export const screenHeader = styles.screenHeader;
export const sideMenu = styles.sideMenu;
export const IconButton = styles.IconButton;
export const smallButton = styles.smallButton;
export const smallLogo = styles.smallLogo;
export const userItem = styles.userItem;
