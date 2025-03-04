"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Transcript from "@/components/transcript";

export default function ProfessionalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Professional Skills Experience
      </h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl">Leah Lindblom</CardTitle>
          <CardDescription className="text-xl">
            Field Expert Interview
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <Image
              src="https://arvadawest.jeffcopublicschools.org/uploaded/faculty/Arvada_West/lindblom-leah.jpg"
              alt="Leah Lindblom"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="flex-1 text-lg">
                I decided to interview Leah Lindblom, the technology
                administrator at Arvada West High School. I chose her because
                she is a field expert in the intersection of education and
                technology, and I wanted to learn more about how Generative AI
                is being used in schools.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <blockquote className="mt-6 border-l-4 ml-2 pl-2 italic">
              "Back in the day, people freaked out when Google became a thing.
              ‘Oh my gosh, kids can look up the answers!’ AI is just the next
              big change—it’s disruptive, but really cool."
            </blockquote>
            <blockquote className="mt-6 border-l-4 ml-2 pl-2 italic">
              "We used to be the textbook for students—we had the knowledge. But
              now, knowledge is out there, and we have to teach kids how to find
              information, evaluate it, and critically analyze whether it’s
              credible or not."
            </blockquote>
            <blockquote className="mt-6 border-l-4 ml-2 pl-2 italic">
              "The student who can write the best prompt is going to be the one
              who gets the A, you know what I mean?"
            </blockquote>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Interview Highlights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-semibold text-xl mb-2">
              Q: What do you personally think about using AI in schools?
            </p>
            <p className="text-lg text-muted-foreground">
              A: "AI is just the next big change—it’s disruptive, but really
              cool. But I do think the world at large needs to rein it in a
              little. It’s exploding so fast that people can’t keep up. We don’t
              fully know if it’s going to be bad or good."
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl mb-2">
              Q: What’s your biggest concern with AI?
            </p>
            <p className="text-lg text-muted-foreground">
              A: "The ethical side and how fast AI is advancing. It’s moving so
              fast, we can’t keep up. Sometimes, students know more than I do
              because they have more time to play with it."
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl mb-2">
              Q: Would you say AI will have a net positive impact?
            </p>
            <p className="text-lg text-muted-foreground">
              A: "Yes, definitely. But I also think there’s a risk—especially
              with people using it for the wrong reasons."
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl"
                size={"lg"}
              >
                View Full Transcript
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Full Interview Transcript
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4 overflow-scroll h-[80vh]">
                <Transcript />
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            This interview gave me a lot of insight into how education and
            technology connect, especially with AI. Ms. Lindblom compared AI to
            when Google first came out and people freaked out, but eventually,
            it just became a normal part of learning.
            <br />
            <br />
            It was interesting to hear that schools are still figuring out how
            to handle AI, with some teachers excited about it and others trying
            to avoid it. I also didn’t expect that being a school tech admin
            doesn’t really involve much math. It is more about problem solving
            and keeping everything running.
            <br />
            <br />
            Overall, it was cool to see how AI is already changing schools and
            how they are trying to keep up. It is not going anywhere, so the
            real challenge is figuring out the best way to use it.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
