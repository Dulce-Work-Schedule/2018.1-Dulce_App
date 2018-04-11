import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallLogo from '../Components/SmallLogo';


const styles={
    text:{
      fontSize: 27
    },
    lastButton:{
      marginBottom: 150
    }

}

export default class InitialScreen extends React.Component {
    render() {
        return (
            <ScrollView>
              <SmallLogo />
                <Text style={styles.text}>
                    Welcome
                </Text>
                <View/>
                <AGRButton
                  onPress={() => this.props.navigation.navigate('profile')}
                  text="Perfil"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('edit')}
                  text="Editar Perfil"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('list')}
                  text="Ver médicos"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('newManager')}
                  text="Criar novos gerentes"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('EmployeeProfile')}
                  text="Employee Profile"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('ProfileManager')}
                  text="Perfil gestor"
                />
                <AGRButton
                   style={styles.lastButton}
                  onPress={() => this.props.navigation.navigate('login')}
                  text="Logout"
                />
                </ScrollView>
              );
    }
}
