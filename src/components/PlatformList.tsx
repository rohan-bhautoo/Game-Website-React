import {
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { IconType } from "react-icons";
import allPlatforms from "../data/platform-icons";
import PlatformListSkeleton from "./PlatformListSkeleton";
import useGameQueryStore from "../store";

const PlaformList = () => {
  const { data, isLoading, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const iconMap: { [key: string]: IconType } = allPlatforms;
  const skeletons = [1, 2, 3];

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={1}>
        Platforms
      </Heading>
      {isLoading &&
        skeletons.map((skeleton) => <PlatformListSkeleton key={skeleton} />)}
      <List>
        {data?.results
          .filter((platform) => iconMap.hasOwnProperty(platform.slug))
          .map((platform) => (
            <ListItem key={platform.id} paddingY="5px">
              <HStack>
                <IconButton
                  key={platform.id}
                  onClick={() => setSelectedPlatformId(platform.id)}
                  boxSize="32px"
                  borderRadius={8}
                  bgColor={
                    platform.id === selectedPlatformId ? "white" : "gray.700"
                  }
                  objectFit={"cover"}
                  icon={
                    <Icon
                      key={platform.id}
                      as={iconMap[platform.slug]}
                      color={
                        platform.id === selectedPlatformId
                          ? "black"
                          : "gray.500"
                      }
                    />
                  }
                  aria-label={platform.slug}
                />
                <Button
                  fontWeight={
                    platform.id === selectedPlatformId ? "bold" : "normal"
                  }
                  onClick={() => setSelectedPlatformId(platform.id)}
                  fontSize="lg"
                  variant="link"
                  whiteSpace={"normal"}
                  justifyContent="flex-start"
                  textAlign={"left"}
                >
                  {platform.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default PlaformList;
