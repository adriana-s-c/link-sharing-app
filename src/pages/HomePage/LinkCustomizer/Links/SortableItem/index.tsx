import * as React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { AddLink } from "../AddLink";
import { Option } from "../../../../../context";
import { Control, FieldErrors } from "react-hook-form";
import { useMutationObserver } from "../../../../../components/useMutationObserver";

type Props = {
  id: string;
  index: number;
  options: {
    platform: Option;
    filteredOptions: Option[];
    handleOptionChange: (index: number, option: Option) => void;
    handleRemove: (platformValue: string) => void;
  };
  form: {
    errors: FieldErrors;
    control: Control;
  };
};

export function SortableItem({
  id,
  index,
  options: { platform, filteredOptions, handleOptionChange, handleRemove },
  form: { errors, control },
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const [isDraggable, setIsDraggable] = React.useState(true);

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : "",
    transition,
  };

  const onRemove = () => handleRemove(platform.value);
  const onChange = (option: Option) => handleOptionChange(index, option);

  useMutationObserver(".options-div", (exists) => {
    setIsDraggable(!exists);
  });

  const dragListeners = isDraggable ? listeners : {};

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...dragListeners}>
      <AddLink
        index={index}
        platform={platform}
        filteredOptions={filteredOptions}
        onSelectChange={onChange}
        handleRemove={onRemove}
        errors={errors}
        control={control}
      />
    </div>
  );
}
