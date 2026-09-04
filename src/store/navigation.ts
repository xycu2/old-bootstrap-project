import { defineStore } from "pinia";
import { ref } from "vue";

export interface NavLink {
  id: number;
  path: string;
  name: string;
}

export const useNavigationStore = defineStore("navigation", () => {
  const navLinks = ref<NavLink[]>([
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/team",
      name: "Our Team",
    },
    {
      id: 3,
      path: "/",
      name: "RuStore",
    },
  ]);

  return {
    navLinks,
  };
});
