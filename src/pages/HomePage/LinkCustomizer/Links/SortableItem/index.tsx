import { useSortable } from "@dnd-kit/sortable";
import { AddLink } from "../AddLink";
import { Option } from "../../../../../context";
import { Control, FieldErrors } from "react-hook-form";

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
  isDragEnabled: boolean;
};

export function SortableItem({
  id,
  index,
  options: { platform, filteredOptions, handleOptionChange, handleRemove },
  form: { errors, control },
  isDragEnabled,
}: Props) {
  const { setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : "",
    transition,
  };

  const onRemove = () => handleRemove(platform.value);
  const onChange = (option: Option) => handleOptionChange(index, option);

  return (
    <div ref={setNodeRef} style={style}>
      <AddLink
        index={index}
        platform={platform}
        filteredOptions={filteredOptions}
        onSelectChange={onChange}
        handleRemove={onRemove}
        errors={errors}
        control={control}
        id={id}
        isDragEnabled={isDragEnabled}
      />
    </div>
  );
}
