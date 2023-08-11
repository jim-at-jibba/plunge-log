import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Plus } from "@tamagui/lucide-icons";
import { Button, H1, Stack, Text, XStack, YStack } from "tamagui";

import { Container } from "../../components/Container";

export default function User() {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <YStack backgroundColor="white">
        <XStack
          backgroundColor="$blue6"
          borderBottomRightRadius={20}
          borderBottomLeftRadius={20}
          ai="center"
          space="$2"
          p="$4"
          pt={top}
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
      </YStack>
      <Container justifyContent="flex-start">
        <Stack
          position="absolute"
          bottom="$13"
          right="$4"
        >
          <Button
            circular
            icon={Plus}
          />
        </Stack>
      </Container>
    </>
  );
}
