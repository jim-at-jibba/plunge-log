import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H1, Stack, Text, XStack, YStack } from "tamagui";

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
          <YStack>
            <Stack mb="$2">
              <MaterialCommunityIcons
                name="heart-pulse"
                size={20}
                color="white"
              />
            </Stack>
            <Text
              mb="$1"
              fontWeight="700"
            >
              77 BPM
            </Text>
            <Text fontSize="$2">Average heart rate</Text>
          </YStack>
          <YStack>
            <Stack mb="$2">
              <MaterialCommunityIcons
                name="timer-outline"
                size={20}
                color="white"
              />
            </Stack>
            <Text
              mb="$1"
              fontWeight="700"
            >
              25 min
            </Text>
            <Text fontSize="$2">Time in cold water</Text>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  );
}
