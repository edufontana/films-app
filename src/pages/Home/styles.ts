import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`;

export const Content = styled.View`
  justify-content: center;
  height: 10%;
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
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const FlatView = styled.View``;

export const FlatList = styled.FlatList``;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ViewMovies = styled.View`
  align-items: center;
`;
