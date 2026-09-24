// 조건에 따라 className을 합쳐 주는 함수이다.
// false, null, undefined, 빈 문자열은 제외하고 나머지를 공백으로 이어 붙인다.
// 예: cn("btn", isActive && "active") → "btn active" 또는 "btn"
export const cn = (...classNames: Array<string | false | null | undefined>) =>
  classNames.filter(Boolean).join(" ");
