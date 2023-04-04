// src/routesConfig.js
export const routes = [
  {
    path: "/",
    component: "Main",
    private: false,
  },
  {
    path: "/login",
    component: "Login",
    private: false,
  },
  {
    path: "/fortune",
    component: "ai/FortuneAI",
    private: true,
  },
  {
    path: "/another-page",
    component: "AnotherPage",
    private: false,
  },
  // Add more routes here as needed
];
