import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { GameState, Teacher, ScriptNode } from '../types/game';
import { teachers } from '../data/teachers';
import { scripts } from '../data/scripts';

export const useGameStore = defineStore('game', () => {
  const state = ref<GameState>({
    currentTeacherId: null,
    currentNodeId: null,
    history: [],
    affinity: {},
    unlockedTeachers: ['lin', 'ai'],
    completedCourses: []
  });

  const currentTeacher = computed(() => 
    teachers.find(t => t.id === state.value.currentTeacherId)
  );

  const currentScriptNode = computed(() => {
    if (!state.value.currentTeacherId || !state.value.currentNodeId) return null;
    return scripts[state.value.currentTeacherId]?.[state.value.currentNodeId] || null;
  });

  function selectTeacher(teacherId: string) {
    state.value.currentTeacherId = teacherId;
    state.value.currentNodeId = 'start';
    state.value.history = ['start'];
  }

  function nextNode(nodeId: string) {
    state.value.currentNodeId = nodeId;
    state.value.history.push(nodeId);
  }

  function updateAffinity(teacherId: string, delta: number) {
    if (!state.value.affinity[teacherId]) {
      state.value.affinity[teacherId] = 0;
    }
    state.value.affinity[teacherId] += delta;
  }

  return {
    state,
    currentTeacher,
    currentScriptNode,
    selectTeacher,
    nextNode,
    updateAffinity
  };
});
