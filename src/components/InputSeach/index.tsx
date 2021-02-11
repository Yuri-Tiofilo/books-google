import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import {
  Container,
  ContainerInput,
  Input,
  AreaIconSearch,
  IconSearch,
} from './styles';

interface PropsInputSeach extends InputHTMLAttributes<HTMLInputElement> {
  isActive: boolean;
  functionOnClikIcon(): void;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputSeach: React.FC<PropsInputSeach> = ({
  functionOnClikIcon,
  isActive,
  icon: Icon,
  ...rest
}) => {
  return (
    <>
      {isActive ? (
        <Container>
          <ContainerInput>
            <Input {...rest} />
          </ContainerInput>
          <AreaIconSearch>
            {/* {Icon && <Icon size={20} onClick={() => {}} />} */}
            <IconSearch
              onClick={() => {
                functionOnClikIcon();
              }}
            />
          </AreaIconSearch>
        </Container>
      ) : null}
    </>
  );
};

export default InputSeach;
