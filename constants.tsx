
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [
  {
    id: 1,
    type: 'GADGET',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你打算买一辆电动汽车。请选择续航1500公里以上、上门安装充电桩、颜色为黑色的电动汽车。",
    reminder: "续航1500公里以上，上门安装充电桩，黑色。",
    products: [
      { id: 'bk1_1', name: 'Giant TCR', price: 22800, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/34800677/pexels-photo-34800677.jpeg', summary: '车型轻巧，爬坡神器', attributes: [{ label: '续航', value: '1680公里' }, { label: '充电桩安装', value: '上门安装' }, { label: '颜色', value: '黑色' }] },
      { id: 'bk1_2', name: 'Specialized Allez', price: 22500, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/34800677/pexels-photo-34800677.jpeg', summary: '气动造型，续航极长', attributes: [{ label: '续航', value: '1560公里' }, { label: '充电桩安装', value: '自行安装' }, { label: '颜色', value: '黑色' }] }
    ]
  },
  {
    id: 2,
    type: 'EDUCATION',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "假如你现在上班，需要买一辆电瓶车通勤。请你选择价格区间在1000-2000以内，续航距离超过70km，有脚踏板的电瓶车。",
    reminder: "1000-2000元，续航>70km，有脚踏板。",
    products: [
      { id: 's1', name: '雅迪 冠能M9', price: 1899, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400', summary: '增程系统，石墨烯电池，动力强劲', attributes: [{ label: '续航', value: '80km' }, { label: '车型', value: '无脚踏板' }] },
      { id: 's2', name: '爱玛 露娜Q1', price: 1599, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400', summary: '复古造型，轻巧易操控，适合女性', attributes: [{ label: '续航', value: '90km' }, { label: '车型', value: '有脚踏板' }] }
    ]
  },
  {
    id: 3,
    type: 'GIFT',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "假如你现在在准备一个求职面试，需要购置合适的服装。请选择价格区间在2000-3000以内，面料为羊毛，颜色为暗灰的西装。",
    reminder: "面试西装，2000-3000元，暗灰色，100%羊毛面料",
    products: [
      { id: 'c1', name: 'G2000 商务款', price: 2199, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '抗皱面料，职场新人首选', attributes: [{ label: '面料', value: '聚酯纤维混纺' },{ label: '颜色', value: '暗灰色' }] },
      { id: 'c2', name: '报喜鸟 尊享款', price: 2899, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '精纺羊毛，透气舒爽', attributes: [{ label: '面料', value: '80%羊毛' }, { label: '颜色', value: '暗灰色' }] },
      { id: 'c3', name: '威可多 VICUTU', price: 2550, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '意式风格，高级垂感', attributes: [{ label: '面料', value: '100%羊毛' }, { label: '颜色', value: '深灰色' }] }
    ]
  },
  {
    id: 4,
    type: 'GADGET',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "你是一名即将毕业的研究生，需要写长达数万字的论文并运行复杂的模拟数据，因此计划买一台笔记本电脑。请选择内存超过15G，价格在12000左右，可上门售后的电脑。",
    reminder: "内存≥15G，可上门售后，价格12000左右",
    products: [
      { id: 'l1', name: 'MBP 14 M3', price: 12999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: 'Mac系统稳定，Retina屏幕', attributes: [{ label: '内存', value: '18G' },{ label: '售后', value: '店面保修' }, { label: '散热', value: '双风扇' }] },
      { id: 'l2', name: 'ThinkPad X1', price: 11500, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '商务典范，极致键盘手感', attributes: [ { label: '内存', value: '32G' }, { label: '售后', value: '全球上门' }, { label: '散热', value: '双风扇' }] },
      { id: 'l3', name: 'Surface Laptop', price: 9500, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', summary: '全铝机身，触控交互', attributes: [ { label: '内存', value: '16G' }, { label: '售后', value: '寄修服务' }, { label: '散热', value: '无风扇' }] }
    ]
  },
  {
    id: 5,
    type: 'PHONE',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如现在你所处的地方空气污染非常严重。你急需购置一台医用空气净化器。请选择价格4000-6000元、滤网为HEPA 13、CADR >600的净化器。",
    reminder: "4-6k，HEPA 13，CADR > 600。",
    products: [
      { id: 's5', name: 'IQAir HealthPro', price: 4999, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '瑞士原装，医疗级净化力', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '550' }] },
      { id: 's6', name: '飞利浦 8000i', price: 4200, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '除甲醛能手，夜间超静音', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '500' }] },
      { id: 's7', name: 'Blueair 经典', price: 4800, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '环保机身，低噪音运行', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '620' }] },
      { id: 's8', name: '霍尼韦尔 H9', price: 6800, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '高能效比，实时PM2.5显示', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '800' }] } 
    ]
  },
  {
    id: 6,
    type: 'LAPTOP',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如你是一个专业的摄影爱好者，需要买一个全画幅的、价格在20000-30000之间，评分高于4.8分的职业摄影机。。",
    reminder: "全画幅，20-30k，评分>4.8分。",
    products: [
      { id: 'g7', name: 'Sony A7R5', price: 23500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '6100万像素，AI对焦系统', attributes: [{ label: '画幅', value: '半画幅' },{ label: '评分', value: '4.8分' }] },
      { id: 'g10', name: 'Canon R5', price: 21800, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '8K视频录制，机身防抖', attributes: [{ label: '画幅', value: '中画幅' },{ label: '评分', value: '4.9分' }] },
      { id: 'g12', name: 'Nikon Z8', price: 26500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '全能机型，顶级连拍', attributes: [{ label: '画幅', value: '全画幅' },{ label: '评分', value: '4.9分' }] },
      { id: 'g9', name: 'Fujifilm GFX', price: 28000, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '中画幅画质，极致细节', attributes: [{ label: '画幅', value: '全画幅' }{ label: '评分', value: '4.6分' }] }
    ]
  },
  {
    id: 7,
    type: 'FINANCE',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如现在母亲节还有7天就要到了，你想给母亲购置一条项链。请选择价格在10000-20000之间，材质为黄金，包含免费清洗的售后服务的项链",
    reminder: "1-2万，黄金，免费清洗",
    products: [
      { id: 'g8', name: 'Tiffany & Co.', price: 12500, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '时尚前卫，国际大牌', attributes: [{ label: '材质', value: '18黄金' }, { label: '售后', value: '无清洗服务' }] },
      { id: 'g14', name: '周大福 传承', price: 13800, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400', summary: '古法工艺，厚重典雅', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '终身保养' }] },
      { id: 'g15', name: 'VCA 梵克雅宝', price: 19800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '四叶草经典，名媛首选', attributes: [{ label: '材质', value: '18K黄金' }, { label: '售后', value: '品牌免费养护' }] },
      { id: 'g13', name: 'Cartier Love', price: 22000, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400', summary: '经典螺丝设计，极具辨识度', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '无偿保养' }] },
      { id: 'g16', name: '施华洛世奇', price: 2800, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '亮眼仿水晶，多变造型', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '无清洗服务' }] }
    ]
  },
  {
    id: 8,
    type: 'EDUCATION',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如你是一个职业博主，需要买一台性能极致的旗舰手机来拍摄视频。请选择价格8000以上、存储1TB、是钛金属机身的手机。",
    reminder: "8k+价格，1TB，钛金属",
    products: [
       { id: 'ph17_1', name: 'iPhone 15 Pro Max', price: 10999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400', summary: 'ProRes视频拍摄，钛金属机身', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '1TB' }] },
      { id: 'ph17_2', name: 'Samsung S24 Ultra', price: 9299, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400', summary: '8K视频，10倍光学变焦', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '1TB' }] },
      { id: 'ph17_3', name: '小米 14 Ultra', price: 8299, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '徕卡光学镜头，专业相机模式', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '512GB' }] },
      { id: 'ph17_4', name: '华为 Pura 70 U', price: 10999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '伸缩摄像头，卫星通讯', attributes: [{ label: '机身', value: '高分子材料' }, { label: '存储', value: '1TB' }] },
      { id: 'ph17_5', name: 'OPPO Find X7 U', price: 6999, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: '双潜望长焦，哈苏影调', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '512GB' }] }
    ]
  }
];
