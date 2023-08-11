import { styled, YStack } from "tamagui";

export const Container = styled(YStack, {
  name: "MyStack",
  backgroundColor: "$backgroundStrong",
  flex: 1,
  justifyContent: "space-between",
  padding: "$4",
  space: "$true"
});
