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
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import type { PointerEvent } from "react";

/**
 * An extended "PointerSensor" that prevent some
 * interactive html element(button, input, textarea, select, option...) from dragging
 */
export class SmartPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown" as any,
      handler: ({ nativeEvent: event }: PointerEvent) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target as Element)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}

function isInteractiveElement(element: Element | null) {
  const interactiveElements = [
    "button",
    "input",
    "textarea",
    "select",
    "option",
  ];
  if (
    element?.tagName &&
    interactiveElements.includes(element.tagName.toLowerCase())
  ) {
    return true;
  }
  let currentElement = element;
  while (currentElement) {
    if (currentElement.classList.contains("custom-select")) {
      return true;
    }
    currentElement = currentElement.parentElement;
  }

  return false;
}

interface Props {
  selectedPlatforms: Option[];
  setSelectedPlatforms: React.Dispatch<React.SetStateAction<Option[]>>;
  filteredOptions: Option[];
  setFilteredOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  errors: any;
  control: any;
}

export function Links({
  selectedPlatforms,
  setSelectedPlatforms,
  filteredOptions,
  errors,
  control,
}: Props) {
  const sensors = useSensors(
    useSensor(SmartPointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = selectedPlatforms.findIndex(
        (platform) => platform.value === active.id
      );
      const newIndex = selectedPlatforms.findIndex(
        (platform) => platform.value === over.id
      );
      setSelectedPlatforms((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleRemove = (platformValue: any) => {
    setSelectedPlatforms((currentPlatforms) =>
      currentPlatforms.filter((platform) => platform.value !== platformValue)
    );
  };

  const handleOptionChange = (index: number, option: Option) => {
    setSelectedPlatforms((currentPlatforms) => {
      const newPlatforms = [...currentPlatforms];
      newPlatforms[index] = option;
      return newPlatforms;
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={selectedPlatforms.map((platform) => platform.value)}
        strategy={verticalListSortingStrategy}
      >
        <Stack orientation="vertical" gap="24px">
          {selectedPlatforms.map((platform, index) => (
            <SortableItem
              key={platform.value}
              id={platform.value}
              index={index}
              platform={platform}
              setSelectedPlatforms={setSelectedPlatforms}
              filteredOptions={filteredOptions}
              handleOptionChange={handleOptionChange}
              handleRemove={handleRemove}
              errors={errors}
              control={control}
            />
          ))}
        </Stack>
      </SortableContext>
    </DndContext>
  );
}
