import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import InfiniteScrollableListStyles from '../styles/InfiniteScrollableListStyles';
function InfiniteScrollableList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  console.log(users.length);

  const getUsers = () => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(res => res.json())
      .then(data => {
        setUsers([...users, ...data.results]);
        setIsLoading(false);
      });
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={InfiniteScrollableListStyles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const renderItem = ({item}) => {
    return (
      <View style={InfiniteScrollableListStyles.mainContainer}>
        <View style={InfiniteScrollableListStyles.listContainer}>
          <Text style={InfiniteScrollableListStyles.listText}>
            Name: {`${item.name.title} ${item.name.first} ${item.name.last}`}
          </Text>
          <Text style={InfiniteScrollableListStyles.listText}>
            Email:{' '}
            <Text style={InfiniteScrollableListStyles.listEmailText}>
              {item.email}
            </Text>
          </Text>
          <Text style={InfiniteScrollableListStyles.listText}>
            Gender: {item.gender}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
    />
  );
}

export default InfiniteScrollableList;
