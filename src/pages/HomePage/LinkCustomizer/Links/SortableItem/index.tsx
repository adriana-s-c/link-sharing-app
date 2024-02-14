import { useSortable } from "@dnd-kit/sortable";
import { AddLink } from "../AddLink";
import { Option } from "../../../../../context";

export function SortableItem({
  id,
  index,
  platform,
  filteredOptions,
  handleOptionChange,
  handleRemove,
  errors,
  control,
  setActivatorNodeRef,
}: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : "",
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <AddLink
        index={index}
        platform={platform}
        filteredOptions={filteredOptions}
        onSelectChange={(option: Option) => handleOptionChange(index, option)}
        handleRemove={() => handleRemove(platform.value)}
        errors={errors}
        control={control}
        ref={setActivatorNodeRef}
        listeners={{ ...listeners }}
      />
    </div>
  );
}
