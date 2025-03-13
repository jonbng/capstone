"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Illustration from "@/public/chatgpt-in-schools.jpg"
import Link from "next/link";

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Introduction
      </h1> */}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-5xl font-extrabold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            Capstone Introduction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={Illustration} alt="Nata Metlukh, NY Times" />
          <Link
            href="https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html"
            className="text-ms hover:underline"
          >
            Nata Metlukh, NY Times
          </Link>
          <p className="text-lg mt-5">
            Early in the morning on November 30th, 2022, a new chatbot was
            released to the internet by a small research non-profit by the name
            of OpenAI, this chatbot was of course what we now know as ChatGPT.
            In less than 5 days the website attracted more than a million active
            users, becoming the fastest growing website in the entire history of
            the internet. The majority of those users? Students.
            <br />
            <br />
            Personally I have always been interested in technology, and I
            remember following OpenAIs progress way before ChatGPT was released.
            One of the things that really got me interested in coding, was
            actually making a chatbot inspired by Jarvis from Iron Man when I
            was 10. From the moment I saw the first developer preview of
            ChatGPT, I knew that it was going to be groundbreaking in education,
            the thing I didn’t realize back then tho? How incredibly quickly it
            would be distributed and improved.
            <br />
            <br />
            And this is exactly the problem, schools and teachers are having an
            incredibly hard time keeping up with the rapid development of AI.
            And this with a good reason, AI technologies are improving at insane
            speeds and are becoming available for free for everyone. We have
            never in the history of humankind had technology evolving so
            quickly.
            <br />
            <br />
            My capstone project goes into how we can help schools to integrate
            AI into their curriculum. I want to figure out how K-12 schools can
            successfully implement AI in their classrooms in a way that
            effectively teaches AI literacy and utilization to allow students to
            be successful in a world with AI in its center, while still
            preserving students' creativity and authentic learning.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
