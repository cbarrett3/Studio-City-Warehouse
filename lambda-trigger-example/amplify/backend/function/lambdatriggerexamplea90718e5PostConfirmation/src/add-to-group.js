const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  let isAdmin = false;
  const adminEmails = ['connor.steven.barrett@gmail.com'];

  // if the user is one of the admins, set the isAdmin variable to true
  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true;
  }

  const groupParams = {
    UserPoolId: event.userPoolId,
  };

  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  if (isAdmin) {
    groupParams.GroupName = 'Admin';
    userParams.GroupName = 'Admin';
    // First check to see if the group exists, and if not create the group
    try {
      await cognitoProvider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoProvider.createGroup(groupParams).promise();
    }

    // If the user is an administrator, place them in the Admin group
    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  } else {
    // If the user is in neither group, proceed with no action
    callback(null, event);
  }
};

// const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
//   apiVersion: '2016-04-18',
// });

// /**
//  * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
//  */
// exports.handler = async event => {
//   const groupParams = {
//     GroupName: process.env.GROUP,
//     UserPoolId: event.userPoolId,
//   };
//   const addUserParams = {
//     GroupName: process.env.GROUP,
//     UserPoolId: event.userPoolId,
//     Username: event.userName,
//   };
//   /**
//    * Check if the group exists; if it doesn't, create it.
//    */
//   try {
//     await cognitoidentityserviceprovider.getGroup(groupParams).promise();
//   } catch (e) {
//     await cognitoidentityserviceprovider.createGroup(groupParams).promise();
//   }
//   /**
//    * Then, add the user to the group.
//    */
//   await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();

//   return event;
// };
