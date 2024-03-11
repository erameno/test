import { Text, View } from "react-native";
import {Image} from 'react-native';

export default function Navbar() {
  return (
    <View style={{
        backgroundColor:"grey",
        position:"absolute",
        bottom:0,
        width:"100%",
        display:"flex",
        alignItems:"center"
    }}>

      <Image
        source={require("../images/logo_erameno.png")}
        style={{
            width:70,
            height:70,
            margin:10,

        }}
        />
    </View>
  );
}
