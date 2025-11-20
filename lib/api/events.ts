import { supabase } from '@/lib/supabase/client';
import { Event } from '@/lib/types/event';
import { Feedback } from '@/lib/types/feedback';

/**
 * 모든 이벤트 가져오기 (최신순)
 */
export async function getEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('start_date', { ascending: false });

  if (error) {
    console.error('Error fetching events:', error);
    return null;
  }

  return data as Event[];
}

/**
 * 특정 이벤트 가져오기
 */
export async function getEventById(id: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching event:', error);
    return null;
  }

  return data as Event;
}

/**
 * 특정 이벤트의 피드백 가져오기 (최신순)
 */
export async function getFeedbacksByEventId(eventId: string) {
  const { data, error } = await supabase
    .from('feedbacks')
    .select('*')
    .eq('event_id', eventId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching feedbacks:', error);
    return null;
  }

  return data as Feedback[];
}
