import S from "@sanity/desk-tool/structure-builder";
import {
    FaHome, FaMapSigns, FaTree, FaWind, FaNewspaper, FaWarehouse, TiGroup, FaShoppingCart, MdInsertChart, MdContactPhone, MdVerticalAlignBottom, MdGavel
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
                    .icon(FaHome)
                    .child(
                        S.editor()
                            .id('homepage')
                            .title('Homepage')
                            .schemaType("homepage")
                            .documentId("homepage")
                    ),
                S.listItem()
                    .title("News Page")
                    .icon(FaNewspaper)
                    .child(
                        S.editor()
                            .id('newsPage')
                            .title('News Page')
                            .schemaType("newsPage")
                            .documentId("newsPage")
                    ),
                S.listItem()
                    .title("About Derek Robins")
                    .icon(FaWind)
                    .child(
                        S.editor()
                            .id('aboutDel')
                            .title('About Derek Robins')
                            .schemaType("aboutDel")
                    ),
                S.listItem()
                    .title("About The Course")
                    .icon(FaWarehouse)
                    .child(
                        S.editor()
                            .id('aboutTheCourse')
                            .title('About The Course')
                            .schemaType("aboutTheCourse")
                    ),
                S.listItem()
                    .icon(FaTree)
                    .title("Nature Page")
                    .child(
                        S.editor()
                            .id('naturePage')
                            .title('Nature Page')
                            .schemaType("nature")
                    ),
                S.listItem()
                    .title("The Club")
                    .icon(TiGroup)
                    .child(
                        S.editor()
                            .id('theClub')
                            .title('The Club')
                            .schemaType("theClub")
                    ),
                S.listItem()
                    .title("The Shop")
                    .icon(FaShoppingCart)
                    .child(
                        S.editor()
                            .id('theShop')
                            .title('The Shop')
                            .schemaType("theShop")
                    ),
                S.listItem()
                    .title("Your Visit")
                    .icon(FaMapSigns)
                    .child(
                        S.editor()
                            .id('yourVisit')
                            .title('Your Visit')
                            .schemaType("yourVisit")
                    ),
                S.divider(),
                S.listItem()
                    .title('Nature Items')
                    .child(
                        S.documentList()
                            .title('Nature Items')
                            .filter('_type == $type')
                            .params({ type: 'natureItem'})
                    ),
                S.listItem()
                    .title('News Items')
                    .child(
                        S.documentList()
                            .title('News Items')
                            .filter('_type == $type')
                            .params({ type: 'news'})
                    ),
                S.listItem()
                    .title('Blog Items')
                    .child(
                        S.documentList()
                            .title('Blog Items')
                            .filter('_type == $type')
                            .params({ type: 'aboutDelItem'})
                    ),
                S.listItem()
                    .title('Course Layouts')
                    .child(
                        S.documentList()
                            .title('Course Layouts')
                            .filter('_type == $type')
                            .params({ type: 'courseLayout'})
                    ),
                S.divider(),
                S.listItem()
                    .title('SEO').icon(MdInsertChart)
                    .child(
                        S.editor()
                            .id('siteSettings')
                            .title('Meta Descriptions')
                            .schemaType('siteSettings')
                            .documentId('siteSettings')
                    ),
                S.listItem()
                    .title('Contact details').icon(MdContactPhone)
                    .child(
                        S.editor()
                            .id('footerContact')
                            .title('Contact details')
                            .schemaType('contactDetails')
                            .documentId('contactDetails')
                    ),
                S.listItem()
                    .title('Footer content').icon(MdVerticalAlignBottom)
                    .child(
                        S.editor()
                            .id('footer2')
                            .title('Footer content')
                            .schemaType('footer')
                            .documentId('footer')
                    ),
                S.listItem()
                    .title('Legal').icon(MdGavel)
                    .child(
                        S.list()
                            .title('Legal')
                            .items([
                                S.documentListItem()
                                    .title('Terms and Conditions')
                                    .schemaType('legal')
                                    .id('termsAndConditions'),
                                S.documentListItem()
                                    .title('Cookies')
                                    .schemaType('legal')
                                    .id('cookies'),
                                S.documentListItem()
                                    .title('Privacy Policy')
                                    .schemaType('legal')
                                    .id('privacyPolicy'),
                                S.documentListItem()
                                    .title('404 Page')
                                    .schemaType('fourzerofour')
                                    .id('fourzerofourpage')
                            ])


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



