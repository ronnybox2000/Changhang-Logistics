<template>
    <div class="seafreight">
        <div class="seafreight-top">
            <topCom></topCom>
            <div class="seafreight-top-content main">
                <titleDomVue :title="'海运整箱 拼箱服务'" content="昌航与各大物流服务商紧密合作，为客户提供海运整箱&拼箱服务，线路遍及全球主要航线，费用
透明合理，是您的信任之选！">
                </titleDomVue>
            </div>
        </div>
        <div class="breadcrumbs">
            <div class="main">
                <breadcrumbVue></breadcrumbVue>
            </div>
        </div>
        <div class="service">
            <serviceContentVue></serviceContentVue>
        </div>
        <!-- 国际海运拼箱服务 -->
        <div class="sea-service">
            <div class="service">
                <titleDom :title="'国际海运拼箱服务'" content="海运出口根据客户的委托，办理货物出口前后的一切业务；审核客户提供的各类清单和批件；缮制各类单证；订舱、报关；">
                </titleDom>
            </div>
            <div class="sea-service-box clearfix">
                <div class="lf"><img src="@/assets/img/sea-service-img02.jpg" alt="海运整箱服务">
                    <div class="content">
                        <h3>海运整箱服务</h3>
                        <p>提供覆盖全球的国际货运代理整箱业务，包括门到门服务等海内外延伸服务；<br>进出口、退运、保税、转关等在内的所有贸易协作服务以及保险代理服务。</p>
                    </div>
                </div>

                <div class="rt"> <img src="@/assets/img/sea-service-img02.jpg" alt="海运拼箱服务">
                    <div class="content">
                        <h3>海运拼箱服务</h3>
                        <p>承接普货、超长超重、危险品和挂衣箱等各类拼箱业务，严格执行SOP作业，<br>装箱现场实时监控，装船后24小时内签发提单，提供目的港查询服务</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 海运散货拼箱优势 -->
        <div class="sea-service-adcantage">
            <div class="service">
                <titleDom :title="'海运散货拼箱优势'" content="始终将客户需求放在首位，提供更精细全面的海运散货拼箱服务"></titleDom>
            </div>
            <div class="sea-service-content">
                <ul class="clearfix">
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/sea-service-icon01.png" alt="" /> </dt>
                            <dd> <i></i>
                                <p>遍布全球的直拼点与密集稳定的船期</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/sea-service-icon02.png" alt="" /> </dt>
                            <dd> <i></i>
                                <p>透明的报价体系和公正的目的地港收费标准</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/sea-service-icon03.png" alt="" /> </dt>
                            <dd> <i></i>
                                <p>在重要港口拥有现代化的合作仓库</p>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt> <img src="@/assets/img/sea-service-icon04.png" alt="" /> </dt>
                            <dd> <i></i>
                                <p>提供24小时货物在线跟踪查询服务</p>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 海运整箱服务优势 -->
        <div class="sea-add-service">
            <div class="service">
                <div class="sea-add-service-top">
                    <titleDom1 :title="'海运散货拼箱优势'" content="提供差异化服务，致力为客户创造更大的增值空间！"></titleDom1>
                </div>
            </div>
            <div class="sea-add-service-box">
                <img src="@/assets/img/sea-service-img04.jpg" alt="" />
                <ul class="items-box">
                    <li>
                        <p> <span></span> 迅速的门点及内陆运输服务 </p>
                        <h6>设有常驻门点，灵活配置资源，压缩时间与成本，现代化物流体系，满足内陆货物运输的需求</h6>
                    </li>
                    <li>
                        <p> <span></span> 专业报关公司，提供多种特殊通关公司 </p>
                        <h6>专有驻点报关点，通关能力强，速度快捷高效，提供多选择的优化进口清关方案</h6>
                    </li>
                    <li>
                        <p> <span></span> 自营拼箱仓库储备空间大 </p>
                        <h6>仓库占地面积12万平方米，拥有健全的内装箱拼箱仓库服务体系和规范化服务流程</h6>
                    </li>
                    <li>
                        <p> <span></span> 一站式运输保险解决方案 </p>
                        <h6>与多家保险企业合作，货运险承保范围覆盖全球，全称提供一对一专属服务</h6>
                    </li>
                </ul>
            </div>
        </div>
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
import titleDomVue from './components/titleDom_seafreight.vue';
import breadcrumbVue from '@/components/breadcrumb.vue';
import titleDom from '@/components/componentsDom/titleDom.vue';
import titleDom1 from './components/titleDom.vue';
import footerComVue from '@/components/footerCom.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
export default {
    name: 'seafreight',
    components: {
        topCom,
        titleDomVue,
        breadcrumbVue,
        titleDom,
        titleDom1,
        footerComVue,
        ideaDomVue
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
.seafreight {
    .seafreight-top {
        padding-top: 30px;
        height: 800px;
        background: url('@/assets/img/sea-service-banner.jpg') no-repeat;

        .seafreight-top-content {
            text-align: center;
            color: #fff;
            margin-top: 202px;

            .seafreight-content-h3 {
                font-size: 40px;
            }

            .seafreight-content-p {
                font-size: 18px;
                color: #d5d8da;
                margin: 10px 0 65px;
            }

            .seafreight-content-p2 {
                font-size: 16px;
                margin: 20px auto 0;
            }
        }
    }

    .breadcrumbs {
        padding: 20px 0;
        text-align: center;
        background-color: #ffffff;
    }

    // .sea-service {
    //     margin-top: 100px;
    // }
    .sea-service-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sea-service .sea-service-box .lf {
        float: left;
    }

    .sea-service .sea-service-box .rt {
        float: left;
        margin-left: 40px;
    }

    .sea-service .content {
        margin-top: -145px;
    }

    .sea-service .content h3 {
        margin-bottom: 15px;
        color: #FFFFFF;
        font-weight: normal;
        font-size: 20px;
    }

    .sea-service .content p {
        color: #FFFFFF;
        font-size: 13px;
        line-height: 20px;
    }

    .sea-service-adcantage {
        padding-bottom: 90px;
    }

    .sea-service-adcantage .sea-service-content {
        margin: 0 auto;
        width: 1220px;
    }

    .sea-service-adcantage .sea-service-content li {
        float: left;
    }

    .sea-service-adcantage .sea-service-content li+li {
        margin-left: 49.3px;
    }

    .sea-service-adcantage .sea-service-content li dl {
        width: 268px;
        text-align: center;
    }

    .sea-service-adcantage .sea-service-content li dl dt {
        width: 268px;
        height: 178px;
        border: 1px solid #D8D8D8;
        border-radius: 5px;
        background-color: #F5F5F5;
        line-height: 176px;
    }

    .sea-service-adcantage .sea-service-content li dl dd {
        margin: 0 0 0 0;
    }

    .sea-service-adcantage .sea-service-content li dl dt img {
        opacity: 0.5;
        filter: grayscale(100%);
        vertical-align: middle;
    }

    .sea-service-adcantage .sea-service-content li:hover dl dt img {
        opacity: 1;
        filter: grayscale(0);
    }

    .sea-service-adcantage .sea-service-content li dl i {
        display: inline-block;
        margin: 27px 0 29px;
        width: 35px;
        height: 2px;
        background-color: #D6D6D6;
    }

    .sea-service-adcantage .sea-service-content li dl p {
        color: #666666;
        font-size: 13px;
        line-height: 20px;
    }

    .sea-add-service {
        width: 100%;
        height: 692px;
        background: url("@/assets/img/sea-service-img03.jpg") no-repeat;
        background-size: cover;
    }

    .sea-add-service .service {
        padding-top: 50px;
    }

    .sea-add-service .service h1,
    .sea-add-service .service p {
        color: #FFFFFF;
    }

    .sea-add-service .service p {
        font-size: 16px;
    }

    .sea-add-service-box {
        position: relative;
        margin-left: 0px;
        width: 1220px;
        margin-top: -50px;
    }

    .sea-add-service-box img {
        margin-top: 100px;
        width: 668px;
        height: 450px;
    }

    .sea-add-service-box .items-box {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 5px 0 0 20px;
        width: 668px;
        height: 405px;
        background-color: #FFFFFF;
        text-align: left;
        margin-right: -320px;

    }

    .sea-add-service-box .items-box li {
        margin-bottom: 25px;

    }

    .sea-add-service-box .items-box p {
        margin-bottom: 10px;
        color: #333333;
        font-size: 16px;
    }

    .sea-add-service-box .items-box h6 {
        overflow: hidden;
        padding-left: 30px;
        color: #777777;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: normal;
        font-size: 13px;
    }

    .sea-add-service-box .items-box p span {
        display: inline-block;
        margin-right: 15px;
        width: 14px;
        height: 3px;
        background-color: #DCDCDC;
        vertical-align: middle;
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
