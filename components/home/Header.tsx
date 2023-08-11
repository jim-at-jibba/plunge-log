import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H1, Text, XStack, YStack } from "tamagui";

import HomeHeaderInfoBox from "./HeaderInfoBox";

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  return (
    <YStack backgroundColor="white">
      <YStack
        backgroundColor="$blue6"
        borderBottomRightRadius={20}
        borderBottomLeftRadius={20}
        p="$4"
        pt={top}
      >
        <XStack
          ai="center"
          space="$2"
        >
          <H1
            fontWeight="bold"
            fontSize="$9"
            color="white"
          >
            Monthly
          </H1>
          <Text
            color="white"
            fontSize="$9"
            fontWeight="$7"
          >
            Summary
          </Text>
        </XStack>
        <XStack
          mt="$6"
          space="$8"
        >
          <HomeHeaderInfoBox
            iconName="heart-outline"
            text="77 BPM"
            subText="Average heart rate"
          />
          <HomeHeaderInfoBox
            iconName="timer-outline"
            text="25 min"
            subText="Time in cold water"
          />
        </XStack>
      </YStack>
    </YStack>
  );
}
