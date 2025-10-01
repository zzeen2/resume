// 프로젝트 데이터
export const portfolioData = {
  portfolioList: [
    {
      name: "Scoop – 지역 기반 동호회 매칭 플랫폼",
      period: "2025.04.02 - 2025.04.17 (16일)",
      project: "Team Project",
      logo: "users",
      percent: "3명",
      link: "https://meetscoop.shop/",
      github: "https://github.com/zzeen2/scoop_project",
      description: `관심사 기반 동호회를 누구나 쉽게 찾고 참여할 수 있도록 도와주는 웹 서비스입니다. 사용자는 카테고리 또는 위치 기반으로 동호회를 탐색하고, 활동에 참여하거나 리뷰를 남길 수 있으며, 리뷰 작성 시 포인트가 적립되는 시스템을 제공합니다. 동호회 운영자는 활동 일정을 등록하여 활발한 동호회 활동을 유도할 수 있고, 비회원도 일일 게스트로 활동에 참여할 수 있는 개방적인 커뮤니티 플랫폼을 지향합니다. Kakao Map API를 활용한 위치 기반 서비스와 Kakao OAuth 연동을 통해 사용자 편의성을 극대화한 지역 커뮤니티 연결 플랫폼입니다.

🎯 **핵심 기능**
• Kakao OAuth 소셜 로그인
• 지역(광역/지역) 및 카테고리 기반 동호회 탐색 및 필터링
• 카카오맵 API를 활용한 동호회 위치 시각화
• 동호회 등록, 수정 기능 (포인트 시스템에 따른 동호회 생성 권한 제한)
• 캘린더를 통한 동호회 일정 관리 및 참여 시스템
• 비회원 일일 게스트 참가 기능
• 동호회 좋아요(찜) 및 리뷰 작성 시스템
• 동호회 활동에 따른 포인트 적립 시스템


👨‍💻 **담당 역할**
• MySQL + Sequelize ORM을 활용한 데이터베이스 스키마 설계 및 모델 관계 정의 (1:N, N:M)
• 동호회 관련 API 구현 (생성, 조회, 수정)
• 다중 조건 검색 및 필터링 API 구현 (동호회명/태그/지역명, 활동 유형별)
• 일정 등록 및 참여자 관리 API 구현
• 리뷰/평점 시스템 API 구현 (포인트 적립 연계, 작성 제한 로직)
• 비회원 게스트 참여 기능 및 권한 제어 처리 API 구현
• 프로젝트 전반 UI/UX 디자인 및 스타일 가이드 수립
• Git 브랜치 전략 수립 및 버전 관리`,
      tech: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize",
        "EJS",
        "HTML/CSS",
      ],
      image: [
        {
          name: "scoop/category-all.png",
          tit: "전체 카테고리 페이지",
          desc: "모든 동호회를 한눈에 확인할 수 있으며, 동호회 이름/태그/지역명 검색과 활동 유형 필터(전체/지역기반/광역기반)를 제공합니다.",
          layout: "full",
        },
        {
          name: "scoop/category-detail.png",
          tit: "상세 카테고리 페이지",
          desc: "특정 메인 카테고리 선택 시 하위 카테고리를 추가로 선택할 수 있으며, 동일한 필터 기능을 제공합니다.",
          layout: "full",
        },
        {
          name: "scoop/detail-info.png",
          tit: "동호회 상세 - 정보 탭",
          desc: "동호회의 상세 정보, 이미지, 소개, 카테고리, 태그, 멤버 정보를 확인할 수 있습니다. 동호회 관리자는 동호회 수정 버튼과 일정 등록 버튼을 통해 관리 기능을 사용할 수 있으며, 비회원은 가입 신청 버튼을 통해 동호회 가입을 요청할 수 있습니다.",
          layout: "half",
        },
        {
          name: "scoop/detail-calendar.png",
          tit: "동호회 상세 - 일정 탭",
          desc: "캘린더로 시각화된 월별 일정을 확인할 수 있습니다. 동호회 회원은 이벤트 클릭 시 참석/불참/미정 중 선택하여 참여 의사를 표현할 수 있으며, 비회원은 일일 게스트로 신청할 수 있습니다.",
          layout: "half",
        },
        {
          name: "scoop/detail-member.png",
          tit: "동호회 상세 - 멤버 탭",
          desc: "운영진과 일반 멤버 목록을 프로필 이미지, 이름, 가입일과 함께 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "scoop/detail-review.png",
          tit: "동호회 상세 - 리뷰 탭",
          desc: "평점 평균과 점수 분포 그래프를 확인하고, 작성된 리뷰 목록을 조회하거나 새 리뷰를 작성할 수 있습니다.",
          layout: "half",
        },
        {
          name: "scoop/create.png",
          tit: "동호회 생성 페이지",
          desc: "이름, 설명, 대표 이미지, 카테고리, 태그, 활동 범위(지역/광역) 등을 입력하여 새로운 동호회를 생성할 수 있습니다.",
          layout: "half",
        },
        {
          name: "scoop/manage.png",
          tit: "동호회 관리 페이지",
          desc: "기존 동호회의 정보를 수정할 수 있으며, 이미지 미선택 시 기존 이미지가 유지됩니다.",
          layout: "half",
        },
        {
          name: "scoop/event-add.png",
          tit: "이벤트 등록 페이지",
          desc: "활동 일정을 등록하고, 위치, 정원, 게스트 허용 여부 등을 설정할 수 있습니다.",
          layout: "half",
        },
      ],
    },
    {
      name: "MoodCloud – 감정 기록 및 공유 앱",
      period: "2025.05.13 - 2025.06.01 (20일)",
      project: "Team Project",
      logo: "cloud",
      percent: "3명",
      link: "https://cuekim.shop/",
      appLink: "https://expo.dev/preview/update?message=Version%201.0.3&updateRuntimeVersion=1.0.2&createdAt=2025-06-05T06%3A22%3A37.957Z&slug=exp&projectId=7cdbd4d8-a4ea-4f4b-b914-d29b6312b483&group=3c41cc86-4eeb-4060-a215-ac30d4761568",
      github: "https://github.com/zzeen2/Diary-App",
      description: `AI 감정 분석과 스트릭 시스템을 활용한 감정 기록 및 소셜 공유 플랫폼입니다. 사용자는 8가지 감정 아이콘으로 일상을 기록하고, OpenAI API를 통한 AI 감정 분석으로 자신의 감정 패턴을 파악할 수 있으며, 연속 기록 스트릭과 월별 감정 통계로 지속적인 기록 습관을 형성할 수 있는 시스템을 제공합니다. 친구 팔로우/팔로잉 기능을 통한 일기 공유와 댓글 시스템으로 소셜 커뮤니케이션을 지원하며, 카카오 OAuth 인증과 React Native 기반 크로스 플랫폼 앱으로 사용자 편의성을 극대화한 감정 웰빙 플랫폼입니다.

🎯 **핵심 기능**
• OpenAI API를 활용한 AI 감정 분석 (일기 내용을 9가지 감정 카테고리로 자동 분류)
• 연속 기록 스트릭 시스템 및 월별 감정 통계 시각화
• 친구 팔로우/팔로잉 기능과 친구 일기 피드
• 일기 CRUD 및 댓글 시스템
• 카카오 OAuth 소셜 로그인 (WebView 방식)
• React Native + Expo 기반 크로스 플랫폼 모바일 앱

👨‍💻 **담당 역할 (풀스택)**

**Backend**
• OpenAI API 연동 감정 분석 시스템 구현 (일기 내용 기반 9가지 감정 자동 분류)
• 카카오 OAuth 인증 구현 (WebView 방식, AsyncStorage 기반 자동 로그인)
• 일기 관리 API 구현 (CRUD, 이미지 업로드, 공개/비공개 설정, 감정 분석 연동)
• 소셜 기능 API 구현 (팔로우/팔로잉 시스템, 친구 일기 피드, 댓글 작성/조회/삭제)
• 통계 API 구현 (연속 기록 스트릭, 감정 분포 통계, 월별 기록 현황)

**Frontend**
• React Native + Expo 크로스 플랫폼 모바일 앱 개발 (iOS/Android)
• Redux 기반 전역 상태 관리 설계 (사용자 정보, 감정 데이터, 일기 목록, 스트릭)
• 기록된 감정 통계 기능 구현 (react-native-chart-kit 기반 시각화, 월별/누적 통계 제공)
• 소셜 기능 UI 구현 (친구 검색, 팔로우/팔로잉 관리, 친구 일기 피드, 댓글 시스템)
• 프로필 화면 UI 구현 (자기소개/프로필 이미지 수정, 공개 일기 목록 관리)
• 연속 기록 스트릭 표시 및 동기부여를 위한 UI/UX 설계

**기타**
• 프로젝트 아키텍처 설계 및 팀 리드`,
      tech: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Drizzle ORM",
        "React Native",
        "Expo",
        "Redux",
        "OpenAI API",
      ],
      image: [
        {
          name: "moodcloud/welcome.gif",
          tit: "웰컴 페이지 (카카오 로그인)",
          desc: "WebView 기반 카카오 OAuth 인증과 AsyncStorage를 통한 자동 로그인 기능을 제공합니다.",
          layout: "half",
        },
        {
          name: "moodcloud/main-1.png",
          tit: "메인 화면 - 구성 1",
          desc: "8가지 감정 아이콘으로 오늘의 감정을 선택하고, 상단 헤더에 연속 스트릭 일수가 표시됩니다.",
          layout: "half",
        },
        {
          name: "moodcloud/main-2.png",
          tit: "메인 화면 - 구성 2",
          desc: "감정 기록 후 내 일기와 팔로워 일기 요약을 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/main-emotion.gif",
          tit: "메인 화면 - 감정만 저장",
          desc: "간단한 감정 기록으로 빠르게 오늘 감정을 기록할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/main-after.png",
          tit: "메인 화면 - 감정/일기 작성 후",
          desc: "감정/일기 등록 후 랜덤 일기 추천으로 재미 요소를 제공합니다.",
          layout: "half",
        },
        {
          name: "moodcloud/diary-create.gif",
          tit: "일기 작성",
          desc: "선택한 감정 아이콘이 상단에 표시되며, 공개/비공개 설정을 선택할 수 있습니다. 작성 완료 시 OpenAI API를 통해 일기 내용이 자동으로 감정 분석됩니다.",
          layout: "half",
        },
        {
          name: "moodcloud/diary-calendar-1.jpeg",
          tit: "일기 목록 - 달력 뷰",
          desc: "월별 달력에서 일기 및 감정 작성 여부를 시각적으로 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/diary-calendar-2.gif",
          tit: "일기 검색",
          desc: "감정 아이콘으로 일기를 필터링하거나 특정 날짜를 클릭하여 해당 날짜의 일기를 조회할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/diary-detail.gif",
          tit: "일기 상세 및 댓글",
          desc: "일기 전체 내용을 확인하고, 본인 일기는 수정/삭제가 가능하며, 팔로워와 댓글을 통해 소통할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/friend-list.png",
          tit: "친구 일기 피드",
          desc: "팔로우한 친구들의 오늘 작성된 공개 일기 목록을 피드 형태로 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/add-friend.gif",
          tit: "친구 추가 및 팔로우",
          desc: "닉네임으로 친구를 검색하고, 친구의 프로필 정보 및 공개 일기 목록을 확인한 후 팔로우/언팔로우할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/follow-list.gif",
          tit: "팔로워/팔로잉 관리",
          desc: "나를 팔로우하는 사용자 목록과 내가 팔로우하는 사용자 목록을 확인하고, 프로필로 바로 이동할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/profile.jpeg",
          tit: "사용자 프로필",
          desc: "프로필 이미지, 닉네임, 자기소개를 수정할 수 있으며, 팔로워/팔로잉 수와 공개 일기 목록을 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/stats-1.png",
          tit: "감정 통계 (원그래프)",
          desc: "월별 감정 분포를 원그래프로 시각화하여 자신의 감정 패턴을 파악할 수 있습니다.",
          layout: "half",
        },
        {
          name: "moodcloud/stats-2.png",
          tit: "감정 통계 (막대그래프)",
          desc: "연속 기록 스트릭과 누적 통계를 막대그래프로 확인할 수 있습니다.",
          layout: "half",
        },
      ],
    },
    {
      name: "MPS – 블록체인 기반 음원 라이브러리 플랫폼",
      period: "2025.08.08 - 2025.09.14 (38일)",
      project: "Team Project",
      logo: "music",
      percent: "3명",
      link: "https://admin.klk1.store/",
      github: "https://github.com/zzeen2/MPS-project/tree/admin",
      description: `블록체인 기반 음원 라이브러리 플랫폼(MPS)으로, 기업이 음원을 외부 서비스에서 안전하고 투명하게 활용할 수 있도록 지원하는 B2B 서비스입니다. API를 통해 음원 사용을 간편하게 연동할 수 있으며, 모든 사용 내역은 블록체인에 기록되어 저작권과 정산 과정을 신뢰성 있게 관리합니다.
음원을 이용하는 기업(Client)은 특정 음원 사용 시 토큰 형태의 리워드를 지급받고, 이를 플랫폼 이용료 할인 혜택으로 사용할 수 있습니다. 관리자(Admin)는 음원 등록부터 사용 현황 모니터링, 리워드 관리, 매출 분석까지 통합적으로 관리할 수 있는 대시보드를 통해 시스템을 효율적으로 운영할 수 있습니다.
본 프로젝트는 크로스허브(부트캠프 협약 기업)와의 협업으로 진행되었으며, 기업 요구사항 문서 기반의 실무 프로젝트로 진행되었습니다. 전체 시스템은 관리자 대시보드(Admin), 클라이언트 웹(Client), 백엔드 API 서버, 스마트 컨트랙트로 구성되며, 본인은 관리자 대시보드(Admin) 부분의 풀스택 개발을 전담했습니다.

👨‍💻 **담당 역할 (풀스택)**

**Backend**
• NestJS + TypeScript 기반 RESTful API 설계 및 구현
• Drizzle ORM과 PostgreSQL을 활용한 14개 테이블 관계 설계
• 음원 관리 API 구현 (목록 조회, 상세 조회, 등록, 수정, 삭제 및 검색/필터링/페이지네이션)
• 기업 관리 API 구현 (기업 정보 CRUD, 기업별 음원 사용 통계 조회)
• 대시보드 통계 API 구현 (전체 통계, 시간별 재생 현황, 등급별 기업 분포, 카테고리 TOP5, 인기 음원 TOP10)
• 실시간 모니터링 API 구현 (최근 5분간 API 호출 로그, 24시간 인기 음원 순위 실시간 조회)
• 매출 관리 API 구현 (월별 매출 트렌드, 구독 플랜별 매출 현황, 기업별 매출 기여도, 매출 캘린더)
• 리워드 관리 API 구현 (음원별 리워드 지급 현황, 음원별 리워드 한도 설정, 기업별 리워드 사용 통계, 월별 리워드 한도 관리)
• 시스템 관리 API 구현 (API 키 관리, 토큰 정보 조회, 지갑 정보 조회, 트랜잭션 내역 조회, 수동 트랜잭션 실행)
• 복잡한 통계 쿼리 구현 (CTE와 다중 JOIN을 활용한 월별 매출 분석, 기업별 리워드 사용량 집계)
• Multer를 활용한 음원 파일 업로드 시스템 구현 (오디오/가사/이미지 다중 파일 처리)

**Frontend**
• Next.js 기반 관리자 대시보드 UI 구현
• Chart.js를 활용한 데이터 시각화 (24시간 API 호출 차트, 등급별 기업 분포 파이차트, 카테고리 TOP5 막대그래프, 인기 음원 TOP10 순위)
• 음원/기업/매출/리워드/시스템 관리 UI 구현 (각 도메인별 CRUD 폼, 목록 테이블, 상세 모달, 통계 조회)
• 실시간 모니터링 UI 구현 (WebSocket 연동 실시간 API 호출 로그)
• 검색/필터링/페이지네이션 기능 구현

**문제 해결 및 최적화**
• WebSocket 연결 불안정 문제 해결: HTTP 폴링과 WebSocket 병행하는 하이브리드 방식으로 연결 끊김 시에도 데이터 연속성 확보
• ORM 한계 극복: Raw Query 병행하여 복잡한 통계 쿼리 구현, DB 호출 최소화 및 쿼리 레벨 계산으로 서버 부하 감소`,
      tech: [
        "TypeScript",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Drizzle ORM",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Chart.js",
        "Socket.io",
      ],
      image: [
        // 1. 관리자 인증
        {
          name: "mps/admin_login.gif",
          tit: "관리자 로그인",
          desc: "JWT 기반 인증 시스템 (관리자 ID/PW 로그인, 자동 토큰 갱신, 8시간 세션 유지, HttpOnly 쿠키 토큰 관리)",
          layout: "full",
        },
        // 2. 메인 대시보드
        {
          name: "mps/dashboard_1.png",
          tit: "메인 대시보드 - 전체 현황",
          desc: "총 음원 수, 기업 수, 월간 재생 수, 월간 매출 등 핵심 지표 표시, 24시간 API 호출 차트, 등급별 기업 분포 파이차트, 카테고리 TOP5 막대그래프, 인기 음원 TOP10 순위",
          layout: "full",
        },
        {
          name: "mps/mps-dashboard_test.gif",
          tit: "대시보드 실시간 시연 영상",
          desc: "MPS 테스트 페이지 음원/가사 호출 시 WebSocket 기반 실시간 API 호출 로그(최근 5분간), 음원 재생 실시간 소켓 알림, 리워드 발생 실시간 업데이트, 기업별 사용량 실시간 모니터링",
          layout: "full",
        },
        // 3. 음원 관리
        {
          name: "mps/musics_list.png",
          tit: "음원 목록 관리",
          desc: "음원 목록 조회 (검색, 필터링, 페이지네이션), 음원별 사용 통계 및 리워드 지급 현황 조회, 테이블 컬럼별 필터링 및 정렬 기능",
          layout: "full",
        },
        {
          name: "mps/add_music.gif",
          tit: "음원 등록",
          desc: "오디오 파일, 가사 파일, 커버 이미지를 업로드하여 새로운 음원을 등록할 수 있습니다.",
          layout: "half",
        },
        {
          name: "mps/detail_music.gif",
          tit: "음원 상세",
          desc: "음원 상세 조회 (음원 정보, 통계, 리워드 현황)",
          layout: "half",
        },
        {
          name: "mps/edit_music.gif",
          tit: "음원 수정",
          desc: "음원 정보 수정 (제목, 아티스트, 카테고리, 가격 등)",
          layout: "half",
        },
        {
          name: "mps/delete_music.gif",
          tit: "음원 삭제",
          desc: "단일/다중 선택 삭제",
          layout: "half",
        },
        // 4. 리워드 관리
        {
          name: "mps/reward_list_musics.png",
          tit: "음원별 리워드 현황",
          desc: "음원별 리워드 지급 현황 조회 (월별 통계), 음원별 리워드 한도 설정 및 수정 (개별/일괄 수정 가능), 리워드 지급 트렌드 분석, 월별 리워드 한도 관리, 리워드 지급률 및 사용률 통계",
          layout: "full",
        },
        {
          name: "mps/reward_detail_music.gif",
          tit: "음원 상세 모달",
          desc: "음원별 리워드 상세 정보를 모달로 확인할 수 있습니다.",
          layout: "half",
        },
        {
          name: "mps/reward_edit_music.gif",
          tit: "일괄 리워드 수정",
          desc: "여러 음원의 리워드 한도를 일괄적으로 수정할 수 있습니다.",
          layout: "half",
        },
        // 5. 기업 관리
        {
          name: "mps/reward_list_company.png",
          tit: "기업별 리워드 현황",
          desc: "기업 목록 조회 (검색, 필터링, 페이지네이션), 기업 정보 열람 (기업명, 구독 플랜, 연락처, 등록일 등), 기업별 음원 사용 통계 조회, 기업별 리워드 사용 현황 조회, 테이블 컬럼별 필터링 및 정렬 기능",
          layout: "full",
        },
        {
          name: "mps/reward_list_company.gif",
          tit: "기업 상세 정보 및 통계",
          desc: "기업의 상세 정보, 음원 사용 통계, 리워드 사용 현황을 확인할 수 있습니다.",
          layout: "full",
        },
        // 6. 매출 관리
        {
          name: "mps/dashboard1.png",
          tit: "매출 대시보드 - 상단",
          desc: "월별 매출 트렌드 분석 (차트 시각화), 구독 플랜별 매출 현황 (Free, Standard, Business), 기업별 매출 기여도 및 순위",
          layout: "full",
        },
        {
          name: "mps/dashboard_bottom.png",
          tit: "매출 대시보드 - 하단",
          desc: "월별 리워드 지급 현황 통계, 기업별 리워드 사용량 분석, 매출 캘린더 (일별 매출 현황)",
          layout: "full",
        },
        // 7. 시스템 관리
        {
          name: "mps/api_setting.png",
          tit: "API 관리",
          desc: "API 키 조회 및 모니터링, API 호출 통계 및 성능 모니터링 (기간별 조회)",
          layout: "full",
        },
        {
          name: "mps/chain.png",
          tit: "온체인 관리",
          desc: "토큰 정보 조회 (총 공급량, 발행량, 소각량, 유통량), 지갑 정보 조회 (잔액, 주소, 상태), 일별 배치 트랜잭션 조회",
          layout: "full",
        },
        {
          name: "mps/transaction.gif",
          tit: "수동 트랜잭션",
          desc: "관리자가 수동으로 트랜잭션을 실행할 수 있습니다.",
          layout: "half",
        },
        {
          name: "mps/transaction_detail.gif",
          tit: "트랜잭션 상세",
          desc: "트랜잭션 상세 내역 조회, 온체인 데이터 실시간 동기화",
          layout: "half",
        },
      ],
    },
    {
      name: "Drawzy – 랜덤뽑기 마켓플레이스",
      period: "2025.07.02 - 2025.07.04 (3일)",
      project: "Personal Project",
      logo: "dice",
      percent: "1명",
      github: "https://github.com/zzeen2/drawzy",
      description: `Web3 기술을 활용한 블록체인 기반 투명한 랜덤뽑기 마켓플레이스입니다. LuckyDraw Token(LDT)을 사용하여 가격대별로 분류된 상품권을 랜덤으로 획득할 수 있는 시스템을 제공합니다. 기존의 불투명한 뽑기 시스템과 달리, 모든 거래는 스마트 컨트랙트를 통해 투명하게 처리되며, 블록체인 기반의 공정한 랜덤 시스템을 보장합니다.
사용자들은 가입 시 3 LDT 보너스를 받고, 상품권을 등록하면 카테고리별 보상을 받을 수 있습니다. 플랫폼은 실시간 대시보드를 통해 전체 통계, 가격별 분포, 실시간 활동 피드를 제공하여 투명한 운영을 지원합니다.
본 프로젝트는 3일간 진행된 개인 프로젝트로, Sepolia 테스트넷에 배포되어 MetaMask를 통해 실제로 체험할 수 있습니다.

🎯 **구현 기능**

**스마트 컨트랙트 (Blockchain)**
• Solidity 기반 스마트 컨트랙트 설계 및 개발 (OpenZeppelin ERC20 표준 활용)
• 가격대별 자동 분류 시스템 구현 (1-6 LDT 카테고리, 실제 가격 기반 자동 분류)
• 블록체인 기반 투명한 랜덤뽑기 시스템 구현 (keccak256 해시 함수를 활용한 검증 가능한 랜덤성)
• 토큰 경제 모델 설계 및 구현 (가입 보너스 3 LDT, 등록 보상 시스템)
• 실시간 대시보드 시스템 구현 (전체 통계, 가격별 분포, 실시간 활동 피드)
• Sepolia 테스트넷 배포 및 Hardhat 개발 환경 구축

**Frontend**
• React 기반 SPA 프론트엔드 개발 (React Router, Styled Components 활용)
• MetaMask 지갑 연동 및 Web3 생태계 통합 (ethers.js 라이브러리 활용)
• 커스텀 훅 기반 상태 관리 시스템 설계 (useWallet, useToken, useLuckyDraw, useCoupon)
• 상품권 뽑기 시스템 UI/UX 구현 (카테고리 선택, 뽑기 애니메이션, 결과 모달)
• 내 상품권 관리 시스템 구현 (획득한 상품권 목록, 카테고리별 필터링, 쿠폰 코드 복사)
• 상품권 등록 시스템 구현 (2단계 등록 프로세스, 입력 폼 검증)`,
      tech: [
        "Solidity",
        "Hardhat",
        "OpenZeppelin",
        "ethers.js",
        "React",
        "JavaScript",
        "Styled Components",
      ],
      image: [
        {
          name: "drawzy/main.gif",
          tit: "메인 페이지 - 지갑 연결 및 프로세스 안내",
          desc: "MetaMask 지갑 연결 상태 표시, 시작하기 버튼(지갑 미연결 시 연결 유도, 연결 시 뽑기 페이지 이동), 4단계 프로세스 안내(토큰 받기 → 뽑기 → 상품권 획득 → 상품 등록), 카테고리별 뽑기 섹션(6개 가격대별 카테고리 소개)",
          layout: "full",
        },
        {
          name: "drawzy/draw.gif",
          tit: "뽑기 페이지 - 가격 카테고리별 뽑기",
          desc: "카테고리 선택(1-6 LDT 가격대별), 실시간 재고 확인(각 카테고리별 남은 상품권 수 표시), 뽑기 애니메이션(스피닝 애니메이션으로 긴장감 연출), 결과 모달(획득한 상품권 정보), 토큰 잔액 확인(현재 보유 LDT 토큰 실시간 표시)",
          layout: "full",
        },
        {
          name: "drawzy/list.gif",
          tit: "내 상품권 - 획득한 상품권 목록 및 관리",
          desc: "획득 상품권 목록(뽑기로 획득한 모든 상품권 표시), 카테고리별 필터링(전체/1-6 LDT 카테고리별 필터), 쿠폰 코드 복사(원클릭으로 쿠폰 코드 클립보드 복사), 사용 상태 관리(사용완료/사용됨 토글 기능), 카드 레이아웃(한 줄에 3개씩 배치되는 반응형 그리드)",
          layout: "full",
        },
        {
          name: "drawzy/dash.png",
          tit: "대시보드 - 플랫폼 전체 통계 및 실시간 활동",
          desc: "전체 플랫폼 통계(총 쿠폰 수, 총 가치, 잔여 통계), 가격별 분포(각 카테고리별 등록/잔여 쿠폰 수), 실시간 활동(최근 등록 및 뽑기 활동 피드), 최근 추가 쿠폰(최신 등록된 상품권 목록), 품절 표시(잔여 쿠폰이 0개인 카테고리 빨간색 표시)",
          layout: "full",
        },
        {
          name: "drawzy/add.gif",
          tit: "추가 페이지 - 가격 카테고리별 선택 및 등록",
          desc: "2단계 등록 프로세스(카테고리 선택 → 상품권 정보 입력), 가격대별 카테고리(실제 가격에 따른 자동 분류), 등록 보상(카테고리별 LDT 토큰 보상 지급), 입력 폼 검증(필수 정보 입력 확인 및 유효성 검사)",
          layout: "full",
        },
      ],
    },
  ],
};

// 기술 스택 데이터
export const skillData = {
  skillList: [
    {
      label: "HTML/CSS",
      detail: [
        "시맨틱 HTML을 사용하여 접근성과 SEO를 고려한 마크업을 작성할 수 있습니다.",
        "CSS Grid와 Flexbox를 활용한 반응형 레이아웃 구현이 가능합니다.",
        "CSS 전처리기(Sass, SCSS)와 최신 CSS 문법을 활용할 수 있습니다.",
      ],
      icon: "fab fa-html5",
    },
    {
      label: "JavaScript/TypeScript",
      detail: [
        "ES6+ 문법과 모던 JavaScript 기능을 활용한 개발이 가능합니다.",
        "TypeScript를 사용하여 타입 안정성을 보장하는 코드를 작성할 수 있습니다.",
        "비동기 프로그래밍(Promise, async/await)을 이해하고 활용할 수 있습니다.",
      ],
      icon: "fab fa-js-square",
    },
    {
      label: "React",
      detail: [
        "함수형 컴포넌트와 Hooks를 활용한 현대적인 React 개발이 가능합니다.",
        "상태 관리(useState, useReducer, Context API)를 이해하고 적용할 수 있습니다.",
        "컴포넌트 생명주기와 성능 최적화(useMemo, useCallback)를 고려한 개발을 할 수 있습니다.",
      ],
      icon: "fab fa-react",
    },
    {
      label: "Next.js",
      detail: [
        "App Router와 Pages Router 모두 경험하며, 각각의 장단점을 이해하고 있습니다.",
        "SSR, SSG, ISR 등 다양한 렌더링 방식을 상황에 맞게 선택하여 사용할 수 있습니다.",
        "API Routes를 활용한 풀스택 개발 경험이 있습니다.",
      ],
      icon: "fab fa-node-js",
    },
    {
      label: "Node.js",
      detail: [
        "Express.js를 사용한 RESTful API 서버 구축이 가능합니다.",
        "MongoDB와 PostgreSQL을 활용한 데이터베이스 설계와 연동 경험이 있습니다.",
        "JWT를 활용한 인증 시스템 구현이 가능합니다.",
      ],
      icon: "fab fa-node",
    },
    {
      label: "Git/GitHub",
      detail: [
        "Git Flow를 이해하고 브랜치 전략을 수립하여 협업할 수 있습니다.",
        "Pull Request와 Code Review를 통한 협업 경험이 풍부합니다.",
        "GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험이 있습니다.",
      ],
      icon: "fab fa-git-square",
    },
  ],

  experienceList: [
    {
      period: "2023.06 - PRESENT",
      position: "FRONTEND DEVELOPER",
      company: "김지은 포트폴리오",
      explain: "개인 프로젝트를 통해 React, Next.js, TypeScript 등의 모던 웹 기술을 학습하고 실무에 적용할 수 있는 수준까지 성장했습니다. 사용자 경험을 중시하는 프론트엔드 개발자로 성장하고 있습니다.",
    },
    {
      period: "2022.03 - 2023.05",
      position: "WEB DEVELOPER",
      company: "프리랜서",
      explain: "다양한 클라이언트의 웹사이트 제작과 유지보수를 담당했습니다. 반응형 웹 디자인과 사용자 인터페이스 개선에 집중하며, 클라이언트의 요구사항을 정확히 파악하고 구현하는 능력을 기를 수 있었습니다.",
    },
    {
      period: "2021.09 - 2022.02",
      position: "JUNIOR DEVELOPER",
      company: "웹 에이전시",
      explain: "웹 에이전시에서 퍼블리싱과 프론트엔드 개발을 담당했습니다. HTML, CSS, JavaScript 기초를 탄탄히 다지고, 팀 프로젝트를 통해 협업 능력을 기를 수 있었습니다.",
    },
  ],

  educationList: [
    {
      period: "2023.08 - 2023.09",
      position: "Next.js & TypeScript 마스터 과정",
      company: "온라인 강의",
      explain: "Next.js의 App Router와 TypeScript를 활용한 현대적인 웹 개발 방법론을 학습했습니다. SSR, SSG, API Routes 등 Next.js의 핵심 기능들을 실습을 통해 익혔습니다.",
    },
    {
      period: "2023.06 - 2023.07",
      position: "React 심화 과정",
      company: "온라인 강의",
      explain: "React의 고급 개념인 Context API, useReducer, 커스텀 훅 등을 학습했습니다. 성능 최적화와 상태 관리에 대한 깊이 있는 이해를 얻을 수 있었습니다.",
    },
    {
      period: "2021.03 - 2021.08",
      position: "웹 개발 부트캠프",
      company: "코딩 부트캠프",
      explain: "HTML, CSS, JavaScript 기초부터 시작하여 React까지 전반적인 웹 개발 기술을 학습했습니다. 팀 프로젝트를 통해 협업과 버전 관리의 중요성을 깨달았습니다.",
    },
  ],
};
