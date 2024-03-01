import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from 'tamagui';
import OnboardItem from './onboard-item';
import { onboards } from '~/constants/onboard';
import * as Progress from 'react-native-progress';

export default function Onboard() {
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index:number, offeset:number) => {
    setCurrentIndex(offeset+1);
  };

  return (
    <View>
      <Carousel
        width={width}
        height={height * 0.5}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 20,
          parallaxAdjacentItemScale: 0.8,
        }}
        data={onboards}
        scrollAnimationDuration={1000}
        pagingEnabled
        style={{ backgroundColor: '#fff' }}
        onProgressChange={handleIndexChange}
        renderItem={({ item, index }) => (
          <OnboardItem item={item} />
        )}
      />
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          progress={(currentIndex)/onboards.length}
          width={width*0.9}
          height={7}
          unfilledColor="#f0f0f0"
          borderWidth={0}
          color="#483d8a"
          animated={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  progressBarContainer: {
    height: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'blue',
  },
});
