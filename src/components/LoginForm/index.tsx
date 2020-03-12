import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Form, StyledInput, Label, StyledLabelText } from './styles';
import schema from '../../util/validateShema';
import Button from '../Button';
import Heading from '../Heading';

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const [hasSubmit, setHasSubmit] = React.useState<Boolean>(false);
  const { handleSubmit, register, errors } = useForm({
    validationSchema: schema,
  });

  //@ts-ignore
  const onSubmit = data => {
    if (data.userName && data.password) {
      setHasSubmit(true);
    }
  };

  //@ts-ignore
  return (
    <>
      <Heading content={hasSubmit ? 'Welcome back' : 'Login Form'} isPrimaryColor />
      {!hasSubmit && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Label>
            <StyledLabelText>Username</StyledLabelText>
            <StyledInput type="text" name="userName" placeholder="Your username" ref={register} />
          </Label>
          {/* 
      // @ts-ignore */
          errors.userName && <span>{errors.userName.message}</span>}
          <Label>
            <StyledLabelText>Password</StyledLabelText>
            <StyledInput type="text" name="password" placeholder="Your password" ref={register} />
          </Label>
          {/* 
      // @ts-ignore */
          errors.password && <span>{`🔥${errors.password.message}`}</span>}
          <Button size="medium" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}
    </>
  );
};

export default LoginForm;
