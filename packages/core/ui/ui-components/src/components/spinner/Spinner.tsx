import {Icon} from "@cv/icon";

import {clsx} from "clsx";

type SpinnerProps = {
    className?: string;
    visible?: boolean;
    fixed?: boolean;
};

export const Spinner = ({className, visible, fixed}: SpinnerProps) => {
    return (
        <Icon
            icon={"react"}
            className={clsx(className, "animate-spin [&>svg]:w-full [&>svg]:h-full", {
                "w-[5em]": fixed,
                visible: visible,
            })}
            color={"primary-600"}
        />
    );
};
