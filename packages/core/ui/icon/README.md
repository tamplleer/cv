# Icon

### description

Пакет для добавления иконок на проект.
Подключены на данный момент два модуля с иконками: react-icon и custom-icon

### Как подключать:

1. скачиваем в корневой проект `vite-plugin-svgr`
2. в vite.config.js добавляем плагин `svgr()`
3. Если будут проблемы с отображением иконок, то вынести `custom.d.ts` в **app**

```
icon/
├── packages/
│ ├── react-icon/
│ └── react-icon/
├── index.ts
├── custom.d.ts
├── package.json
└── tsconfig.publish.json
```

## Use

1. Использование в модуле (можно через wizard)
   1. В модуле где должна быть иконки нужно импортировать модуль `"@cv/icon"` (по дефолту мы импортируем их в `ui-components` и уже берем от туда)
   2. Создать папку **_store_** и в ней создать файлы `<имя?>Store.ts` example: `store.ts`

## Base

- Icon

## Method

- lib
  - updateValue (todo)

## value

- IconProps

### example

```

todo как пользоваться

import { store, StoreFuncType, updateValue } from "@cv/store";

type Action = {
  updateLastName: StoreFuncType<State, Action, State["lastName"]>;
  increaseCount: StoreFuncType<State, Action, void>;
};
const defaultAction: Action = {
  //updateLastName: (lastName) => ({ lastName: lastName }),
  updateLastName: updateValue("lastName"),
  increaseCount: (value, state) => ({
    count: state !== undefined ? state.count + 1 : 1,
  }),
};
type State = {
  lastName: string;
  count: number;
};

const defaultState: State = {
  lastName: "Bober",
  count: 0,
};

export const useStore = store(defaultState, defaultAction);


```
