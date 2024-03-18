import React from "react";
import { Stack } from "../../../../components/Stack";
import { Option } from "../../../../context";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { Control, FieldErrors } from "react-hook-form";

type Props = {
  options: {
    filtered: Option[];
    selected: Option[];
    setSelected: React.Dispatch<React.SetStateAction<Option[]>>;
  };
  form: {
    errors: FieldErrors;
    control: Control;
  };
  setDisabledButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Links({
  options: { filtered, selected, setSelected },
  form: { errors, control },
  setDisabledButton,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = selected.findIndex(
        (platform) => platform.value === active.id
      );
      const newIndex = selected.findIndex(
        (platform) => platform.value === over.id
      );
      setSelected((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleRemove = (platformValue: any) => {
    setSelected((currentPlatforms) =>
      currentPlatforms.filter((platform) => platform.value !== platformValue)
    );
    setDisabledButton(false);
  };

  const handleOptionChange = (index: number, option: Option) => {
    setSelected((currentPlatforms) => {
      const newPlatforms = [...currentPlatforms];
      newPlatforms[index] = option;
      return newPlatforms;
    });
  };

  const isDragEnabled = selected.length > 1;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={selected.map((platform) => platform.value)}
        strategy={verticalListSortingStrategy}
      >
        <Stack orientation="vertical" gap="24px">
          {selected.map((platform, index) => (
            <SortableItem
              key={platform.value}
              id={platform.value}
              index={index}
              isDragEnabled={isDragEnabled}
              options={{
                platform: platform,
                filteredOptions: filtered,
                handleOptionChange: handleOptionChange,
                handleRemove: handleRemove,
              }}
              form={{
                errors: errors,
                control: control,
              }}
            />
          ))}
        </Stack>
      </SortableContext>
    </DndContext>
  );
}
