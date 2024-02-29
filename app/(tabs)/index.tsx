import { YStack, Separator, Theme } from 'tamagui';
import Onboard from '~/components/onboard';


export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center" backgroundColor={'#fff'}>
        <Onboard/>
        <Separator />
      </YStack>
    </Theme>
  );
}
