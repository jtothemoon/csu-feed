export type Feedback = {
  id: string;
  event_id: string;
  email_hash: string;
  content: string;
  rating?: number;
  created_at: string;
};
