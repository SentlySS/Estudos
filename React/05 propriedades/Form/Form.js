import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <Input id="email" required />
      <Input id="password" type="password" />
      <Button />
    </form>
  );
};

export default Form;