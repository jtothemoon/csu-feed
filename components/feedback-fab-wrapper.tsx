"use client";

import { useState } from "react";
import { FAB } from "./ui/fab";
import { FeedbackForm } from "./feedback-form";

interface FeedbackFABWrapperProps {
  eventId: string;
}

export function FeedbackFABWrapper({ eventId }: FeedbackFABWrapperProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FAB onClick={() => setOpen(true)} />
      <FeedbackForm open={open} onOpenChange={setOpen} eventId={eventId} />
    </>
  );
}
