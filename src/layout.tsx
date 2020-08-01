import { homeModule } from "./common/loadableModule";

export const publicRoutes = [
  {
    component: homeModule,
    exact: true,
    path: "/",
  },
];
