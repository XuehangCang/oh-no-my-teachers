import type { ScriptNode } from '../types/game';

export const scripts: Record<string, Record<string, ScriptNode>> = {
    'lin': {
        'start': {
            id: 'start',
            type: 'dialogue',
            speaker: '林教授',
            text: '既然都坐好了，那我们就开始今天的课程。今天我们要讲的是机器学习中最基础，也是最重要的模型——**线性回归**。',
            expression: 'neutral',
            next: 'lecture_1'
        },
        'lecture_1': {
            id: 'lecture_1',
            type: 'dialogue',
            speaker: '林教授',
            text: '很多同学觉得它简单就轻视它，这是大错特错。线性回归的思想贯穿了整个统计学习。它的核心思想就是试图学到一个线性模型以尽可能准确地预测实值输出标记。',
            expression: 'neutral',
            next: 'lecture_2'
        },
        'lecture_2': {
            id: 'lecture_2',
            type: 'dialogue',
            speaker: '林教授',
            text: '数学表达很简单：$f(x) = wx + b$。其中 $w$ 是权重向量，$b$ 是偏置。我们的目标，就是通过训练数据，找到那组最好的 $w$ 和 $b$。',
            expression: 'neutral',
            next: 'lecture_3'
        },
        'lecture_3': {
            id: 'lecture_3',
            type: 'dialogue',
            speaker: '林教授',
            text: '那么，什么叫“最好”呢？这就需要引入“损失函数”的概念。我们需要一个函数来衡量我们的预测值 $f(x)$ 和真实值 $y$ 之间的差距。',
            expression: 'neutral',
            next: 'quiz_start'
        },
        'quiz_start': {
            id: 'quiz_start',
            type: 'dialogue',
            speaker: '林教授',
            text: '好了，基本概念讲完了。现在我要考考你们听进去了没有。准备好了吗？',
            expression: 'strict',
            choices: [
                { id: 'ready', text: '准备好了！', nextNodeId: 'quiz_1' },
                { id: 'wait', text: '等一下...', nextNodeId: 'quiz_1' } // Force them anyway
            ]
        },
        'quiz_1': {
            id: 'quiz_1',
            type: 'quiz',
            speaker: '林教授',
            text: '在处理回归问题（Regression）时，我们最常用的损失函数是什么？',
            expression: 'neutral',
            choices: [
                { id: 'q1_c1', text: '均方误差 (MSE)', nextNodeId: 'quiz_1_correct', isCorrect: true },
                { id: 'q1_c2', text: '交叉熵损失 (Cross Entropy)', nextNodeId: 'quiz_1_wrong', isCorrect: false },
                { id: 'q1_c3', text: '0-1 损失函数', nextNodeId: 'quiz_1_wrong', isCorrect: false }
            ]
        },
        'quiz_1_correct': {
            id: 'quiz_1_correct',
            type: 'dialogue',
            speaker: '林教授',
            text: '回答正确。$MSE = \\frac{1}{n}\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2$。看来你还是有点数学直觉的。',
            expression: 'smile',
            next: 'end'
        },
        'quiz_1_wrong': {
            id: 'quiz_1_wrong',
            type: 'dialogue',
            speaker: '林教授',
            text: '错！交叉熵通常用于分类问题，0-1损失也是分类中用的。回归问题看的是距离，当然是用均方误差！回去把课本第一章抄十遍！',
            expression: 'angry',
            next: 'end'
        },
        'end': {
            id: 'end',
            type: 'ending',
            text: '本节课结束。下节课我们讲梯度下降。',
            next: ''
        }
    }
};
