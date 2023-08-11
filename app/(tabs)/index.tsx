import { Plus } from "@tamagui/lucide-icons";
import { Button, Stack } from "tamagui";

import { Container } from "../../components/Container";

export default function User() {
  return (
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
  );
}
