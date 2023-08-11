import { Plus } from "@tamagui/lucide-icons";
import { Button, Stack } from "tamagui";

import { Container } from "../../components/Container";
import HomeHeader from "../../components/home/Header";

export default function User() {
  return (
    <>
      <HomeHeader />
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
