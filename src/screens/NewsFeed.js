import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsFeedStyles from '../styles/NewsFeedStyles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function NewsFeed() {
  const [activeIndx, setActiveIndex] = useState();
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=02ef340628a04c068cd217ec7bb1a57b',
    )
      .then(res => res.json())
      .then(data => setNews(data.articles));
  };
  useEffect(() => {
    getNews();
  }, []);
  const News = ({item, index}) => {
    return (
      <View style={NewsFeedStyles.mainContainer}>
        <View style={NewsFeedStyles.carouselContainer}>
          <Image
            source={{uri: item.urlToImage}}
            style={NewsFeedStyles.imageStyles}
          />
          <View style={NewsFeedStyles.titleAndDescriptionContainer}>
            <Text style={NewsFeedStyles.newsTitle}>{item.title}</Text>
            <Text style={NewsFeedStyles.newsDescription}>
              {item.description}
            </Text>
          </View>
          <View style={NewsFeedStyles.authorNameContainer}>
            <Text style={NewsFeedStyles.authorText}>
              Short by<Text> {item.author ?? 'unknown'}</Text>
            </Text>
          </View>
          <ImageBackground
            blurRadius={30}
            style={NewsFeedStyles.imgBackgroundStyles}
            source={{uri: item.urlToImage}}>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <Text style={NewsFeedStyles.content}>
                '{item?.content?.slice(0, 45)}...'
              </Text>
              <Text style={NewsFeedStyles.readMoreText}>Read more...</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  };

  return (
    <View style={NewsFeedStyles.carousel}>
      <Carousel
        layout="stack"
        data={news}
        sliderHeight={300}
        itemHeight={windowHeight}
        vertical={true}
        renderItem={({item, index}) => <News item={item} index={index} />}
        onSnapToItem={index => setActiveIndex(index)}
        style={NewsFeedStyles.carousel}
      />
    </View>
  );
}

export default NewsFeed;
