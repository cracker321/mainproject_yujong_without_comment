export default function TimeParse(value) {
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  let today = new Date();
  let timeValue = new Date(value);
  today = today.getTime() + today.getTimezoneOffset() * 60 * 1000;
  timeValue = timeValue.getTime() + timeValue.getTimezoneOffset() * 60 * 1000;
  today = new Date(today);
  timeValue = new Date(timeValue + KR_TIME_DIFF);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

  if (betweenTime < 1) return '방금';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 30) {
    return `${betweenTimeDay}일 전`;
  }

  const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
  if (0 < betweenTimeMonth && betweenTimeMonth < 12) {
    return `${betweenTimeMonth}달 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
}
