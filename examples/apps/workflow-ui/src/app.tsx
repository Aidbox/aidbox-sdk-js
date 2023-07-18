import { Container, Link, Text } from "@nextui-org/react";
import { SampleDesc } from "./SampleDesc";
import { Tasks } from "./Tasks";
import { WorkflowSchema } from "./WorkflowSchema";

export function App() {
  return (
    <Container display="flex" direction="column" alignContent="center">
      <Text h1 css={{ "text-align": "center" }}>
        Aidbox Workflow Engine
      </Text>
      <Text css={{ "text-align": "center", px: "60px" }} size="$xl">
        Workflow allows orchestrating a series of&nbsp;
        <Link
          href="https://docs.aidbox.app/modules-1/workflow-engine/task"
          target="_blank"
        >
          tasks
        </Link>
        . Workflow in Aidbox is implemented through a special&nbsp;
        <Link
          href="https://docs.aidbox.app/modules-1/workflow-engine/task/aidbox-predefined-tasks#awf.workflow-decision-task"
          target="_blank"
        >
          decision
        </Link>{" "}
        task, an instance of which is created on every event of workflow, thus a
        logic behind workflow could be implemented as an executor for this task.
      </Text>
      <SampleDesc />
      <WorkflowSchema />
      <Tasks />
    </Container>
  );
}
