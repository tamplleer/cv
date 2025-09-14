import { Icon, IconType, Text, Tooltip } from "@cv/ui-components";

export enum TechStack {
  PnpmWorkspace = "Pnpm workspace",
  ReactQuery = "React Query",
  Zustand = "Zustand",
  React = "React",
  Redux = "Redux",
  ReduxToolkitRTKQuery = "Redux Toolkit, and RTK Query",
  Leaflet = "Leaflet",
  Nginx = "Nginx",
  Docker = "Docker",
  Vite = "Vite",
  TypeScript = "TypeScript",
  MUI = "Material UI",
  NextUI = "NextUI",
  Tailwind = "Tailwind",
  GitlabCI = "Gitlab CI",
  Firebase = "Firebase",
  Prettier = "Prettier",
  Eslint = "Eslint",
  Angular = "Angular",
  ChartJs = "Chart.js",
  SocketIo = "Socket.io",
  ReactHookForms = "React hook forms",
  KMP = "Kotlin Multiplatform",
  JUnit = "JUnit"
}

enum TechStackMobile {
  KMP = "Kotlin Multiplatform",
  Android = "Android",
  JetpackCompose = "Jetpack Compose",
  Hilt = "Hilt",
  Room = "Room",
  SQLite = "SQLite",
  DataStore = "DataStore",
  Kotlin = "Kotlin",
  Coroutines = "Coroutines",
  MVVM = "MVVM",
  ReactNative = "React Native",
  ReactNativeWindows = "React Native windows",
  Swift = "Swift",
  Retrofit = "Retrofit",
  Dagger = "Dagger",
  RxJava = "RxJava",
  Mapbox = "Mapbox",
  View = "View",
  Java = "Java",
}

export type TechStackType = (keyof typeof TechStack | keyof typeof TechStackMobile);

type TechStackDataType = {
  link: string,
  description: string,
  type: string,
  icon: IconType,
  emoji?: string,
}
const mapTechStack: Record<TechStackType, TechStackDataType> = {
  PnpmWorkspace: {
    link: "",
    description: "pnpm Workspace",
    type: "",
    icon: "pnpm",
  },
  ReactQuery: {
    link: "https://tanstack.com/query/latest",
    description: "React Query",
    type: "",
    icon: "reactquery",
  },
  Zustand: {
    link: "https://zustand-demo.pmnd.rs/",
    description: "Zustand",
    type: "",
    icon: "react",
    emoji: "🐻",
  },
  React: {
    link: "",
    description: "React",
    type: "",
    icon: "react",
  },
  Redux: {
    link: "",
    description: "Redux",
    type: "",
    icon: "redux",
  },
  ReduxToolkitRTKQuery: {
    link: "",
    description: "Redux Toolkit RTK Query",
    type: "",
    icon: "redux",
  },
  Leaflet: {
    link: "https://leafletjs.com/",
    description: "Leaflet",
    type: "",
    icon: "react",
    emoji: "🍃",
  },
  Nginx: {
    link: "",
    description: "Nginx",
    type: "",
    icon: "nginx",
  },
  Docker: {
    link: "",
    description: "Docker",
    type: "",
    icon: "docker",
  },
  Vite: {
    link: "",
    description: "Vite",
    type: "",
    icon: "vite",
  },
  TypeScript: {
    link: "",
    description: "TypeScript",
    type: "",
    icon: "ts",
  },
  MUI: {
    link: "https://mui.com/?srsltid=AfmBOooDRAiPrh0ID1PSba4O1c5-oI6y0klSHuGGX-i23zmFdb-1eHfi",
    description: "MUI",
    type: "",
    icon: "mui",
  },
  NextUI: {
    link: "",
    description: "NextUI",
    type: "",
    icon: "nextui",
  },
  Tailwind: {
    link: "",
    description: "Tailwind",
    type: "",
    icon: "tailwind",
  },
  GitlabCI: {
    link: "",
    description: "CI/CD",
    type: "",
    icon: "gitlab",
  },
  Firebase: {
    link: "",
    description: "Firebase",
    type: "",
    icon: "firebase",
  },
  Prettier: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Eslint: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Angular: {
    link: "https://angular.dev/",
    description: "Angular",
    type: "",
    icon: "angular",
  },
  ChartJs: {
    link: "https://www.chartjs.org/",
    description: "ChartJs",
    type: "",
    icon: "chart",
  },
  SocketIo: {
    link: "https://socket.io/",
    description: "Socket Io",
    type: "",
    icon: "socket",
  },
  ReactHookForms: {
    link: "https://react-hook-form.com/",
    description: "Forms",
    type: "",
    icon: "react",
  },
  KMP: {
    link: "",
    description: "",
    type: "",
    icon: "kotlin",
  },
  JUnit: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Android: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  JetpackCompose: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Hilt: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Room: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  SQLite: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  DataStore: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Kotlin: {
    link: "",
    description: "Kotlin",
    type: "",
    icon: "kotlin",
  },
  Coroutines: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  MVVM: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  ReactNative: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  ReactNativeWindows: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Swift: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Retrofit: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Dagger: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  RxJava: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Mapbox: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  View: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
  Java: {
    link: "",
    description: "",
    type: "",
    icon: "react",
  },
};

export const StackElement = ({ icon, isTitle }: { icon: TechStackType, isTitle?: boolean }) => {
  const data = mapTechStack[icon];
  return data ? <Tooltip title={icon} className={"z-0"}>
    <div key={icon} content={data?.description}>
      <div className={"text-xl flex flex-row gap-2"}>
        {data?.emoji ?? <Icon size={"24px"} icon={data.icon} />}
        {isTitle?<Text>{data.description}</Text>:null}
      </div>
    </div>
  </Tooltip> : null;
};

export const StackElementWithTitle = ({ icon }: { icon: TechStackType }) => {
  const data = mapTechStack[icon];
  return data ? <div key={icon} content={data?.description}>
    <div className={"text-xl"}>
      {data?.emoji ?? <Icon size={"24px"} icon={data.icon} />}

    </div>
  </div> : null;
};

