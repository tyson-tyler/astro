"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Reserver Seat Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reserver Seat Now </DialogTitle>
          <DialogDescription>Reserver Seat Now For Free</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex  flex-col gap-4">
            <Label htmlFor="name" className="mb-1">
              Name
            </Label>
            <Input id="name" placeholder="Name" className="col-span-3" />
          </div>
          <div className="flex  flex-col gap-4">
            <Label htmlFor="username" className="mb-1">
              Email
            </Label>
            <Input
              type="email"
              id="username"
              className="col-span-3"
              placeholder="@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username" className="mb-1">
              Phone
            </Label>
            <Input
              type="number"
              id="phone"
              placeholder="phone number"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Reserver Seat Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
