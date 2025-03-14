import registerAuthoringUser from './registerAuthoringUser.js';

export default async (props, options, context) => {

  const { emails, role } = props;

  const { user } = context;

  if (emails && emails.length) {

    for (const email of emails) {

      await registerAuthoringUser({
        email,
        role
      }, context);

    }
  }

  return {};
};