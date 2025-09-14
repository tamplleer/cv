import {Resume} from "./models";

import data from "./data.json";


export const useGetCvData = (): { data: Resume } => {
    return {data: (data as Resume)};
};
