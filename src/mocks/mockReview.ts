export const generateReviewText = (originalText: string) => `
[장점]
- ${originalText.slice(0, 50)}... 부분에서 구체적인 경험을 잘 설명하셨습니다.
- 성과 중심의 서술이 돋보입니다.
  
[개선사항]
1. 첫 문단의 내용을 더 구체화하면 좋겠습니다.
2. 수치화된 성과를 추가하면 좋겠습니다.
3. 배운 점과 성장한 부분을 추가로 서술하면 좋겠습니다.
  
[수정된 자기소개서]
${originalText}
  
 위 내용을 바탕으로 다음과 같이 발전시켜보면 좋겠습니다...
`;
