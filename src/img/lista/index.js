import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
  }

  like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
      this.setState({
        feed:{
          ...feed,
          likeada: false,
          likers:  feed.likers -1
        }
      });
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada: true,
          likers:  feed.likers + 1
        }
      });
    }


  }

  showLikes(likers){
    let feed = this.state.feed;

    if(feed.likers <= 0){
      return;
    }

    return(
      <Text style={styles.likers}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
    
  }

  carregaIcone(likeada){
    return likeada ? require('../../img/likeada.png') 
     : 
     require('../../img/like.png') 
  }

  render(){
    return(
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image source={{uri: this.state.feed.imgperfil}} style={styles.imgPerfil}/>
          <Text style={styles.nomeUser}>{this.state.feed.nome}</Text>
        </View>
        <Image resizeMode="cover" source={{uri: this.state.feed.imgPublicacao}} style={styles.fotoPublicacao}/>
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image 
            source={this.carregaIcone(this.state.feed.likeada)} 
            
            style={styles.iconLike}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSend}>
            <Image source={require('../../img/send.png')} style={styles.iconLike}/>
          </TouchableOpacity>
        </View>
        {this.showLikes(this.state.feed.likers)}


        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed:{

  },
  viewPerfil:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  nomeUser:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  imgPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao:{
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5,
  },
  iconLike:{
    width: 33,
    height: 33,
  },
  iconSend:{
    paddingLeft: 7
  },
  viewRodape:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeRodape:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingLeft: 5
  },
  descRodape:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  }, 
  likers:{
    fontWeight: 'bold',
    paddingLeft: 5
  }
});

export default Lista;
