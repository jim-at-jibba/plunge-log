import { H3, H6, XStack } from "tamagui";

import { Container } from "../../components/Container";

export default function User() {
  return (
    <Container justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$2"
      >
        <H3>Account</H3>
      </XStack>

      <H6>Some Tamagui components in action.</H6>
    </Container>
  );
}
