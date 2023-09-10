import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,Image, FlatList, Animated} from 'react-native'
import React, {useEffect, useState,useRef}from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';
import songs from '../model/Data';

const{width, height} = Dimensions.get('window');


const MusicPlayer = () => {

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scrollX.addListener(({value}) =>{
      console.log(value);
    })
    }, [])

  const renderSongs =({item,index})=>{
    return(
      <View style={style.mainimageWrapper}>

     <View style={[style.imageWrapper,style.elevation]}>
      <Image
        source={item.artwork}
        style={style.musicImage}
      />
     </View>
      </View>
    )
  }
  
  return (
    <SafeAreaView style={style.container}> 
    <View style ={style.maincontainer}>

    <FlatList
        renderItem={renderSongs}
        data={songs}
        keyExtractor={item=>item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator = {false}
        scrollEventThrottle={16}
        onScroll={()=>{}}
      />

      {/*SONG CONTENT */}
      <View>
        <Text style={[style.songContent, style.songTitle]}> Title</Text>
        <Text style={[style.songContent, style.songArtist]}> Artist Name</Text>
      </View>
      {/* SLIDER*/}
      <View>
        <Slider style={style.progressBar}
          value = {10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor='#1db954'
          minimumTrackTintColor="#1db954"
          maximumTrackTintColor="#1db954"
          onSlidingComplete={()=>{}}
        />
      </View>

        <View style={style.progressLevelDuration}> 
            <Text style={style.progressLabelText}>00:00</Text>
            <View style={{flex:1}}/>
            <Text style={style.progressLabelText}>00:00</Text>
        <View/>

        </View>
      {/* MUSIC CONTROLS */}
      <View style={style.musicControlsContainer}>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name= "play-skip-back-outline" size={35} color="#1db954"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name= "pause-circle-outline" size={75} color="#1db954"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name= "play-skip-forward-outline" size={35} color="#1db954"/>
        </TouchableOpacity>


      </View>

    </View>
    <View style={style.bottomContainer}> 
      <View style={style.bottomIconWrapper}>
       <TouchableOpacity onPress={()=>{}}>
        <Ionicons name= "heart-outline" size={30} color="#888888"/>
       </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <Ionicons name= "repeat" size={30} color="#888888"/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
        <Ionicons name= "share-outline" size={30} color="#888888"/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
        <Ionicons name= "ellipsis-horizontal" size={30} color="#888888"/>
      </TouchableOpacity>

      </View>
    </View>
   
  
    </SafeAreaView>
   
    
  )
}

export default MusicPlayer

const style = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#222831',
    },

    maincontainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    bottomContainer:{
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
      borderTopColor: '#393E46',
      borderWidth: 1,
    },

    bottomIconWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'80%'
    },

    mainimageWrapper:{
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageWrapper:{
      width: 300,
      height: 340,
      marginBottom: 20,
      marginTop: 20,
    },

    musicImage:{
      width: '100%',
      height: '100%',
      borderRadius:15,
    },
    
    elevation:{
      elevation: 5,
      shadowColor: '#ccc',
      shadowOffset:{
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
    },

    songContent:{
      textAlign: 'center',
      color: '#EEEEEE',
    },

    songTitle:{
      fontSize: 20,
      fontWeight: 'bold',
    
    },

    songArtist:{
      fontSize: 18,
      fontWeight: '300',
    },

    progressBar:{
      width: 350,
      height: 40,
      marginTop: 25,
      flexDirection: 'row',
    },

    progressLevelDuration:{
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    progressLabelText:{
      color: "#fff",
      fontWeight: '500',
    },

    musicControlsContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 10,
      marginBottom: 100,
    }
});