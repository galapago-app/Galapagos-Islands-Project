import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
});

class Plan extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <Text>Plan Your Trip</Text>
          <ScrollView>
            <Button
              title="Top Activities"
              onPress={() => this.props.navigation.navigate("TopActivities")}
            />
              <Button
                  title="Island Hop"
                  onPress={() => this.props.navigation.navigate("IslandHop")}
              />
          </ScrollView>
      </View>
    );
  }
}

export default Plan;