import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResizableDemo } from "./resize";
import { Timer } from "lucide-react";
import { DialogDemo } from "./model";

export function CardWithForm() {
  return (
    <Card className="md:w-[550px] w-[300px]">
      <CardHeader>
        <CardTitle className="text-center dark:text-white">Join Now</CardTitle>
        <CardDescription className="text-center">
          A astrology Session for free
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="container1">
          <div className="card dark:bg-gray-800 text-black dark:text-white">
            <div className="icon">🔥</div>
            <h3>Feature 1</h3>
            <p>
              This is a description of the first feature. It explains what makes
              this feature awesome and how it benefits the user.
            </p>
          </div>
          <div className="card dark:bg-gray-800 text-black dark:text-white">
            <div className="icon">⚡</div>
            <h3>Feature 2</h3>
            <p>
              This is a description of the second feature. It explains what
              makes this feature awesome and how it benefits the user.
            </p>
          </div>
          <div className="card dark:bg-gray-800 text-black dark:text-white">
            <div className="icon">💎</div>
            <h3>Feature 3</h3>
            <p>
              This is a description of the third feature. It explains what makes
              this feature awesome and how it benefits the user.
            </p>
          </div>
        </div>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Watch Demo</Button>
          <DialogDemo />
        </CardFooter>
      </CardContent>
    </Card>
  );
}
