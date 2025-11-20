export type Event = {
  id: string;
  title: string;
  start_date: string;
  end_date: string | null;
  type: string | null;
  image_url: string | null;
  created_at?: string;
};
