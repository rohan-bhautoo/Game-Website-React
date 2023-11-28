import { HStack, Skeleton } from "@chakra-ui/react";
const PlatformListSkeleton = () => {
  return (
    <HStack>
      <Skeleton height="32px" width="40px" borderRadius={8} />
      <Skeleton height="25px" width="70%" borderRadius={5} />
    </HStack>
  );
};

export default PlatformListSkeleton;
