import components from "../components.module.css";
import { Text, Flex } from "@chakra-ui/react";
import UpComeSermon from "../HomePage/UpComeSermon";

import EventSermon from "../EventSermon";

const SermonPage = () => {
  return (
    <>
      <div className={components.sermon__container__page}>
        <div className={components.sermon__text__sermon}>
          <span className={components.sermon__text__title}>Sermon</span>
          <Text fontSize="2.5rem" fontWeight="bold">
            TAKE PART IN OUR SERMON
          </Text>
        </div>
      </div>
      <UpComeSermon />
      <div className={components.all__events}>
        <Text>VIEW ALL EVENTS</Text>
      </div>

      <Flex>
        <EventSermon />
      </Flex>
    </>
  );
};

export default SermonPage;
