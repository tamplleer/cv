import { ChangeEvent, memo, ReactElement } from "react";

import clsx from "clsx";

import { Text } from "../text/Text";

import "./RadioGroup.scss";

export type RadioGroupItem = {
  id: string;
  value: string;
  label: string;
};

type RadioGroupProps = {
  className?: string;
  title?: string;
  name: string;
  currentItem: RadioGroupItem | null;
  items: RadioGroupItem[];
  onChange: (item: RadioGroupItem) => void;
  itemBuilder?: (item: RadioGroupItem) => ReactElement;
};

export const RadioGroup = memo(
  ({
    className,
    title,
    name,
    currentItem,
    items,
    onChange,
    itemBuilder,
  }: RadioGroupProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const target = items.find((item) => item.value === e.target.value);
      if (target) onChange(target);
    };
    const labelClassNames = (id: string) =>
      clsx("radio-group__label", "font-medium", "text-h6", {
        "text-neutral-800": id === currentItem?.id,
        "text-neutral-500": id !== currentItem?.id,
      });

    const defaultItemBuilder = (i: RadioGroupItem, index: number) => (
      <div className="radio-group__item" key={i.id}>
        <input
          className="radio-group__input"
          type="radio"
          name={name}
          id={i.id}
          value={i.value}
          checked={i.id === currentItem?.id}
          onChange={handleChange}
        />
        <label className={labelClassNames(index.toString())} htmlFor={i.id}>
          {i.label}
        </label>
      </div>
    );

    return (
      <div className={`radio-group ${className ?? ""}`}>
        {title ? (
          <Text className="radio-group__title" variant="h5">
            {title}
          </Text>
        ) : null}
        {items.map(itemBuilder ?? defaultItemBuilder)}
      </div>
    );
  }
);
