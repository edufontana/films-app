import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
  background-color: #333;
`;

export const Content = styled.View`
  justify-content: center;
  height: 10%;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #008cba;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const FlatView = styled.View`
  flex: 1;
`;

export const FlatList = styled.FlatList``;

export const Image = styled.Image`
  width: 400px;
  height: 400px;
`;

export const TextFilm = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ViewMovies = styled.View`
  align-items: center;
`;
