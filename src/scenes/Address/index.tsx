import Header from '@components/Header';
import React, {Component, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';

type AddressSceneProp = StackNavigationProp<RootStackParamList, 'AddAddress'>;

export default (): JSX.Element => {
  const [destListIndex, setDestListIndex] = React.useState<number>(1);
  const [destList, setDestList] = React.useState<number[]>([0]);
  const navigation = useNavigation<AddressSceneProp>();

  const handleAddDestination = () => {
    console.log(`add a new dest with index = ${destListIndex}`);
    setDestList(destList.concat(destListIndex));
    console.log(`destListIndex = ${destListIndex}`);
    setDestListIndex(destListIndex + 1);
  };

  const handleRemoveDestination = (idx: number) => {
    console.log(destListIndex);
    console.log(`remove destination with id=${idx}`);
    // for (const dest of destList) {
    //   console.log(dest);
    // }
    setDestList(destList.filter(dest => dest !== idx));
  };

  return (
    <SafeAreaView>
      <Header title="Address" hasBackButton={true} navigation={navigation} />
      <View style={styles.marginHorizontal}>
        <TextInput style={{backgroundColor: 'transparent'}} label="Origin" />
        {destList.map((dest, idx) => (
          <TextInput
            key={idx}
            label={`Destination ${dest}`}
            right={
              <TextInput.Icon
                icon="close"
                onPress={() => handleRemoveDestination(dest)}
              />
            }
          />
        ))}
        <Button icon="plus" onPress={handleAddDestination}>
          Add more destination
        </Button>
        <Button mode="contained">Create</Button>
      </View>
    </SafeAreaView>
  );
};
