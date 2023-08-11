import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, H6, XStack, YStack } from "tamagui";

import { Container } from "../../components/Container";

export default function Plunge() {
  const router = useRouter();

  return (
    <Container justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <XStack space>
          <H3>Plunges</H3>
          <H3>Plunges</H3>
        </XStack>
      </XStack>

      <H6>Here are your plunges</H6>
    </Container>
  );
}
