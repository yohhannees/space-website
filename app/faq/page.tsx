'use client';
// FaqWithImage.jsx

import React from 'react';
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./FaqWithImage.module.css";

const answer1=
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

const answer2=
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

  const answer3 =
    "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export default function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg" className="pb-24 mb-16">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="/pictures/image.b0c2306b.svg"
              alt="Frequently Asked Questions"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  How can I reset my password?
                </Accordion.Control>
                <Accordion.Panel>{answer1}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can I create more that one account?
                </Accordion.Control>
                <Accordion.Panel>{answer1}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  How can I subscribe to monthly newsletter?
                </Accordion.Control>
                <Accordion.Panel>{answer2}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{answer3}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
