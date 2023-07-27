import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI"; //импорт UI компонентов

const app = createApp(App); //создаем переменную app для обращения

components.forEach((component) => {
  // пример прохождению по массиву компонентов, который экспортируется из index.js
  // и их регистрация
  app.component(component.name, component);
});

app.mount("#app");
