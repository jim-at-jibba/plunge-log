import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, Text, YStack } from "tamagui";

interface Props {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  text: string;
  subText: string;
}
export default function HomeHeaderInfoBox({ iconName, text, subText }: Props) {
  return (
    <YStack>
      <Stack mb="$2">
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color="white"
        />
      </Stack>
      <Text
        mb="$1"
        fontWeight="700"
      >
        {text}
      </Text>
      <Text fontSize="$2">{subText}</Text>
    </YStack>
  );
}
