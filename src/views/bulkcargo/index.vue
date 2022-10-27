<template>
    <div class="bulkcargo">
        <div class="bulkcargo-top">
            <!--  -->
            <topCom></topCom>
            <div class="bulkcargo-top-content main">
                <titleDomVue :title="'散货船运输'" content="提供包括重大件、工程车辆、机械设备、钢材等散杂货的运输，以及各种超长、超高、超重等大型
设备的多式联运服务。">
                </titleDomVue>
            </div>
            <!--  -->
            <div class="banner-icon-show">
                <ul>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon01.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon02.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon03.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon04.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon05.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon06.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon07.png" alt=""> </a> </li>
                    <li> <a href=""> <img src="@/assets/img/bulk-ship-banner-icon08.png" alt=""> </a> </li>
                </ul>
            </div>
        </div>
        <!--  -->
        <div class="breadcrumbs">
            <div class="main">
                <breadcrumbVue></breadcrumbVue>
            </div>
        </div>
        <!--  -->
        <div class="service-content">
            <div class="service">
                <titleDom :title="'散货船运输'" content="提供包括重大件、工程车辆、机械设备、钢材等散杂货的运输，以及各种超长、超高、超重等大型
设备的多式联运服务。">
                </titleDom>
            </div>
            <ul class="service-content-lists clearfix">
                <li> <a href="#">
                        <dl>
                            <dt><img src="@/assets/img/bulk-ship-img01.jpg" alt="仓储与分拨" /></dt>
                            <dd>
                                <h3>仓储与分拨</h3>
                                <p>全链式仓储管理，流程化运作严格
                                    把控配送及效率。</p>
                            </dd>
                        </dl>
                    </a> </li>
                <li> <a href="#">
                        <dl>
                            <dt><img src="@/assets/img/bulk-ship-img01.jpg" alt="货物订舱" /></dt>
                            <dd>
                                <h3>货物订舱</h3>
                                <p>充足舱位保证，及时发送预配舱单便于信息核对。</p>
                            </dd>
                        </dl>
                    </a> </li>
                <li> <a href="#">
                        <dl>
                            <dt><img src="@/assets/img/bulk-ship-img01.jpg" alt="货物保险" /></dt>
                            <dd>
                                <h3>货物保险</h3>
                                <p>与保险公司建立绿色理赔通道，直接对接快速出单。</p>
                            </dd>
                        </dl>
                    </a> </li>
                <li> <a href="#">
                        <dl>
                            <dt><img src="@/assets/img/bulk-ship-img01.jpg" alt="货物拼装" /></dt>
                            <dd>
                                <h3>货物拼装</h3>
                                <p>全天候电子监控，合理配载，杜绝货损。</p>
                            </dd>
                        </dl>
                    </a> </li>
                <li> <a href="#">
                        <dl>
                            <dt><img src="@/assets/img/bulk-ship-img01.jpg" alt="出口报关" /></dt>
                            <dd>
                                <h3>出口报关</h3>
                                <p>采用多个口岸和多种通关方式，减低货物查验率。</p>
                            </dd>
                        </dl>
                    </a> </li>
            </ul>
        </div>
        <div class="business-advantage">
            <div class="business-advantage-box clearfix">
                <div class="lf video-box"> <img src="@/assets/img/bulk-ship-img06.jpg" alt="" /> </div>
                <div class="rt advantage-details bulk-box">
                    <ul class="bulk">
                        <li>
                            <div class="t"> 散货船运输服务优势 </div>
                            <p>专业铸就高质量，服务造就高口碑，琪邦全心全意为您服务!</p>
                        </li>
                        <li>
                            <div class="t">优势行线更低散货船价格</div>
                            <p>欧洲地中海线 ---长期合约运价，优势内陆点代理服务</p>
                        </li>
                        <li>
                            <div class="t"> 可视化物流追踪 </div>
                            <p>拥有合理、公正的货代报价机制，无中间环节，客户直接受益，整体方案落地可行，规避虚高报价陷阱。</p>
                        </li>
                        <li>
                            <div class="t"> 系统化专业服务 </div>
                            <p>以客户需求为导向，量身定制安全高效的散货船解决方案</p>
                        </li>
                        <li>
                            <div class="t"> 可视化物流追踪 </div>
                            <p>全程定位追踪，精准精准定位货物位置，层层监控物流环节</p>
                        </li>
                        <li>
                            <div class="t"> 现代化管理团队 </div>
                            <p>队伍专业化、管理现代化、服务人性化，全天候散装船客服团队。</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 进口报关最新资讯 -->
        <div class="idea">
            <ideaDomVue></ideaDomVue>
            <div class="idea-ul main">
                <div class="idea-li" v-for="(item, index) in ideaUlDat" :key="index">
                    <ul>
                        <li v-for="(_item, _index) in item.content" :key="_index">
                            {{ _item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 尾注 -->
        <div class="footercontainer">
            <div class="main">
                <div class="footer-tabs-container"></div>
            </div>
        </div>
        <footerComVue></footerComVue>
    </div>
</template>

<script>
import topCom from '@/components/topCom.vue';
import titleDomVue from './components/titleDom.vue';
import titleDom from '@/components/componentsDom/titleDom.vue';
import breadcrumbVue from '@/components/breadcrumb.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
import footerComVue from '@/components/footerCom.vue';
export default {
    name: 'bulkcargo',
    components: {
        topCom,
        titleDomVue,
        breadcrumbVue,
        titleDom,
        ideaDomVue,
        footerComVue
    },
    data() {
        return {
            serviceData: [
                {
                    img: require('@/assets/img/main-index-img01.jpg'),
                    h3: '进口报关代理方案制定 ',
                    p: '费用合理，透明安全',
                    content:
                        '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
                },
                {
                    img: require('@/assets/img/main-index-img01.jpg'),
                    h3: '进口报关代理方案制定 ',
                    p: '费用合理，透明安全',
                    content:
                        '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
                },
                {
                    img: require('@/assets/img/main-index-img01.jpg'),
                    h3: '进口报关代理方案制定 ',
                    p: '费用合理，透明安全',
                    content:
                        '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
                },
                {
                    img: require('@/assets/img/main-index-img01.jpg'),
                    h3: '进口报关代理方案制定 ',
                    p: '费用合理，透明安全',
                    content:
                        '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
                }
            ],
            ideaUlDat: [
                {
                    content: [
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？'
                    ]
                },
                {
                    content: [
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？'
                    ]
                },
                {
                    content: [
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？',
                        '在国际海运中，货物大致分为哪六个步骤？'
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped lang="less">
.bulkcargo {
    .bulkcargo-top {
        padding-top: 30px;
        height: 800px;
        background: url('@/assets/img/bulk-ship-banner.jpg') no-repeat;

        .bulkcargo-top-content {
            text-align: center;
            color: #fff;
            margin-top: 120px;
        }

        .bulkcargo-content-h3 {
            font-size: 40px;
        }

        .bulkcargo-content-p {
            font-size: 18px;
            color: #d5d8da;
            margin: 10px 0 65px;
        }
    }

    .breadcrumbs {
        padding: 20px 0;
        text-align: center;
        background-color: #ffffff;
    }

    .banner-icon-show {
        width: 870px;
        margin: 50px auto 0;
        border: 1px solid rgba(255, 255, 255, 0.6);
        background-color: rgba(11, 27, 64, 0.5);
        padding: 30px 110px 0;
        margin-top: 300px;
    }

    .banner-icon-show li {
        margin-right: 50px;
        margin-bottom: 30px;
    }

    .banner-icon-show ul {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
    }

    .service-content {
        padding: 30px 0 80px;
    }

    .service-content-lists {
        margin: 0 auto;
        width: 100%;
        display: flex;
        // justify-content: space-between;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .service-content-lists li {
        float: left;
    }

    .service-content-lists li+li {
        margin-left: 21.25px;
    }

    .service-content-lists li dl {
        text-align: center;
    }

    .service-content-lists li dd {
        width: 227px;
        margin-left: 0px;
    }

    .service-content-lists li dd h2 {
        margin-bottom: 6px;
        font-size: 16px;
    }

    .service-content-lists li dd p {
        padding: 0 15px;
        color: #7E7E7E;
        font-size: 13px;
        line-height: 20px;
    }

    .business-advantage {
        padding: 0 auto;
        background-color: #F3F5F7;
    }

    .business-advantage .business-advantage-box {
        margin: 0 auto;
        width: 100%;
        padding-left: 350px;
    }

    .business-advantage .business-advantage-box .video-box {
        width: 559px;
        height: 534px;
    }

    .business-advantage .business-advantage-box .advantage-details {
        padding: 90px 0 0;
        width: 620px;
        text-align: left;
        margin-top: -565px;
        margin-left: 600px;
    }

    .business-advantage .business-advantage-box .advantage-details li {
        margin-bottom: 40px;
    }

    .business-advantage .business-advantage-box .advantage-details h3 {
        margin-bottom: 8px;
        color: #333333;
        font-weight: 600;
        font-size: 30px;
    }

    .business-advantage .business-advantage-box .advantage-details h3 span {
        color: #949494;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 22px;
    }

    .business-advantage .business-advantage-box .advantage-details p {
        color: #777777;
        font-size: 13px;
    }

    .business-advantage .business-advantage-box .advantage-details h3 {
        margin-bottom: 5px;
        color: #333333;
        font-weight: 700;
        font-size: 16px;
    }

    .business-advantage .business-advantage-box .advantage-details .t {
        margin-bottom: 8px;
        color: #333333;
        font-weight: 600;
        font-size: 30px;
    }

    .business-advantage .business-advantage-box .advantage-details .t span {
        color: #949494;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 22px;
    }

    .business-advantage .business-advantage-box .advantage-details p {
        color: #777777;
        font-size: 13px;
    }

    .business-advantage .business-advantage-box .advantage-details .t {
        margin-bottom: 5px;
        color: #333333;
        font-weight: 700;
        font-size: 16px;
    }

    .business-advantage .business-advantage-box .advantage-details .bulk li {
        margin-bottom: 30px;
    }

    .business-advantage .business-advantage-box .advantage-details.bulk-box {
        padding-top: 60px;
    }

    .idea {
        background-color: #f3f3f3;
        padding-bottom: 80px;

        .idea-ul {
            border-top: 1px solid #ebebec;
            padding-top: 20px;
            display: flex;

            .idea-li {
                width: 393px;
                text-align: left;
                margin-left: 20px;

                li {
                    list-style: circle;
                    color: #666666;
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
