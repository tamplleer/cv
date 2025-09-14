import {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from "react";

import { TabType } from "./Tab";

type TabContextProps = {
  tabId?: string;
  setTabId: (tabId: string) => void;
  tabLabels: Omit<TabType, "content">[];
};

const TabContext = createContext<TabContextProps>({
  // eslint-disable-next-line unused-imports/no-unused-vars
  setTabId: (tabId: string) => {},
  tabLabels: [],
});

type TabProviderProps = {
  tabs: TabType[];
  initialTabId?: string;
  children: ReactElement;
};

export const TabProvider = ({
  tabs,
  initialTabId,
  children,
}: TabProviderProps) => {
  const [tabId, setTabId] = useState<string | undefined>(
    initialTabId ?? tabs[0]?.id
  );
  const currentTab = useMemo(() => {
    return tabId ? tabs.find((f) => f.id === tabId) : tabs[0];
  }, [initialTabId, tabId]);

  const listLabels = useMemo(
    () => tabs.map((v) => ({ id: v.id, label: v.label })),
    [tabs]
  );
  return (
    <TabContext.Provider
      value={{
        tabId,
        setTabId,
        tabLabels: listLabels,
      }}
    >
      {children}
      {currentTab?.content}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);
