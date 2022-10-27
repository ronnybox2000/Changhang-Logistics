<template>
    <div class="imports">
        <div class="imports-top">
            <topCom></topCom>
            <div class="imports-top-content main">
                <titleDomVue :title="'一站式进口清关报关代理服务'" content="20年进口代理服务经验，为您提供从产品进口方案制定，进口国际物流，进口金融增值等，一体化进口报关代理服务。">
                </titleDomVue>
            </div>
        </div>
        <!-- <div class="breadcrumbs">
            <div class="main">
                <breadcrumbVue></breadcrumbVue>
            </div>
        </div> -->
        <div class="fangan">
            <div class="fangan_top xinzeng clearfix">
                <div class="fangan_left">
                    <span><img src="@/assets/img/fangan_img.png" /></span>
                    <h2>Kbans进口报关代理解决方案</h2>
                    <span class="xian"></span>
                    <p>
                        琪邦进口报关服务涉及32个大类，150多种小类满足您不同的进口产品需求 为您提供全方位全品类的进口报关解决方案。</p>
                </div>
                <div class="fangan_right">
                    <ul class="clearfix">
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img1.jpg" />
                                <p>医用物资清关报关</p>
                                <span>Medical supplies</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img2.jpg" />
                                <p>新旧设备进口报关</p>
                                <span>Equipment </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img3.jpg" />
                                <p>原木板材进口报关</p>
                                <span>Material Science</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img4.jpg" />
                                <p>化工品进口报关</p>
                                <span>Chemical products</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img5.jpg" />
                                <p>化妆品进口报关</p>
                                <span>Make-up</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img6.jpg" />
                                <p>农副产品进口报关</p>
                                <span>Agricultural</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img7.jpg" />
                                <p>冷冻海鲜进口报关</p>
                                <span>Seafood</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img11.jpg" />
                                <p>食品酒类进口报关 </p>
                                <span>Factory Relocation</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img9.jpg" />
                                <p>机械进口报关 </p>
                                <span>Machinery Import</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/fangan_img10.jpg" />
                                <p>仪器进口报关</p>
                                <span>Instrument import</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 进口报关代理服务 -->
            <div class="air-index-serviceDom">
                <titleDom :title="'进口报关代理服务'" content="跟踪定制项目流程，优化运转环节，提供完善全面的一站式空运服务。"></titleDom>
                <div class="air-index-service main">
                    <div class="air-index-service-list" v-for="(item, index) in serviceData" :key="index">
                        <div><img :src="item.img" alt="" /></div>
                        <div class="introduce">
                            <div>
                                <div class="introduce-h3">{{ item.h3 }}</div>
                                <div class="introduce-p">{{ item.p }}</div>
                                <div class="introduce-content">{{ item.content }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 代理优势 -->
            <div class="agency-service-advantage">
                <div class="service">
                    <h2 class="container"> <span class="trangle_01"></span> 进口代理服务优势 <span class="trangle_02"></span>
                    </h2>
                    <p>琪邦希望通过一站式的代理服务，为客户提供便捷快速的服务体验！</p>
                </div>
                <div class="agency-service-advantage-box container">
                    <ul class="clearfix agency-service-advantage-detail">
                        <li>
                            <dl class="clearfix">
                                <dt><img src="@/assets/img/1513367273297770692.png" alt="一站式服务" /></dt>
                                <dd>
                                    <h3>一站式服务</h3>
                                    <p>外贸全流程服务，更省心。</p>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="clearfix">
                                <dt><img src="@/assets/img/1513367273297770692.png" alt="专业团队" /></dt>
                                <dd>
                                    <h3>专业团队</h3>
                                    <p>安全实时高效，回款快。</p>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="clearfix">
                                <dt><img src="@/assets/img/1513367273297770692.png" alt="银行结汇" /></dt>
                                <dd>
                                    <h3>银行结汇</h3>
                                    <p>安全实时高效，回款快。</p>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="clearfix">
                                <dt><img src="@/assets/img/1513367273297770692.png" alt="低成本" /></dt>
                                <dd>
                                    <h3>低成本</h3>
                                    <p>同行业更低费率，省成本。</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 进口代理服务 -->
            <div class="agency-add-service">
                <div class="service">
                    <h2 class="container"> <span class="trangle_01"></span> 进口代理增值服务 <span class="trangle_02"></span>
                    </h2>
                    <p>客户至上，打造增值化服务，创造顾客满意的代理服务！</p>
                </div>
                <ul class="agency-add-service-box clearfix">
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/storage-img06.jpg" alt="业务保障风险管控" /> </dt>
                            <dd>
                                <div class="t">业务保障风险管控</div>
                                <p>100%安全保障，专业团队全程把控风险，包括收汇、物流、操作等服务，确保交易成功。</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/storage-img07.jpg" alt="贴心的管家式服务" /> </dt>
                            <dd>
                                <div class="t">贴心的管家式服务</div>
                                <p>提供7*24小时一对一的管家式服务，让客户不用担心任何突发情况，能够得到及时响应。</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/storage-img06.jpg" alt="专业的物流服务" /> </dt>
                            <dd>
                                <div class="t">专业的物流服务</div>
                                <p>提供专业、安全、快捷的国际货运服务，专业快捷，高效保障，真正实现节省成本。</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/storage-img07.jpg" alt="强大的系统支撑" /> </dt>
                            <dd>
                                <div class="t">强大的系统支撑</div>
                                <p>现代化的“琪邦货代系统”，以提升服务效率和用户体验为核心，致力提高业务执行效率。</p>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <!-- 进口报关代理服务流程  -->
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
    </div>
</template>

<script>
import topCom from '@/components/topCom.vue';
import titleDomVue from './components/titleDom_imports.vue';
import titleDom from '@/components/componentsDom/titleDom.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
import footerComVue from '@/components/footerCom.vue';
export default {
    name: 'imports',
    components: {
        topCom,
        titleDomVue,
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
.imports {
    .imports-top {
        padding-top: 30px;
        height: 800px;
        background: url('@/assets/img/agency-banner.jpg') no-repeat;

        .imports-top-content {
            text-align: center;
            color: #fff;
            margin-top: 120px;
        }

        .imports-content-h3 {
            font-size: 40px;
        }

        .imports-content-p {
            font-size: 18px;
            color: #d5d8da;
            margin: 10px 0 65px;
        }
    }

    .xinzeng {
        width: 1220px;
        margin: 0 auto;
    }

    .fangan .fangan_top {
        background: url('@/assets/img/fangan_bg.png') no-repeat left center;
        height: 248px;
        margin-bottom: 20px;
        margin-top: -20px;
        position: relative;
        z-index: 2;
    }

    .fangan .fangan_top .fangan_left {
        padding-top: 50px;
        padding-left: 37px;
        float: left;
        width: 360px;
        text-align: left
    }

    .fangan .fangan_top .fangan_left h2 {
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
    }

    .fangan .fangan_top .fangan_left .xian {
        height: 2px;
        display: block;
        width: 55px;
        border-top: 2px solid #e72024;
        margin: 15px 0;
    }

    .fangan .fangan_top .fangan_left p {
        font-size: 14px;
        color: #fff;
    }

    .fangan .fangan_top .fangan_right {
        padding-left: 37px;
        float: left;
        width: 830px;
        margin-top: -40px;
    }

    .fangan .fangan_top .fangan_right ul {
        width: 100%;
    }

    .fangan .fangan_top .fangan_right ul li {
        width: 20%;
        float: left;
        display: block;
        text-align: center;
    }

    .fangan .fangan_top .fangan_right ul li div {
        margin: 22px;
    }

    .fangan .fangan_top .fangan_right ul li div p {
        font-size: 14px;
        color: #666666;
        margin-top: 8px;
    }

    .fangan .fangan_top .fangan_right ul li div span {
        font-size: 10px;
        color: #999999;
    }

    .fangan .fangan_top .fangan_right ul li:nth-child(1n) {
        background-color: #fff;
    }

    .fangan .fangan_top .fangan_right ul li:nth-child(2n) {
        background-color: #ffffff;
    }

    .air-index-serviceDom {
        background-color: #fff;
        padding-bottom: 80px;

        .air-index-service {
            display: flex;
            background-color: #fff;

            .air-index-service-list {
                margin-left: 8px;
                height: 420px;
                width: 302px;
                overflow: hidden;
                transition: all 0.6s;

                &:hover {
                    .introduce {
                        transform: translate(0px, -420px);
                        height: 420px;
                        background-color: rgba(7, 90, 168, 0.8);
                        display: flex;
                        align-items: center;

                        .introduce-content {
                            color: #fff;
                        }
                    }
                }
            }

            .introduce {
                transform: translate(0px, -80px);
                transition: all 0.6s;
                background-color: rgba(7, 7, 7, 0.6);
                width: 100%;
                padding: 20px 30px 0;
                height: 420px;

                .introduce-h3,
                .introduce-p {
                    text-align: left;
                    color: #fff;
                    font-size: 18px;
                }

                .introduce-p {
                    font-size: 10px;
                    margin-bottom: 10px;
                }

                .introduce-content {
                    font-size: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
        }
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

    .agency-service-advantage {
        margin-top: 50px;
    }

    .agency-service-advantage-box {
        position: relative;
        margin: 0 auto;
        width: 1220px;
        height: 502px;
        background: url("@/assets/img/agency-img05.jpg") no-repeat;
        background-size: cover;
    }

    .agency-service-advantage-detail {
        position: absolute;
        bottom: -65px;
        margin-top: 378px;
        padding: 0 90px;
        width: 1220px;
        height: 124px;
        background-color: rgba(12, 104, 186, 0.98);
    }

    .agency-service-advantage-detail li {
        float: left;
        padding-top: 36px;
        /* width: 214px; */
        /* height: 124px; */
    }

    .agency-service-advantage-detail li+li {
        margin-left: 48px;
    }

    .agency-service-advantage-detail li dl {
        width: 224px;
    }

    .agency-service-advantage-detail li dl dt {
        float: left;
    }

    .agency-service-advantage-detail li dl dd {
        margin-left: 50px;
    }

    .agency-service-advantage-detail li dl dd h3 {
        color: #FFFFFF;
        font-weight: normal;
        font-size: 18px;
    }

    .agency-service-advantage-detail li dl dd p {
        color: #FFFFFF;
        /* font-weight: normal; */
        font-size: 14px;
    }

    .agency-add-service {
        padding-bottom: 90px;
        background-color: #fff;
    }

    .agency-add-service .service {
        padding-top: 100px;
    }

    .agency-add-service-box {
        margin: 0 auto;
        width: 1220px;
    }

    .agency-add-service-box li {
        float: left;
    }

    .agency-add-service-box li+li {
        margin-left: 6.3px;
    }

    .agency-add-service-box li dl {
        width: 300px;
    }

    .agency-add-service-box li dd {
        padding: 25px 33px;
        height: 130px;
        width: 300px;
        background-color: #F7F7F7;
        text-align: center;
        margin-left: auto;
    }

    .agency-add-service-box li img {
        width: 300px;
    }

    .agency-add-service-box li dd h3 {
        margin-bottom: 8px;
        color: #333333;
        /* font-weight: normal; */
        font-size: 16px;
    }

    .agency-add-service-box li dd .t {
        margin-bottom: 8px;
        // color: #333333;
        /* font-weight: normal; */
        font-size: 16px;
    }

    .agency-add-service-box li dd p {
        color: #7E7E7E;
        font-size: 13px;
        line-height: 20px;
    }
}
</style>
