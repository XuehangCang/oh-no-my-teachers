import type { ScriptNode } from '../types/game';

export const scripts: Record<string, Record<string, ScriptNode>> = {
    'lin': {
        'start': {
            id: 'start',
            type: 'dialogue',
            speaker: '林教授',
            text: '既然都坐好了，那我们就开始。谁能告诉我，**机器学习**最简单的模型是什么？',
            expression: 'neutral',
            choices: [
                { id: 'c1', text: '线性回归', nextNodeId: 'correct_1', isCorrect: true },
                { id: 'c2', text: '神经网络', nextNodeId: 'wrong_1', isCorrect: false },
                { id: 'c3', text: '不知道...', nextNodeId: 'angry_1', isCorrect: false }
            ]
        },
        'correct_1': {
            id: 'correct_1',
            type: 'dialogue',
            speaker: '林教授',
            text: '哼，还算有点常识。没错，就是**线性回归**。它是所有复杂模型的基础。',
            expression: 'smile',
            next: 'explain_1'
        },
        'wrong_1': {
            id: 'wrong_1',
            type: 'dialogue',
            speaker: '林教授',
            text: '神经网络？还没学会走就想跑？基础不牢，地动山摇！',
            expression: 'angry',
            next: 'explain_1'
        },
        'angry_1': {
            id: 'angry_1',
            type: 'dialogue',
            speaker: '林教授',
            text: '不知道？昨晚预习了吗？出去站着听！',
            expression: 'angry',
            next: 'explain_1'
        },
        'explain_1': {
            id: 'explain_1',
            type: 'dialogue',
            speaker: '林教授',
            text: '线性回归的核心公式是 $y = wx + b$。其中 $w$ 是权重，$b$ 是偏置。我们的目标就是找到最优的 $w$ 和 $b$，使得预测值和真实值的误差最小。',
            expression: 'neutral',
            next: 'quiz_1'
        },
        'quiz_1': {
            id: 'quiz_1',
            type: 'quiz',
            speaker: '林教授',
            text: '那么问题来了，我们通常用什么函数来衡量这个“误差”？',
            expression: 'neutral',
            choices: [
                { id: 'q1_c1', text: '均方误差 (MSE)', nextNodeId: 'quiz_1_correct', isCorrect: true },
                { id: 'q1_c2', text: '交叉熵损失', nextNodeId: 'quiz_1_wrong', isCorrect: false }
            ]
        },
        'quiz_1_correct': {
            id: 'quiz_1_correct',
            type: 'dialogue',
            speaker: '林教授',
            text: '回答正确。看来你还是有点天赋的。',
            expression: 'smile',
            next: 'end'
        },
        'quiz_1_wrong': {
            id: 'quiz_1_wrong',
            type: 'dialogue',
            speaker: '林教授',
            text: '错！交叉熵是分类问题用的。回归问题通常用 MSE。回去把《统计学习方法》抄十遍！',
            expression: 'angry',
            next: 'end'
        },
        'end': {
            id: 'end',
            type: 'ending',
            text: '本节课结束。',
            next: ''
        }
    }
};
