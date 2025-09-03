import { makeAutoObservable } from "mobx";

class SceneStore {
  currentScene = 0; // 현재 활성화된 씬 인덱스
  totalScenes = 3; // 씬 총 개수, 필요하면 수정 가능

  constructor() {
    makeAutoObservable(this);
  }

  // 다음 씬으로 이동
  nextScene() {
    console.log("현재 씬 : ", this.currentScene);
    if (this.currentScene + 1 < this.totalScenes) {
      this.currentScene += 1;
    }
    console.log("다음 씬 : ", this.currentScene);
  }

  // 이전 씬으로 이동
  prevScene() {
    if (this.currentScene > 0) {
      this.currentScene -= 1;
    }
  }
}

// 싱글톤 전역 store
export const sceneStore = new SceneStore();
