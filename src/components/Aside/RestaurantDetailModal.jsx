import styled from "styled-components";

const ModalWrapper = styled.div`
  display: block;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const ModalTitle = styled.h2`
  margin-bottom: 36px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
  &.secondary {
    border: 1px solid var(--grey-300);
    background: transparent;
    color: var(--grey-300);
  }
  &.primary {
    background: var(--primary-color);
    color: var(--grey-100);
    &:last-child {
      margin-right: 0;
    }
  }
`;

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const TextBody = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

function RestaurantDetailModal({
  restaurantName,
  restaurantDescription,
  onCloseModal,
}) {
  return (
    <ModalWrapper>
      <ModalBackdrop onClick={() => onCloseModal()}></ModalBackdrop>
      <ModalContainer>
        <ModalTitle>{restaurantName}</ModalTitle>
        <RestaurantInfo>
          <TextBody>{restaurantDescription}</TextBody>
        </RestaurantInfo>

        <ButtonContainer>
          <Button className="primary" onClick={onCloseModal}>
            닫기
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default RestaurantDetailModal;
