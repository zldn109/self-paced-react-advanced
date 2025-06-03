import { useState } from "react";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalTypeState } from "../../store/AppAtom";

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
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
`;

const Label = styled.label`
  color: var(--grey-400);
  font-size: 14px;

  ${(props) =>
    props.required &&
    css`
      &::after {
        content: "*";
        padding-left: 4px;
        color: var(--primary-color);
      }
    `}
`;

const HelpText = styled.span`
  color: var(--grey-300);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const Input = styled.input`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;

  resize: none;
`;

const Select = styled.select`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;

  height: 44px;

  color: var(--grey-300);
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

  ${({ props }) =>
    props === "primary" &&
    css`
      background: var(--primary-color);
      color: var(--grey-100);
      &:last-child {
        margin-right: 0;
      }
    `}
`;

function AddRestaurantModal({ onSubmitRestaurant }) {
  const setModalTypeToOpen = useSetRecoilState(modalTypeState);
  const handleCloseModal = () => setModalTypeToOpen(null);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ModalWrapper>
      <ModalBackdrop onClick={() => handleCloseModal()}></ModalBackdrop>
      <ModalContainer>
        <ModalTitle>새로운 음식점</ModalTitle>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const newRestaurant = {
              id: Date.now(),
              category,
              name,
              description,
            };

            onSubmitRestaurant(newRestaurant);
            handleCloseModal();
          }}
        >
          <FormItem>
            <Label htmlFor="category" required>
              카테고리
            </Label>
            <Select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">선택해 주세요</option>
              <option value="한식">한식</option>
              <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option>
              <option value="아시안">아시안</option>
              <option value="기타">기타</option>
            </Select>
          </FormItem>

          <FormItem>
            <Label htmlFor="name" required>
              이름
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="description">설명</Label>
            <Textarea
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <HelpText>메뉴 등 추가 정보를 입력해 주세요.</HelpText>
          </FormItem>

          <ButtonContainer>
            <Button type="submit" props="primary">
              추가하기
            </Button>
          </ButtonContainer>
        </form>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default AddRestaurantModal;
