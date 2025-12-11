import type { Teacher } from '../types/game';
import teacherLinImg from '../assets/images/teacher_lin.png';
import teacherAiImg from '../assets/images/teacher_ai.png';
import teacherChenImg from '../assets/images/teacher_chen.png';
import teacherYukiImg from '../assets/images/teacher_yuki.png';
import teacherZhangImg from '../assets/images/teacher_zhang.png';
import teacherPierreImg from '../assets/images/teacher_pierre.png';
import teacherLunaImg from '../assets/images/teacher_luna.png';
import teacherBondImg from '../assets/images/teacher_bond.png';
import teacherJoyImg from '../assets/images/teacher_joy.png';
import teacherAlbusImg from '../assets/images/teacher_albus.png';
import teacherMelodyImg from '../assets/images/teacher_melody.png';
import teacherBobImg from '../assets/images/teacher_bob.png';
import teacherStarImg from '../assets/images/teacher_star.png';
import teacherGreenImg from '../assets/images/teacher_green.png';
import teacherWangImg from '../assets/images/teacher_wang.png';
import teacherSarahImg from '../assets/images/teacher_sarah.png';

export const teachers: Teacher[] = [
    {
        id: 'lin',
        name: '林教授',
        avatar: teacherLinImg,
        subject: '机器学习基础',
        description: '高冷严厉的数学系教授，最讨厌学生在课堂上睡觉。',
        tags: ['严厉', '御姐', '数学'],
        style: 'strict',
        greeting: '上课铃响了三秒钟你才进教室？找个位置坐下，今天讲线性回归。'
    },
    {
        id: 'ai',
        name: '小艾助教',
        avatar: teacherAiImg,
        subject: 'Python 实战',
        description: '元气满满的实验室助教，总是随身带着笔记本电脑。',
        tags: ['元气', '可爱', '编程'],
        style: 'gentle',
        greeting: '学长好！今天的代码跑通了吗？没关系，我来教你 debug！'
    },
    {
        id: 'chen',
        name: '陈博士',
        avatar: teacherChenImg,
        subject: '量子计算',
        description: '天才物理学家，沉迷于量子纠缠，说话总是带着深奥的术语。',
        tags: ['天才', '极客', '物理'],
        style: 'strict',
        greeting: '在这个宇宙中，你迟到的概率是 100%。坐下吧，我们开始观测波函数。'
    },
    {
        id: 'yuki',
        name: '雪子老师',
        avatar: teacherYukiImg,
        subject: '日本文学',
        description: '温柔优雅的文学老师，喜欢在樱花树下朗读俳句。',
        tags: ['温柔', '优雅', '文学'],
        style: 'gentle',
        greeting: '同学们好，今天的风儿甚是喧嚣呢。让我们一起品读川端康成吧。'
    },
    {
        id: 'zhang',
        name: '张教练',
        avatar: teacherZhangImg,
        subject: '体育特训',
        description: '充满活力的体育教练，坚信强健的体魄是学习的基础。',
        tags: ['热血', '运动', '健身'],
        style: 'humorous',
        greeting: '动起来！动起来！燃烧你的卡路里！今天先跑十圈热身！'
    },
    {
        id: 'pierre',
        name: 'Chef Pierre',
        avatar: teacherPierreImg,
        subject: '法式烹饪',
        description: '追求完美的米其林大厨，对食材有着近乎偏执的要求。',
        tags: ['热情', '完美主义', '美食'],
        style: 'strict',
        greeting: 'Bonjour! 烹饪是一门艺术，不是炸厨房！把你的围裙系好！'
    },
    {
        id: 'luna',
        name: 'Luna 老师',
        avatar: teacherLunaImg,
        subject: '数字艺术',
        description: '自由奔放的艺术家，鼓励学生释放内心的色彩。',
        tags: ['创意', '自由', '艺术'],
        style: 'gentle',
        greeting: '嘿，各位未来的毕加索！今天我们要用灵魂作画，不要被线条束缚！'
    },
    {
        id: 'bond',
        name: '邦德先生',
        avatar: teacherBondImg,
        subject: '网络安全',
        description: '神秘的前特工，教授如何防御黑客攻击，行踪飘忽不定。',
        tags: ['神秘', '酷', '黑客'],
        style: 'strict',
        greeting: '我的名字是 Bond... 今天的课程是加密与解密。不要试图入侵我的电脑。'
    },
    {
        id: 'joy',
        name: '乔伊护士',
        avatar: teacherJoyImg,
        subject: '健康科学',
        description: '温柔体贴的校医，关心每一位学生的身心健康。',
        tags: ['治愈', '温柔', '医学'],
        style: 'gentle',
        greeting: '大家要注意身体哦，不要熬夜写代码。有哪里不舒服可以来找我。'
    },
    {
        id: 'albus',
        name: '阿不思教授',
        avatar: teacherAlbusImg,
        subject: '魔法史',
        description: '博学多才的老教授，虽然教的是历史，但总让人觉得他会魔法。',
        tags: ['智慧', '慈祥', '历史'],
        style: 'humorous',
        greeting: '欢迎来到历史的长河。记住，遗忘历史的人注定要重蹈覆辙。'
    },
    {
        id: 'melody',
        name: 'Melody 老师',
        avatar: teacherMelodyImg,
        subject: '音乐鉴赏',
        description: '气质高雅的音乐家，认为音乐是人类通用的语言。',
        tags: ['优雅', '艺术', '音乐'],
        style: 'gentle',
        greeting: '听，这是贝多芬的命运交响曲。让我们一起感受音符的跳动。'
    },
    {
        id: 'bob',
        name: '鲍勃工程师',
        avatar: teacherBobImg,
        subject: '机器人工程',
        description: '动手能力极强的工程师，喜欢拆解和组装各种机械装置。',
        tags: ['硬核', '实干', '机械'],
        style: 'humorous',
        greeting: '理论再好不如动手一试！拿起扳手，我们来造个高达！'
    },
    {
        id: 'star',
        name: '星辰女士',
        avatar: teacherStarImg,
        subject: '天文学',
        description: '总是仰望星空的浪漫主义者，带领学生探索宇宙的奥秘。',
        tags: ['梦幻', '神秘', '宇宙'],
        style: 'gentle',
        greeting: '我们的征途是星辰大海。今晚，让我们一起寻找北极星。'
    },
    {
        id: 'green',
        name: '格林博士',
        avatar: teacherGreenImg,
        subject: '植物学',
        description: '热爱大自然的植物学家，把教室变成了热带雨林。',
        tags: ['自然', '亲切', '生物'],
        style: 'gentle',
        greeting: '小心脚下，那是珍稀的捕蝇草。植物也是有感情的，要温柔对待它们。'
    },
    {
        id: 'wang',
        name: '王大爷',
        avatar: teacherWangImg,
        subject: '深度学习哲学',
        description: '看门大爷，实则是隐世不出的扫地僧，喜欢用生活哲理通过神经网络。',
        tags: ['扫地僧', '幽默', '哲学'],
        style: 'humorous',
        greeting: '小伙子，我看你骨骼惊奇，是块做调参侠的料。'
    },
    {   
        id: 'sarah',
        name: 'Sarah 老师',
        avatar: teacherSarahImg,
        subject: '学术英语',
        description: '海归英语讲师，发音纯正，要求学生必须用英文写论文。',
        tags: ['知性', '严格', '英语'],
        style: 'strict',
        greeting: 'Good morning class. Today we will discuss how to write a proper abstract.'
    }
]
