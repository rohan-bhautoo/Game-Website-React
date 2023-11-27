import {
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import { IconType } from "react-icons";
import allPlatforms from "../data/platform-icons";

interface Props {
  onSelectPlatform: (genre: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlaformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, isLoading, error } = usePlatforms();
  const iconMap: { [key: string]: IconType } = allPlatforms;

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={1}>
        Platforms
      </Heading>
      <List>
        {data
          .filter((platform) => iconMap.hasOwnProperty(platform.slug))
          .map((platform) => (
            <ListItem key={platform.id} paddingY="5px">
              <HStack>
                <IconButton
                  key={platform.id}
                  onClick={() => onSelectPlatform(platform)}
                  boxSize="32px"
                  borderRadius={8}
                  bgColor={
                    platform.id === selectedPlatform?.id ? "white" : "gray.700"
                  }
                  objectFit={"cover"}
                  icon={
                    <Icon
                      key={platform.id}
                      as={iconMap[platform.slug]}
                      color={
                        platform.id === selectedPlatform?.id
                          ? "black"
                          : "gray.500"
                      }
                    />
                  }
                  aria-label={platform.slug}
                />
                <Button
                  fontWeight={
                    platform.id === selectedPlatform?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectPlatform(platform)}
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
