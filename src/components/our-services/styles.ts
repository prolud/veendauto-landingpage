import styled from "styled-components";

export const OurServicesSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  gap: 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
  }
`;

export const BlocksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const Servico = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 22.375rem;
  gap: 1rem;
`;

const BaseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-color: gray;
`;

export const ComunityIcon = styled(BaseIcon)`
  background-color:rgba(84, 84, 212, 0.10);
`;
export const QualityIcon = styled(BaseIcon)`
  background-color:rgba(240, 64, 55, 0.1);
`;
export const AgilityIcon = styled(BaseIcon)`
  background-color:rgba(254, 221, 90, 0.1);
`;