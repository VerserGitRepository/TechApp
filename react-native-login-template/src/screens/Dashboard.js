import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
Image,

TouchableOpacity
} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Background from '../components/Background';
import Logo from '../components/LogoSmall';
var userId;
var theNavigation;

export default class Dashboard extends React.Component {
static navigationOptions = ({ navigation }) => {
  userId =  navigation.getParam('UserId');
  alert(userId);
  theNavigation = navigation;
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[],
   navigationOptions:null
  };
}
componentDidMount(){
fetch("https://customers.verser.com.au/AssetManagementServiceDev/inventorycontrol/order/sthomas/TechAssignedJobs")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
  
  <View style={{
     height: .5,
     width:"90%",
     alignContent:"center",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>

);
}
ShowCurrentDate=()=>{

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();  

 }

 

renderItem=(data)=>

<Card containerStyle={{width:285}}
  title={data.item.ProjectName}
  imageProps={{ resizeMode: 'contain'}}
  imageStyle={{width: 55, height: 55}}
  image={{uri:`data:image/jpeg;base64,${data.item.Logo}`,}}
  >
  <Text>
  <Text style={{fontWeight: 'bold'}}>
  {'Job No:'}
  </Text>
  <Text>
  {data.item.JobNo}
  </Text>
  </Text>

  <Text>
  <Text style={{fontWeight: 'bold'}}>
  {'Site Name:'}
  </Text>
  <Text>{data.item.SiteName}</Text>
  </Text>

  <Text>
  <Text style={{fontWeight: 'bold'}}>
  {'Technician Name:'}
  </Text>
  <Text>{data.item.TechnicianName}</Text>
  </Text>

  <Text>
  <Text >
  {'Job Status:'}
  </Text>
  <Text>{data.item.JobStatus}</Text>
  </Text>
 
  <Button
    onPress={_onLoginPressed}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Show Details' />
</Card>
render(){
 if(this.state.loading){
  return( 
    
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
    
)}
else
{
return(
  
<Background>
<Logo></Logo>
 <View style={styles.container}>
 
  <Text> {userId}</Text>
  
  <Text> {new Date().getDate()+'/'+(new Date().getMonth() + 1)+'/'+new Date().getFullYear()}</Text>

 <FlatList
    data= {this.state.dataSource}
    
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.Id.toString()}
 />

</View>

</Background>

)}
}
}
const _onLoginPressed = ({ navigation }) => {
  theNavigation.navigate('JobDetails');
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});