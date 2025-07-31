import styled from "styled-components";
import { FaUserTie, FaBolt, FaChartLine } from "react-icons/fa";

const HeaderContainer = styled.div`
  background: linear-gradient(to right, #1428a0, #8b5cf6);
  color: white;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
`;

const TagList = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>🎓 교육운영 A to Z Agent</Title>
      <Subtitle>간단한 프롬프트와 파일 업로드만으로 교육관련 문서를 자동 생성</Subtitle>
      <TagList>
        <Tag>
          <FaUserTie />
          HRD 담당자 전용
        </Tag>
        <Tag>
          <FaBolt />
          업무 효율화
        </Tag>
        <Tag>
          <FaChartLine />
          교육 질 향상
        </Tag>
      </TagList>
    </HeaderContainer>
  );
}

export default Header;
