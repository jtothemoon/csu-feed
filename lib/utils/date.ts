/**
 * 날짜를 YYYY.MM.DD 형식으로 포맷팅
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/**
 * 이벤트 날짜 포맷팅 (기간이 있으면 범위로 표시)
 */
export function formatEventDate(startDate: string, endDate: string | null): string {
  if (endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
  return formatDate(startDate);
}
