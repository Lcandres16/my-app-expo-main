import React from "react";
import { X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  YStack
} from "tamagui";

import SelectDemo from "./SelectDemo";

const DialogDemo: React.FC = () => {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>Edit Profile</Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
          style={styles.dialogContent}
        >
          <Dialog.Title style={styles.title}>Edit Profile</Dialog.Title>
          <Dialog.Description style={styles.description}>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <Fieldset style={styles.fieldset}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Nate Wienert" />
          </Fieldset>

          <SelectDemo />

          <YStack alignItems="flex-end" marginTop="$2">
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="green_Button" aria-label="Close">
                Save changes
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
                style={styles.closeButton}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const styles = {
  dialogContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  fieldset: {
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#900000",
  },
};

export default DialogDemo;
