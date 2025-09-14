import {IconMap, IconType as CustomIconType} from "@cv/custom-icon";

export type IconProps = React.SVGProps<SVGSVGElement> & {
    icon: IconType;
    size?: string;
    width?: string;
    height?: string;
    color?:
        | "primary"
        | "primary-600"
        | "primary-500"
        | "primary-400"
        | "primary-200"
        | "primary-100"
        | "primary-50"
        | "secondary"
        | "secondary-600"
        | "secondary-500"
        | "secondary-400"
        | "secondary-200"
        | "secondary-100"
        | "secondary-50"
        | "neutral"
        | "neutral-900"
        | "neutral-500"
        | "neutral-300"
        | "neutral-200"
        | "neutral-0"
        | "error-800"
        | "error-500"
        | "error-300"
        | "warning"
        | "warning-500"
        | undefined;
};

/**
 *
 * className [&>*]:fill-primary [&>*]:fill-primary-600 [&>*]:fill-primary-500 [&>*]:fill-primary-400 [&>*]:fill-primary-200 [&>*]:fill-primary-100 [&>*]:fill-primary-50 [&>*]:fill-secondary [&>*]:fill-secondary-600 [&>*]:fill-secondary-500 [&>*]:fill-secondary-400 [&>*]:fill-secondary-200 [&>*]:fill-secondary-100 [&>*]:fill-secondary-50 [&>*]:fill-neutral [&>*]:fill-neutral-900 [&>*]:fill-neutral-500 [&>*]:fill-neutral-300 [&>*]:fill-neutral-200 [&>*]:fill-neutral-0 [&>*]:fill-error [&>*]:fill-error-800 [&>*]:fill-error-500 [&>*]:fill-error-300 [&>*]:fill-warning [&>*]:fill-warning-500 [&>*]:fill-tag [&>*]:fill-tag-blue [&>*]:fill-tag-purple [&>*]:fill-tag-orange [&>*]:fill-grey [&>*]:fill-gosuslugi
 * hover:[&>*]:fill-error-300
 */

export const Icon = (props: IconProps) => {
    try {
        return IconMap[props.icon]({
            ...props,
            className: `${props.color ? "[&>*]:fill-" + props.color : ""} ${props.className ?? ""} `,
            height: props.size ?? "24px",
            width: props.size ?? "24px",
        });
    }catch(e){
        console.error(`Image not found:${props.icon}`);
        return IconMap["react"]({
            ...props,
            className: `${props.color ? "[&>*]:fill-" + props.color : ""} ${props.className ?? ""} `,
            height: props.size ?? "24px",
            width: props.size ?? "24px",
        });
    }

};

export type IconType = CustomIconType;
