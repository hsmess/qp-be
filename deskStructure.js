import S from "@sanity/desk-tool/structure-builder";
import {
    MdHome,
    MdInsertChart
} from "react-icons/all";

const hiddenDocTypes = listItem => ![

].includes(listItem.getId())
//
//


const qp = S.listItem()
    .title("Quarry Park Website")
    // .icon(MdExposurePlus1)
    .child(
        S.list()
            .title("CMS Pages")
            .items([
                S.listItem()
                    .title("Homepage")
                    .icon(MdHome)
                    .child(
                        S.editor()
                            .id('homepage')
                            .title('Homepage')
                            .schemaType("homepage")
                            .documentId("homepage")
                    ),
                S.listItem()
                    .title('SEO').icon(MdInsertChart)
                    .child(
                        S.editor()
                            .id('siteSettings')
                            .title('Meta Descriptions')
                            .schemaType('siteSettings')
                            .documentId('siteSettings')
                    ),

                // S.listItem()
                //     .title('What\'s Happening Now')
                //
                //     .icon(MdFlashOn)
                //     .child(
                //         S.editor()
                //             .id('whatsHappening')
                //             .schemaType("whatsHappening")
                //             .documentId("whatsHappening")
                //     ),
                // S.listItem()
                //     .title('About').icon(MdInfo)
                //     .child(
                //         S.editor()
                //             .id('about')
                //             .title('About Woolwich Works')
                //             .schemaType("about")
                //             .documentId("about")
                //     ),

            ]));
//


export default () => S.list()
    .title('Content')
    .items([
        qp
    ])



