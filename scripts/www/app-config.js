// 全局配置数据
        const appConfig = {
            basic: {
                hotelName: "华美达安可公寓酒店",
                hotelNameEn: "RAMADA ENCORE BY WYNDHAM",
                welcomeMainText: "欢迎入住华美达安可公寓酒店",
                welcomeSubText: "安可之选 洁净舒适 价格更贴心",
                welcomeTipText: "点击“OK”键 看电视",
                wifiInfo: "WIFI名称：房间号/cmcc-房间号    密码：ak66668888",
                weatherInfo: "金东区 | 晴 | 15℃",
                countdown: 5,
                mainImage: "images/default/main.jpg"
            },
            carouselImages: [
                "images/default/bg1.jpg",
                "images/default/bg2.jpg",
                "images/default/bg3.jpg"
            ],
            bottomNav: [
                {
                    "id": "tv",
                    "name": "看电视",
                    "type": "app",
                    "appUrl": "intent://com.horsemail.yourtv/launch?source=hotel#Intent;scheme=android;package=com.horsemail.yourtv;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;end",
                    "audio": "audio/tv.mp3",
                    "desc": "跳转至自定义直播APP，支持本地频道添加"
                },
                {
                    id: "brand",
                    name: "酒店介绍",
                    type: "modal",
                    modalTitle: "华美达安可公寓酒店",
                    modalContent: "华美达安可公寓酒店位于北二环路与赤松路交叉口，交通便利。项目周边还有4大产业地标（华东水果批发市场、汽车城、汽配城、花木之窗）。我们秉持“干净、舒适、超值、不贵”的理念，让每一次停留都像回家一样安心，出差旅行住这里，省钱又不委屈自己！",
                    audio: "audio/brand.mp3",
                    confirmText: "我知道了",
                    cancelText: "关闭"
                },
                {
                    id: "service",
                    name: "客房服务",
                    type: "page",
                    pageTitle: "华美达安可客房服务",
                    pageContent: "<h3>客房服务列表</h3><ul style='margin: 20px 0; padding-left: 20px;'><li>客房清洁服务</li><li>房间送物</li><li>叫醒服务</li><li>行李寄存服务</li></ul><p>订房热线：152 6861 8128</p><p>酒店地址：浙江省·金华市·金东区·华美达安可酒店式公寓</p>",
                    audio: "audio/service.mp3"
                },
                {
                    id: "cast",
                    name: "投屏",
                    type: "modal",
                    modalTitle: "投屏使用指南",
                    modalContent: "1. 确保您的手机/平板与酒店WIFI（RAMADA-ENCORE）连接同一网络；<br>2. 打开手机端视频APP（如腾讯视频、爱奇艺）；<br>3. 点击视频播放页的“投屏”图标，选择“华美达安可客房电视”；<br>4. 连接成功后即可在电视上观看手机视频内容。 ",
                    audio: "audio/cast.mp3",
                    confirmText: "确认",
                    cancelText: "取消"
                },
                {
                    id: "shop",
                    name: "酒水零食",
                    type: "modal",
                    modalTitle: "客房商品价目表",
                    modalContent: "<div class='bglf'><div class='bgjm'>物品名称</div><div class='bgjg'>价格</div><div class='bgjm'>物品名称</div><div class='bgjg'>价格</div>"
                     + "<div class='bgjm'>雪花超爽500ml</div><div class='bgjg'>￥4:00</div><div class='bgjm'>康师傅红烧牛肉面（桶）</div><div class='bgjg'>￥6:00</div>"
                     + "<div class='bgjm'>雪花勇闯天涯500ml</div><div class='bgjg'>￥7:00</div><div class='bgjm'>统一老坛酸菜面（桶）</div><div class='bgjg'>￥6:00</div>"
                     + "<div class='bgjm'>雪碧500ml</div><div class='bgjg'>￥4:00</div><div class='bgjm'>火腿肠</div><div class='bgjg'>￥2:00</div>"
                     + "<div class='bgjm'>冰红茶</div><div class='bgjg'>￥4:00</div><div class='bgjm'>八宝粥</div><div class='bgjg'>￥4:00</div>"
                     + "<div class='bgjm'>可口可乐500ml</div><div class='bgjg'>￥4:00</div><div class='bgjm'>鸭腿</div><div class='bgjg'>￥8:00</div>"
                     + "<div class='bgjm'>红牛</div><div class='bgjg'>￥8:00</div><div class='bgjm'>花生米</div><div class='bgjg'>￥5:00</div>"
                     + "<div class='bgjm'>矿泉水</div><div class='bgjg'>￥2:00</div><div class='bgjm'>卫龙辣条65克</div><div class='bgjg'>￥4:00</div>"
                     + "<div class='bgjm'>香葱苏打饼干</div><div class='bgjg'>￥5:00</div><div class='bgjm'>卫龙辣条102克</div><div class='bgjg'>￥5:00</div>"
                     + "<div class='bgjm'>乐事黄瓜味暑片40g</div><div class='bgjg'>￥6:00</div><div class='bgjm'>旺旺雪饼</div><div class='bgjg'>￥5:00</div>"
                     + "</div>",
                    audio: "audio/cast.mp3",
                    confirmText: "确认",
                    cancelText: "取消"
                },
                {
                    id: "promotion",
                    name: "开业优惠",
                    type: "modal",
                    modalTitle: "重装开业 礼惠全城",
                    modalContent: "<div style='text-align: center; margin: 10px 0;'><img src='images/promotion.jpg' alt='开业优惠' style='width: 100%; max-width: 500px; border-radius: 8px;'></div><p style='margin: 15px 0;'>华美达安可公寓酒店重装开业！金华汽车城旁的宝藏酒店，性价比拉满！</p><p>✅ 凭券入住立减40元</p><p>✅ 舒适大床房 原价138元 现价98元</p><p>✅ 影音双床房/大床房 原价148元 现价108元</p><p>开业时间：2026年3月3日</p><p>订房热线：152 6861 8128</p>",
                    audio: "audio/promotion.mp3",
                    confirmText: "我知道了",
                    cancelText: "关闭"
                },
                {
                    id: "contact",
                    name: "联系我们",
                    type: "modal",
                    modalTitle: "联系华美达安可",
                    modalContent: "<p>📞 订房热线：152 6861 8128</p><p>📍 酒店地址：浙江省金华市金东区北二环路与赤松路交叉口</p><p>🚗 周边地标：华东水果批发市场、汽车城、汽配城、花木之窗</p><div style='margin-top: 20px; text-align: center;'><img src='images/qrcode.jpg' alt='预订二维码' style='width: 150px; height: 150px;'><p style='margin-top: 10px; font-size: 14px;'>扫码预订 立享优惠</p></div>",
                    audio: "audio/contact.mp3",
                    confirmText: "我知道了",
                    cancelText: "关闭"
                },
                {
                    id: "join",
                    name: "合作咨询",
                    type: "page",
                    pageTitle: "华美达安可合作咨询",
                    pageContent: "<h3>合作类型</h3><ul style='margin: 20px 0; padding-left: 20px;'><li>企业协议价合作</li><li>旅游团队接待合作</li><li>场地租赁（会议室/宴会厅）</li><li>异业联盟合作</li></ul><p>合作咨询热线：152 6861 8128（同订房热线）</p><p>咨询时间：9:00-18:00</p>",
                    audio: "audio/join.mp3"
                },
                {
                    id: "settings",
                    name: "设置",
                    type: "modal",
                    modalTitle: "系统设置",
                    audio: "audio/settings.mp3"
                }
            ],
            audio: {
                welcome: "audio/welcome.mp3",
                jumpToNav: "audio/jump-to-nav.mp3",
                default: "audio/click.mp3"
            }
        };