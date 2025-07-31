import { useState } from "react";
import styled from "styled-components";

// 탭 정보: id, label(탭 이름), url
const categories = [
  { id: 1, label: "시설 사용 신청서", url: "https://phzrwpca.gensparkspace.com" },
  { id: 2, label: "입과 안내", url: "https://rtaydwfj.gensparkspace.com" },
  { id: 3, label: "콘텐츠 생성", url: "https://aqqnapzn.gensparkspace.com" },
  { id: 4, label: "교육생 면담", url: "https://xjexgaxm.gensparkspace.com" },
  { id: 5, label: "교육생 결과보고", url: "https://jrjswerl.gensparkspace.com" },
];

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3f4f6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: 100%;
  padding: 1rem 1rem;
  border: none;
  border-bottom: 3px solid ${({ active }) => (active ? "#4f46e5" : "transparent")};
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.2s all;
`;

const Iframe = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
`;

function WebViewPage() {
  const [selectedId, setSelectedId] = useState(1);

  const selectedCategory = categories.find((cat) => cat.id === selectedId);

  return (
    <Container>
      <TabBar>
        {categories.map(({ id, label }) => (
          <TabButton key={id} active={selectedId === id} onClick={() => setSelectedId(id)}>
            {label}
          </TabButton>
        ))}
      </TabBar>
      <Iframe src={selectedCategory.url} title="웹뷰" />
    </Container>
  );
}

export default WebViewPage;
