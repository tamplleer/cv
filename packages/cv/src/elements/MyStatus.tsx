import {Chip} from "@cv/ui-components";


enum MyStatusType {
    research = "research",
    considering = "considering",
    collaborate = "collaborate",
    cave = "cave",
}

const mapTypeStatus: Record<MyStatusType, string> = {
    [MyStatusType.research]: "В поисках",
    [MyStatusType.considering]: "Рассматирваю предложения",
    [MyStatusType.collaborate]: "Готов взаимодействовать, не ищу работу",
    [MyStatusType.cave]: "Я в отшельничестве",
};

export const MyStatus = () => {
    const data: { type: MyStatusType } = {
        type: MyStatusType.research,
    };
    return mapTypeStatus?.[data?.type] ? <Chip color={"orange"} label={mapTypeStatus?.[data?.type]}/> :
        null;
};
