import {PixelRatio} from 'react-native';

export const purple_dulce = '#5f4b8b';
export const orange_dulce = '#fd7d01';

export const styles = {
  components: {
    absences: {
      title: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 15,
        color: purple_dulce
      },
      container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
      date: {
        color: purple_dulce,
        fontSize: 20
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
        borderRadius: 5
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
        width: 375
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
      }
    },
    agrButton: {
      container: {
        backgroundColor: purple_dulce,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 50,
        alignSelf: 'center',
        marginBottom: 0,
        width: 170
      },
      text: {
        color: 'white',
        fontSize: 14,
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
        fontFamily: 'Poiret One',
        fontWeight: '500',
        fontSize: 21
      },
      drawerEmail: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14
      },
      container: {
        flex: 8
      },
      navItemStyle: {
        padding: 10,
        color: '#fff'
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
    signUpButton: {
      container: {
        height: 45,
        marginTop: 0,
        paddingHorizontal: 50,
        backgroundColor: purple_dulce,
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 0,
        width: 175
      },
      text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Raleway',
        alignItems: 'center'
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
  },
  screens: {
    editScreen: {
      container: {
        justifyContent: 'center',
        marginTop: 10,
        padding: 15,
        backgroundColor: '#FFF'
      },
      text: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'Raleway'
      },
      button: {
        height: 50,
        paddingHorizontal: 30,
        backgroundColor: purple_dulce,
        alignSelf: 'center',
        alignItems: 'center',
        width: 180
      }
    },
    listProfile: {
      center: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 2
      },

      colorPurple: {
        color: purple_dulce,
        fontSize: 17,
        fontFamily: 'Raleway'
      },
      img: {
        height: 40,
        resizeMode: 'contain'
      }
    },
    loginScreen: {
      container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#FFF'
      },
      input: {
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginBottom: 10,
        width: '100%',
        alignSelf: 'center'
      },
      text: {
        fontSize: 15,
        color: purple_dulce
      },
      buttonRegister: {
        alignSelf: 'center'
      },
      logo: {
        alignSelf: 'center',
        height: 140,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        marginTop: 20
      }
    },
    newProfile: {
      container: {
        justifyContent: 'center',
        marginTop: 10,
        padding: 15,
        backgroundColor: '#FFF'
      },
      title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      item: {
        borderBottomWidth: 1
      },
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      },
      text: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'Raleway'
      }
    },
    newUser: {
      container: {
        justifyContent: 'center',
        marginTop: 10,
        padding: 15,
        backgroundColor: '#FFF'
      },
      title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      item: {
        borderBottomWidth: 1
      },
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
    },
    notificationScreen: {
      view1: {
        flex: 1,
        flexDirection: 'row'
      },
      view2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
      },
      view3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      view4: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      buttonView: {
        flexDirection: 'row',
        marginLeft: '60%'
      },
      colorPurple: {
        color: purple_dulce,
        fontSize: 15
      },
      colorOrange: {
        color: orange_dulce,
        fontSize: 15
      },
      icon: {
        fontSize: 40,
        color: purple_dulce
      }
    },
    profileManagerScreen: {
      container: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: '#FFF'

      },
      text: {
        fontSize: 20,
        marginBottom: 15,
        alignSelf: 'center'
      },
      name: {
        fontSize: 30,
        marginBottom: 15,
        alignSelf: 'center'
      },
      informacoes: {
        alignSelf: 'center'
      }
    },
    weekSchedule: {
      item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
      }
    }
  }
};

//Components:
export const absences = styles.components.absences;
export const agrButton = styles.components.agrButton;
export const agrImput = styles.components.agrImput;
export const googleButton = styles.components.googleButton;
export const scaleIcon = styles.components.scaleIcon;
export const scheduleItem = styles.components.scheduleItem;
export const screenHeader = styles.components.screenHeader;
export const sideMenu = styles.components.sideMenu;
export const signUpButton = styles.components.signUpButton;
export const smallButton = styles.components.smallButton;
export const smallLogo = styles.components.smallLogo;
export const userItem = styles.components.userItem;

//Screens:
