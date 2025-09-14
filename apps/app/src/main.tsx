import ReactDOM from "react-dom/client";

import {QueryProvider} from "@cv/api";
import {Cv} from "@cv/main/src/Cv";
import {ModalProvider} from "@cv/ui-components";
import {UiProvider} from "@cv/ui-components/src/UiProvider";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryProvider>
        <UiProvider>
            <ModalProvider>
                <Cv/>
            </ModalProvider>
        </UiProvider>
    </QueryProvider>
);
