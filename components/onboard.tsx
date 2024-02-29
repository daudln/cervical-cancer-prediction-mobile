import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from 'tamagui';
import OnboardItem from './onboard-item';
import { onboards } from '~/constants/onboard';



export default function Onboard() {
  const { width, height } = useWindowDimensions();
  return (
    <Carousel
      loop
      width={width}
      height={height * 0.5}
      mode="parallax"
      autoPlayInterval={5000}
      autoPlay={true}
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 20,
        parallaxAdjacentItemScale: 0.8,
      }}
      data={onboards}
      scrollAnimationDuration={1000}
      pagingEnabled
      style={{ backgroundColor: '#fff' }}
      renderItem={({item}) => (
        <OnboardItem item={item} />
      )}
    />
  );
}
