export interface Event {
  id: string;
  title: string;
  start_date: string;
  end_date: string | null;
  type: string | null;
  image_url: string | null;
  created_at?: string;
}

export interface Feedback {
  id: string;
  event_id: string;
  email_hash: string;
  content: string;
  rating: number;
  created_at: string;
}
