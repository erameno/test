import { Component } from "react";
import { Button, Text, View } from "react-native";

class Compteur extends Component {

    state = {
        count: 0,
    };
    
    onPress = () => {
    this.setState({
        count: this.state.count + 1,
    });
    };

    render(){
        return (
          <View style={{
            width:"80%",
            marginTop:50,
            marginLeft:"auto",
            marginRight:"auto"
          }}>
            <Button
              onPress={this.onPress}
              title="Appuyer ici !"
              color="#841584"
              accessibilityLabel="Appuyer sur ce bouton pour augmenter le compteur"
              />

              <Text style={{
                textAlign:"center",
                fontSize:25
              }}>Vous avez cliqué : {this.state.count} fois</Text>
          </View>
        );
    }
}

export default Compteur;