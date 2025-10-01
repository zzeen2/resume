# 김지은 포트폴리오

안녕하세요, 저는 김지은입니다.  
현재 프론트엔드 개발자로 구직중입니다.

Next.js와 TypeScript를 기반으로 만들었고, Vercel을 사용하여 배포하였습니다.

제가 이직을 결심하게 된 이유는 변해가는 사회와 더불어 제 자신의 가치를 높이기 위함입니다.  
현실에 안주하는 분위기에서 벗어나 좀 더 보람 있고 성취감을 느낄 수 있는 곳에서 일하고 싶습니다.  
새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다.  
맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다!

찾아주셔서 감사합니다.😀

## 포트폴리오 링크
- [포트폴리오 사이트](https://your-portfolio.vercel.app)
- [GitHub 저장소](https://github.com/yourusername/portfolio)

## 🚀 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **배포**: Vercel

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # 소개 페이지
│   │   ├── projects/       # 프로젝트 페이지
│   │   ├── contact/        # 연락처 페이지
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   └── page.tsx        # 홈페이지
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Navigation.tsx  # 네비게이션
│   │   └── Footer.tsx      # 푸터
│   └── lib/               # 유틸리티 함수
├── public/                # 정적 파일
├── vercel.json           # Vercel 배포 설정
└── package.json
```

## 🛠️ 개발 환경 설정

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 📦 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## 🚀 Vercel 배포

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **Vercel 로그인**
   ```bash
   vercel login
   ```

3. **프로젝트 배포**
   ```bash
   vercel
   ```

4. **자동 배포 설정**
   - GitHub 저장소와 연결
   - main 브랜치에 푸시할 때마다 자동 배포

## 🎨 커스터마이징

### 개인 정보 수정
1. `src/app/layout.tsx` - 사이트 메타데이터
2. `src/components/Footer.tsx` - 연락처 정보
3. `src/app/contact/page.tsx` - 연락처 페이지 정보
4. `src/app/about/page.tsx` - 소개 페이지 내용
5. `public/images/profile.jpg` - 프로필 사진 (160x160px 권장)

### 프로젝트 추가
`src/app/projects/page.tsx`의 `projects` 배열에 새 프로젝트를 추가하세요.

### 색상 테마 변경
`tailwind.config.js`에서 색상 팔레트를 수정하거나 `src/app/globals.css`에서 CSS 변수를 변경하세요.

## 📱 반응형 디자인

- 모바일 우선 설계
- 태블릿 및 데스크톱 최적화
- 터치 친화적 인터페이스

## 🔧 추가 기능

- [ ] 다크 모드 토글
- [ ] 다국어 지원
- [ ] 블로그 섹션
- [ ] 프로젝트 필터링
- [ ] 이메일 폼 연동

## 📄 라이선스

MIT License

## 📞 연락처

- 이메일: your-email@example.com
- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)