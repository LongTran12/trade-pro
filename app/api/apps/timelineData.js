import intro1 from 'dan-images/intro/intro_ote.jpg';
import roadmap from 'dan-images/intro/roadmap.jpg';
import round from 'dan-images/intro/roadmap.jpg';
import logoTimeline from 'dan-images/intro/timeline-first.jpg';
import slide5_coche from 'dan-images/slide/slide5.jpg';
import avatarApi from '../images/avatars';
import imgApi from '../images/photos';
const timelineData = [
    {
        id: '1',
        name: 'OTF User',
        date: 'September, 12 2018',
        time: '08:01',
        icon: 'add_circle',
        avatar: avatarApi[6],
        image: logoTimeline,
        content: '',
        liked: true,
        comments: [
            {
                id: '1_1',
                from: 'Jim Doe',
                avatar: avatarApi[2],
                date: 'May, 29 2018',
                message: 'OTFUND LÀ ĐƠN  VỊ Quỹ ĐẦU TIÊN TÍCH hợp Blockchain vào  DAPP GAME DIGITAL LOTTERY  and  DIGITAL TRADING, GAME ONLINE. HỌC VIện ACADEMY, Thương Mại Điện Tử SHARING ECONOMY  VÀ CHÍNH THỨC RA MẮT VÀO THÁNG 10'
            },
            {
                id: '1_2',
                from: 'Jihan Doe',
                avatar: avatarApi[4],
                date: 'May, 29 2018',
                message:
                    'OTFUND là quỹ mở token được tạo ra với  sứ mênh  tạo ra chuỗi hệ thống vận hành sinh thái toàn cầu và xây dựng một tầng sinh thái với nhiều triệu người dùng'
            },
            {
                id: '1_3',
                from: 'Jane Doe',
                avatar: avatarApi[2],
                date: 'May, 29 2018',
                message:
                    'Platform Bao Gồm 3 Đơn Vị:  Game  Blockchain Tài Chính, blockchain Trao Đổi,blockchain Đầu Tư Tài Chính  , và 6 Nhánh Quỹ Đang Phát Triển  : Quỹ Ecosystem Quỹ Exchanger ,Quỹ Trading ,Quỹ Education ,Quỹ Foundation , Quỹ  Insurance token'
            },
        ]
    },
    {
        id: '2',
        name: 'OTF User',
        date: '20/03/2020',
        time: '03:20',
        icon: 'date_range',
        avatar: avatarApi[6],
        image: roadmap,
        content: 'THÔNG BÁO QUỸ OTFUND CHÍNH THỨC  PHÁT HÀNH CỔ PHIẾU CHO  CỘNG ĐỒNG GIÁ OTF = 0.5 USD  ',
        liked: true,
        // comments: [
        //   {
        //     id: "2_1",
        //     from: "Jane Doe",
        //     avatar: avatarApi[2],
        //     date: "May, 29 2018",
        //     message:
        //       "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum."
        //   },
        //   {
        //     id: "2_2",
        //     from: "Jihan Doe",
        //     avatar: avatarApi[4],
        //     date: "May, 29 2018",
        //     message:
        //       "Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. "
        //   }
        // ]
    },
    {
        id: '3',
        name: 'OTF User',
        date: 'Aug, 17 2018',
        time: '04:10',
        icon: 'description',
        avatar: avatarApi[6],
        image: slide5_coche,
        content:
            'Platform Bao Gồm 3 Đơn Vị:  Game  Blockchain Tài Chính, blockchain Trao Đổi,blockchain Đầu Tư Tài Chính  , và 6 Nhánh Quỹ Đang Phát Triển  : Quỹ Ecosystem Quỹ Exchanger ,Quỹ Trading ,Quỹ Education ,Quỹ Foundation , Quỹ  Insurance token',
        liked: false,
        // comments: [
        //   {
        //     id: "3_1",
        //     from: "Jack Doe",
        //     avatar: avatarApi[8],
        //     date: "May, 29 2018",
        //     message:
        //       "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum."
        //   },
        //   {
        //     id: "3_2",
        //     from: "Jim Doe",
        //     avatar: avatarApi[9],
        //     date: "May, 29 2018",
        //     message: "Ut sed eros finibus, placerat orci id, dapibus mauris."
        //   },
        //   {
        //     id: "3_3",
        //     from: "Jihan Doe",
        //     avatar: avatarApi[4],
        //     date: "May, 29 2018",
        //     message:
        //       "Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. "
        //   },
        //   {
        //     id: "3_4",
        //     from: "Janet Doe",
        //     avatar: avatarApi[5],
        //     date: "May, 29 2018",
        //     message: "Aenean sit amet magna"
        //   }
        // ]
    },
    // {
    //   id: "4",
    //   name: "OTE User",
    //   date: "Aug, 10 2018",
    //   time: "08:05",
    //   icon: "favorite",
    //   avatar: avatarApi[6],
    //   image: "",
    //   content:
    //     "Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, et venenatis ante metus pellentesque sem.",
    //   liked: true,
    //   comments: [
    //     {
    //       id: "4_1",
    //       from: "Jane Doe",
    //       avatar: avatarApi[2],
    //       date: "May, 29 2018",
    //       message:
    //         "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum."
    //     }
    //   ]
    // },
    // {
    //   id: "5",
    //   name: "OTE User",
    //   date: "Aug, 10 2018",
    //   time: "02:50",
    //   icon: "lock",
    //   avatar: avatarApi[6],
    //   image: imgApi[12],
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.",
    //   liked: false,
    //   comments: [
    //     {
    //       id: "5_1",
    //       from: "Jim Doe",
    //       avatar: avatarApi[9],
    //       date: "May, 29 2018",
    //       message: "Ut sed eros finibus, placerat orci id, dapibus mauris."
    //     },
    //     {
    //       id: "5_2",
    //       from: "Jihan Doe",
    //       avatar: avatarApi[4],
    //       date: "May, 29 2018",
    //       message:
    //         "Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. "
    //     }
    //   ]
    // }
];

export default timelineData;
