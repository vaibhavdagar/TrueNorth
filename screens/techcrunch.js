import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, FlatList, SafeAreaView } from 'react-native';
import Article from './articles'
export default function App() {

    const [articles, setArticles] = useState([]);
    
    useEffect(()=>{
      fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=114e8fe8861e4bfda171743c94f2702f')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then( articles  => {
        setArticles(articles);
      })
      .catch( error => {
        console.error(error);
      });
    
    } , []);
    
    
      return (
    
        <SafeAreaView style={{flex:1}}>
         <FlatList
            data={articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
        
          />
      </SafeAreaView>
      );
    }