import { Card, Grid, Text, Row, Link } from "@nextui-org/react";

export const SampleCard = ({
  title,
  body,
  sampleLink,
  readmeLink,
}: {
  title: string;
  body: string;
  sampleLink: string;
  readmeLink: string;
}) => {
  return (
    <Grid xs={4} css={{ mt: 15 }}>
      <Card>
        <Card.Header css={{ width: "auto" }}>
          <Text b>{title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ width: "auto" }}>
          <Text>{body}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer css={{ width: "auto" }}>
          <Row justify="flex-end">
            <Link block href={readmeLink} target="_blank">
              Readme
            </Link>
            <Link block href={sampleLink} target="_blank">
              Try it
            </Link>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
