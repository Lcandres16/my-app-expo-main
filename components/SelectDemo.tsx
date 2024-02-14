
import React, { useState } from "react";
import { Check, ChevronDown } from "@tamagui/lucide-icons";
import { Fieldset, Label, Select, Sheet } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Fruit {
  name: string;
}

const SelectDemo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Apple");

  const items: Fruit[] = [
    { name: "Apple" },
    { name: "Pear" },
    { name: "Blackberry" },
    { name: "Peach" },
    { name: "Apricot" },
    { name: "Melon" },
    { name: "Honeydew" },
    { name: "Starfruit" },
    { name: "Blueberry" },
    { name: "Raspberry" },
    { name: "Strawberry" },
    { name: "Mango" },
    { name: "Pineapple" },
    { name: "Lime" },
    { name: "Lemon" },
    { name: "Coconut" },
    { name: "Guava" },
    { name: "Papaya" },
    { name: "Orange" },
    { name: "Grape" },
    { name: "Jackfruit" },
    { name: "Durian" }
  ];

  return (
    <Fieldset>
      <Label htmlFor="food">Select a Fruit</Label>
      <Select id="food" value={selectedItem} onValueChange={setSelectedItem}>
        <Select.Trigger iconAfter={ChevronDown}>
          <Select.Value>{selectedItem}</Select.Value>
        </Select.Trigger>

        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Fieldset>
                {items.map((item) => (
                  <Select.Item
                    key={item.name}
                    value={item.name}
                    onPress={() => setSelectedItem(item.name)}
                  >
                    {item.name}
                    {selectedItem === item.name && <Check size={16} />}
                  </Select.Item>
                ))}
              </Fieldset>
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Select>
    </Fieldset>
  );
};

export default SelectDemo;
