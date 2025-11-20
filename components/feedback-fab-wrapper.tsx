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
      <div className="absolute bottom-6 right-6">
        <FAB onClick={() => setOpen(true)} />
      </div>
      <FeedbackForm open={open} onOpenChange={setOpen} eventId={eventId} />
    </>
  );
}
