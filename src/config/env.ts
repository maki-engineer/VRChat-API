import dotenv from 'dotenv';

dotenv.config();

function required(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not defined.`);
  }

  return value;
}

export const env = {
  vrchat: {
    username: required('VRCHAT_USERNAME'),
    password: required('VRCHAT_PASSWORD'),
  }
};
