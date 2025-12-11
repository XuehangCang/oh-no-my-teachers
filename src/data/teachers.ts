import type { Teacher } from '../types/game';
import teacherLinImg from '../assets/images/teacher_lin.png';
import teacherAiImg from '../assets/images/teacher_ai.png';

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
        id: 'wang',
        name: '王大爷',
        avatar: 'https://placehold.co/400x600/8e44ad/ffffff?text=Wang+Da+Ye',
        subject: '深度学习哲学',
        description: '看门大爷，实则是隐世不出的扫地僧，喜欢用生活哲理通过神经网络。',
        tags: ['扫地僧', '幽默', '哲学'],
        style: 'humorous',
        greeting: '小伙子，我看你骨骼惊奇，是块做调参侠的料。'
    },
    {   
        id: 'sarah',
        name: 'Sarah 老师',
        avatar: 'https://placehold.co/400x600/f1c40f/ffffff?text=Sarah',
        subject: '学术英语',
        description: '海归英语讲师，发音纯正，要求学生必须用英文写论文。',
        tags: ['知性', '严格', '英语'],
        style: 'strict',
        greeting: 'Good morning class. Today we will discuss how to write a proper abstract.'
    }
]
