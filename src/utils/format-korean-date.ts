export function formatKoreanDate(dateString: string): string {
  const [datePart, timePart] = dateString.split("");

  const [year, month, day] = datePart.split("-");

  return `${year}년 ${month}월${day}일 ${timePart}`;
}
