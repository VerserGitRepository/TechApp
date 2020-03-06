import React, { memo,useState,Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/LogoSmall';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const styles = StyleSheet.create({
 
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})


  
  

const Dashboard = ({ navigation }) => {
  state = {
    carriers: []
  };
 
    
 
  return (
  <Background>
    <Logo />
    <Header>Jobs</Header>
    <ScrollView>

  <Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title=""
    />
    <CardTitle
      subtitle="Job 1"
    />
    <CardContent text="Clifton, Western Cape" />
    <CardAction 
      separator={true} 
      inColumn={false}>
     
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction>
  </Card>
  <Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title=""
    />
    <CardTitle
      subtitle="JOb 2"
    />
    <CardContent text="Clifton, Western Cape" />
    <CardAction 
      separator={true} 
      inColumn={false}>
     
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction>
  </Card>
  <Card>
  <CardImage 
    source={{uri: 'http://bit.ly/2GfzooV'}} 
    title=""
  />
  <CardTitle
    subtitle="job 3"
  />
  <CardContent text="Clifton, Western Cape" />
  <CardAction 
    separator={true} 
    inColumn={false}>
   
    <CardButton
      onPress={() => {}}
      title="Explore"
      color="#FEB557"
    />
  </CardAction>
</Card>
</ScrollView>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}  color="#F79435">
      Logout
    </Button>
  </Background>
)};

export default memo(Dashboard);
