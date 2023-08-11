import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, H6, XStack } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function User() {
  const router = useRouter();

  return (
    <MyStack justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <H3>Plunges</H3>
      </XStack>

      <H6>Here are your plunges</H6>
    </MyStack>
  );
}
