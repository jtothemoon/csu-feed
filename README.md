# CSU Feed

조선대학교 멘토링 및 특강 피드백 수집 플랫폼

## 📋 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [주요 기능](#주요-기능)
4. [설치 및 실행](#설치-및-실행)
5. [환경 변수 설정](#환경-변수-설정)
6. [배포](#배포)

## 프로젝트 소개

조선대학교 소프트웨어중심대학에서 진행하는 멘토링 및 특강에 대한 익명 피드백을 수집하는 웹 서비스입니다.

### 특징
- 🔒 **이메일 보호**: 이메일을 해시로 변환하여 중복 제출만 방지
- 🎯 **간편한 피드백**: Google 로그인 후 평점과 코멘트 작성
- 📊 **피드백 조회**: 이벤트별 피드백 목록 확인

## 기술 스택

### Frontend
- **Framework**: Next.js 16 (App Router, Server Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Component**: Vaul (Bottom Drawer)

### Backend & Database
- **BaaS**: Supabase
  - PostgreSQL (Database)
  - Authentication (Google OAuth)
  - Row Level Security (RLS)

### Deployment
- **Platform**: Vercel

## 주요 기능

### 🔐 인증
- Google OAuth 로그인
- 자동 로그인 유지

### 📋 이벤트
- 이벤트 목록 조회 (최신순)
- 이벤트 상세 정보 확인
- 피드백 목록 조회

### ✍️ 피드백 작성
- 평점 선택 (1-5점)
- 코멘트 작성
- 학과 입력 (선택)
- 중복 제출 방지 (이메일 해시 기반)

## 설치 및 실행

### 필수 요구사항
- Node.js 20.x 이상
- npm

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버: http://localhost:3000

## 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```bash
# Supabase (https://supabase.com 에서 프로젝트 생성 필요)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # 로컬 개발
# NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app  # Vercel 배포
```

> **참고**:
> - Supabase 프로젝트 생성 및 Google OAuth 설정 필요
> - Supabase에서 Redirect URL 추가: `http://localhost:3000/auth/callback` (로컬), 배포 URL (프로덕션)

## 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 환경 변수 설정:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_BASE_URL` (Vercel 배포 URL)
3. Supabase에 배포 URL의 Redirect URL 추가:
   - `https://your-app.vercel.app/auth/callback`
4. 배포 완료!

### 주의사항
- Google Cloud Console에 배포된 도메인을 Authorized redirect URIs에 추가
- Supabase Authentication → URL Configuration에서 배포 도메인 허용
