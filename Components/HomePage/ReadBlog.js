import SubHeading from "../SubHeading";
import BlogPost from "../BlogPost";
import { Flex } from "@chakra-ui/react";

const ReadBlog = () => {
  return (
    <>
      <div>
        <SubHeading pText="READ OUR BLOG" hText="SHARE, INSPIRE AND INNOVATE" />
      </div>
      <Flex justifyContent="center" alignItem="center" mt={20}>
        <BlogPost
          h4Text="RELATIONSHIP"
          pText=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam."
          textTitle="By Mathew Johnson  "
          textName="Tuesday 13 May, 2021"
          //   div=""
        />

        <BlogPost
          h4Text="RELATIONSHIP"
          pText=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam."
          textTitle="By Mathew Johnson  "
          textName="Tuesday 13 May, 2021"
        />

        <BlogPost
          h4Text="RELATIONSHIP"
          pText=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam."
          textTitle="By Mathew Johnson  "
          textName="Tuesday 13 May, 2021"
        />

        <BlogPost
          h4Text="RELATIONSHIP"
          pText=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a sunt. Quisquam."
          textTitle="By Mathew Johnson  "
          textName="Tuesday 13 May, 2021"
        />
      </Flex>
    </>
  );
};

export default ReadBlog;
