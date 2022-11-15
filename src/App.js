import React from "react";

import {
  PrimaryButton,
  SecondaryButton,
  Flex,
  HStack,
  AccentIcon,
} from "@workday/canvas-kit-react";

import SidePanel, {
  useSidePanel,
} from "@workday/canvas-kit-preview-react/side-panel";

import {
  plusIcon,
  rocketIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from "@workday/canvas-system-icons-web";

const App = () => {
  const { expanded, panelProps, labelProps, controlProps } = useSidePanel();
  const [panelState, setPanelState] = React.useState(
    expanded ? "expanded" : "collapsed"
  );
  return (
    <Flex height={320}>
      <SidePanel {...panelProps} onStateTransition={setPanelState}>
        <SidePanel.ToggleButton {...controlProps} />
        {panelState === "expanded" && (
          <Flex alignItems="center" paddingY="s" paddingX="s">
            <Flex marginInlineEnd="s">
              <AccentIcon icon={rocketIcon} />
            </Flex>
            <h3 color="licorice500" fontWeight="bold" {...labelProps}>
              Tasks Panel
            </h3>
          </Flex>
        )}
      </SidePanel>
      <Flex
        as="main"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        flex={1}
        flexBasis="auto"
      >
        <p>Toggle the content direction</p>
        <SecondaryButton onClick={() => {}} role="button">
          Second action
        </SecondaryButton>

        <HStack spacing="s" padding="s">
          <PrimaryButton>Primary</PrimaryButton>
          <PrimaryButton icon={plusIcon} iconPosition="start">
            Primary
          </PrimaryButton>
          <PrimaryButton icon={caretDownIcon} iconPosition="end">
            Primary
          </PrimaryButton>
          <PrimaryButton icon={relatedActionsVerticalIcon} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default App;
