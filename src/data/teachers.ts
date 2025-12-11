import type { Teacher } from '../types/game';

export const teachers: Teacher[] = [
    {
        id: 'lin',
        name: '林教授',
        avatar: 'https://placehold.co/400x600/2c3e50/ffffff?text=Lin+Professor',
        subject: '机器学习基础',
        description: '高冷严厉的数学系教授，最讨厌学生在课堂上睡觉。',
        tags: ['严厉', '御姐', '数学'],
        style: 'strict',
        greeting: '上课铃响了三秒钟你才进教室？找个位置坐下，今天讲线性回归。'
    },
    {
        id: 'ai',
        name: '小艾助教',
        avatar: 'https://placehold.co/400x600/e74c3c/ffffff?text=Xiao+Ai',
        subject: 'Python 实战',
        description: '元气满满的实验室助教，总是随身带着笔记本电脑。',
        tags: ['元气', '可爱', '编程'],
        style: 'gentle',
        greeting: '学长好！今天的代码跑通了吗？没关系，我来教你 debug！'
    }
];
