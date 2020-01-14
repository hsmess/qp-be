// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import homepage from "./documents/homepage";
import siteSettings from "./documents/siteSettings";
import imageWithAltText from "./objects/imageWithAltText";
import qpPortableText from "./objects/qpPortableText";
import social from "./objects/social";
import legal from "./documents/legal";
import fourzerofour from "./documents/fourzerofour";
import footer from "./documents/footer";
import contactDetails from "./documents/contactDetails";
import qpLink from "./objects/qpLink";
import aboutDel from "./documents/aboutDel";
import aboutDelItem from "./documents/aboutDelItem";
import aboutTheCourse from "./documents/aboutTheCourse";
import newsPage from "./documents/newsPage";
import theClub from "./documents/theClub";
import theShop from "./documents/theShop";
import yourVisit from "./documents/yourVisit";
import extendedUrl from "./objects/extendedUrl";
import nature from "./documents/nature";
import natureItem from "./documents/natureItem";
import natureSection from "./documents/natureSection";
import ace from "./objects/ace";
import news from "./documents/news";
import newsSection from "./documents/newsSection";
import visitSection from "./documents/visitSection";
import courseLayout from "./documents/courseLayout";
import hole from "./documents/hole";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
      courseLayout,
      hole,
      homepage,
      siteSettings,
      imageWithAltText,
      qpPortableText,
      social,
      legal,
      fourzerofour,
      footer,
      contactDetails,
      qpLink,
      aboutDel,
      aboutDelItem,
      aboutTheCourse,
      newsPage,
      theClub,
      theShop,
      yourVisit,
      extendedUrl,
      nature,
      natureItem,
      natureSection,
      ace,
      news,
      newsSection,
      visitSection
  ])
})
