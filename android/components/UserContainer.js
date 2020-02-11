import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';
import {  Text, View, FlatList, StyleSheet, TouchableOpacity  } from 'react-native';


function UserContainer({fetchUsers, userData }) {

    useEffect(() => {
        fetchUsers()
       
    }, [])

    return (
      <View>
    {userData.loading} ? (<Text>Loading...</Text>) : userData.error ? (<Text>{userData.error}</Text>) : (
        <View style={style.view}>
    
      <Text>Hello World</Text>
           <FlatList
           numColumns = {2}
             data={data}
             renderItem={({item}) =>
             <TouchableOpacity onPress = {() => clickHandler(item.name)}>
             <Text style = {style.item} key = {item.name} >name is {item.name}, position is {item.position}</Text>
             </TouchableOpacity>}
             
             keyExtractor={({name}) => name}
           />
         </View>
         )
         </View>
    )
}

const style = StyleSheet.create({
    view:{
      flex: 1, padding: 16, paddingTop: 30, justifyContent: 'center', backgroundColor: '#fff'
    },
    item:{
      flex: 1,
      marginTop: 20,
      marginLeft: 20,
      backgroundColor:'pink',
      padding:20
    }
  })

const mapStateToProps= state => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserContainer);
