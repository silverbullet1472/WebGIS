
        // 百度地图API功能
        var map = new BMap.Map("mapvmap", {
            enableMapClick: false
        });    // 创建Map实例
        map.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

        map.setMapStyle({
            style: 'light'
        });

        var randomCount = 300;

        var data = [];

        var citys = ['北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '天津', '重庆', '武汉', '苏州', '佛山', '宁波', '无锡', '东莞', '青岛', '西安', '长沙', '郑州', '常州', '大连', '厦门', '济南', '中山', '昆明', '沈阳', '嘉兴', '福州', '珠海', '温州', '合肥', '南昌', '南宁', '南通', '绍兴', '泉州', '湖州', '惠州', '台州', '长春', '金华', '江门', '海口', '贵阳', '潍坊', '哈尔滨', '烟台', '石家庄', '廊坊', '镇江', '扬州', '香港特别行政区', '乌鲁木齐', '兰州', '徐州', '肇庆', '济宁', '泰州', '汕头', '保定', '临沂', '德州', '攀枝花', '衢州', '清远', '湘潭', '东营', '太原', '绵阳', '营口', '洛阳', '盐城', '桂林', '淄博', '宜昌', '赣州', '柳州', '九江', '朝阳', '银川', '遵义', '沧州', '唐山', '呼和浩特', '德阳', '襄阳', '威海', '黄石', '延安', '连云港', '衡阳', '芜湖', '盘锦', '拉萨', '荆州', '株洲', '许昌', '三亚', '滁州', '秦皇岛', '鄂尔多斯', '揭阳', '枣庄', '丽水', '广安', '宜宾', '孝感', '邢台', '开封', '丹东', '漳州', '黄山', '邯郸', '鞍山', '茂名', '马鞍山', '莆田', '潮州', '泸州', '遂宁', '眉山', '宜春', '淮安', '蚌埠', '包头', '上饶', '聊城', '郴州', '钦州', '南充', '铁岭', '泰安', '运城', '西宁', '梅州', '渭南', '衡水', '锦州', '红河哈尼族彝族自治州', '黔南布依族苗族自治州', '新乡', '菏泽', '抚顺', '六安', '汉中', '宣城', '莱芜', '咸阳', '吉林', '毕节', '南阳', '河源', '绥化', '焦作', '德宏傣族景颇族自治州', '滨州', '阜阳', '大理白族自治州', '平凉', '抚州', '黄冈', '咸宁', '汕尾', '信阳', '驻马店', '云浮', '娄底', '石嘴山', '张家口', '荆门', '喀什地区', '宝鸡', '宿州', '楚雄彝族自治州', '益阳', '玉溪', '宿迁', '葫芦岛', '常德', '安庆', '乌兰察布', '北海', '昌吉回族自治州', '辽阳', '大同', '永州', '铜陵', '巴音郭楞蒙古自治州', '宁德', '韶关', '延边朝鲜族自治州', '庆阳', '淮南', '临汾', '黔东南苗族侗族自治州', '岳阳', '甘孜藏族自治州', '南平', '玉林', '阿坝藏族羌族自治州', '随州', '三明', '湛江', '吉安', '曲靖', '阳泉', '晋城', '资阳', '山南', '景德镇', '吐鲁番', '佳木斯', '十堰', '齐齐哈尔', '保山', '阳江', '海西蒙古族藏族自治州', '漯河', '中卫', '淮北', '大庆', '乐山', '舟山', '商洛', '鹰潭', '哈密', '百色', '吕梁', '濮阳', '防城港', '龙岩', '阜新', '六盘水', '榆林', '儋州', '亳州', '普洱', '牡丹江', '湘西土家族苗族自治州', '晋中', '商丘', '巴中', '甘南藏族自治州', '周口', '伊犁哈萨克自治州', '黔西南布依族苗族自治州', '松原', '内江', '白银', '本溪', '海东', '鄂州', '七台河', '鹤壁', '达州', '邵阳', '黑河', '长治', '河池', '安康', '池州', '萍乡', '广元', '赤峰', '贵港', '呼伦贝尔', '日照', '铜仁', '定西', '承德', '白山', '怀化'];

        var counts = [2549, 2102, 1258, 1114, 705, 424, 364, 357, 322, 312, 295, 203, 192, 163, 162, 149, 142, 137, 116, 103, 100, 90, 85, 83, 73, 71, 68, 67, 65, 65, 64, 59, 48, 47, 44, 43, 41, 40, 40, 39, 38, 34, 34, 34, 34, 31, 31, 31, 28, 28, 28, 28, 22, 22, 22, 22, 21, 20, 19, 18, 17, 16, 16, 16, 16, 15, 15, 15, 14, 14, 14, 13, 13, 13, 12, 12, 11, 11, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


        var i = 0;
        // 构造数据
        while (i < citys.length) {
            var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[i]);
            try{
                data.push({
                    geometry: {
                        type: 'Point',
                        coordinates: [cityCenter.lng , cityCenter.lat]
                    },
                    count: counts[i]
                    });
            }catch(e){
                console.log(e.name + ' : ' + e.message);
            }
            i++;
        }
            
         

        var dataSet = new mapv.DataSet(data);

        var options = {
             fillStyle: 'rgba(255, 50, 50, 0.6)',
            shadowColor: 'rgba(255, 50, 50, 1)',
            shadowBlur: 30,
            globalCompositeOperation: 'lighter',
            methods: {
                click: function (item) {
                    console.log(item);
                }
            },
            size: 5,
            draw: 'simple'
        }

        var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);