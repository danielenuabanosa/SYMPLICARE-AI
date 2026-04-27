export type ContactFormValues = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  interest: string;
  message: string;
  consent: boolean;
};

export type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  workEmail: '',
  company: '',
  role: '',
  interest: '',
  message: '',
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeText = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export const sanitizeContactForm = (input: Partial<ContactFormValues>): ContactFormValues => {
  return {
    firstName: normalizeText(input.firstName),
    lastName: normalizeText(input.lastName),
    workEmail: normalizeText(input.workEmail),
    company: normalizeText(input.company),
    role: normalizeText(input.role),
    interest: normalizeText(input.interest),
    message: normalizeText(input.message),
    consent: input.consent === true,
  };
};

export const validateContactForm = (values: ContactFormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.firstName) errors.firstName = 'First name is required.';
  if (!values.lastName) errors.lastName = 'Last name is required.';
  if (!values.workEmail) {
    errors.workEmail = 'Work email is required.';
  } else if (!emailPattern.test(values.workEmail)) {
    errors.workEmail = 'Please enter a valid email address.';
  }
  if (!values.company) errors.company = 'Company name is required.';
  if (!values.role) errors.role = 'Role is required.';
  if (!values.interest) errors.interest = 'Please choose a topic.';
  if (!values.message) {
    errors.message = 'Please share a short message.';
  } else if (values.message.length < 20) {
    errors.message = 'Message should be at least 20 characters.';
  } else if (values.message.length > 600) {
    errors.message = 'Message cannot exceed 600 characters.';
  }
  if (!values.consent) {
    errors.consent = 'Please confirm you agree to be contacted.';
  }

  return errors;
};
