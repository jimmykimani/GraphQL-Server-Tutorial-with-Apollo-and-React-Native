import styled from "styled-components/native";
import {
  strokeGray,
  darkGray,
  white,
  mediumGray
} from "../../constants/Colors";

const CardContainer = styled.View`
  background-color: #ffe9ea;
  border-style: solid;
  width: 100%;
  padding: 16px 16px 16px 16px;
  text-align: center;
  border-radius: 18px;
  margin-bottom: 13px;
`;

const TimestampContainer = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
  line-height: 12px;
  color: #928f9a;
  padding-top: 16px;
`;

const EditWrapper = styled.TouchableOpacity`
  margin-left: auto;
  margin-top: 5px;
`;

const EditIcon = styled.Image`
  height: 4px;
  width: 20px;
`;

const CardText = styled.Text`
  font-weight: 400;
  color: #4a4a4a;
  line-height: 23px;
  font-size: 16px;
  width: 90%;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export {
  CardContainer,
  TimestampContainer,
  EditWrapper,
  EditIcon,
  CardText,
  HeaderContainer
};
