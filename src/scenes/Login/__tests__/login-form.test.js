const {loginFormSchema} = require('../login-form');

describe('Login form', () => {
  it('should be invalid if email is empty', () => {
    const formValues = {email: ''};

    expect(loginFormSchema.isValidSync(formValues)).toBeFalsy();
  });

  it('should be invalid if password is empty', () => {
    const formValues = {email: 'abc@email.com', password: ''};

    expect(loginFormSchema.isValidSync(formValues)).toBeFalsy();
  });

  it('should be valid form', () => {
    const formValues = {email: 'abc@email.com', password: 'abcdef'};

    expect(loginFormSchema.isValidSync(formValues)).toBeTruthy();
  });
});
