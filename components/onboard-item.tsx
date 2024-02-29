import { View, Image, Paragraph, useWindowDimensions, H3 } from 'tamagui';

interface Props {
  item: { title: string; description: string; image: any };
}
export default function OnboardItem({ item }: Props) {
  const { width } = useWindowDimensions();
  return (
    <View>
      <Image
        source={{ width: width, height: 200, uri: item.image }}
        width={width}
        resizeMode="contain"
        alt={item.title}
      />
      <View>
        <H3 textAlign="center" color="#483d8a" fontWeight="bold" fontSize={28} mb={10}>
          {item.title}
        </H3>
        <Paragraph textAlign="center" color="#62656b" fontWeight="300" fontSize={18} mt={10}>
          {item.description}
        </Paragraph>
      </View>
    </View>
  );
}
