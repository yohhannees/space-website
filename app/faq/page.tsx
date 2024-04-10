'use client';
// FaqWithImage.jsx

import React from 'react';
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./FaqWithImage.module.css";

const answer1 = "Astronomy is the scientific study of celestial objects, such as stars, planets, comets, and galaxies.";
const answer2 = "The Hubble Space Telescope has significantly improved our understanding of the universe.";
const answer3 = "The Milky Way is the galaxy that contains our Solar System.";
const answer4 = "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape their pull. They are formed when a massive star collapses under its own gravity after its nuclear fuel is exhausted.";



export default function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg" className="pb-24 mb-16">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="/pictures/events/faq.svg"
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
                What is astronomy?
                </Accordion.Control>
                <Accordion.Panel>{answer1}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                
                What has the Hubble Space Telescope contributed to our understanding of the universe?
                </Accordion.Control>
                <Accordion.Panel>{answer2}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                
                What is the Milky Way?
                </Accordion.Control>
                <Accordion.Panel>{answer3}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                What are black holes?
                </Accordion.Control>
                <Accordion.Panel>{answer4}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
