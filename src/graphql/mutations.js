/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
      id
      createdAt
      prompt
      result
      type
      experience
      education
      username
      company
      role
      requirements
      author
      status
      misc
      updatedAt
    }
  }
`;
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
      id
      createdAt
      prompt
      result
      type
      experience
      education
      username
      company
      role
      requirements
      author
      status
      misc
      updatedAt
    }
  }
`;
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
      id
      createdAt
      prompt
      result
      type
      experience
      education
      username
      company
      role
      requirements
      author
      status
      misc
      updatedAt
    }
  }
`;
export const createSubscriptions = /* GraphQL */ `
  mutation CreateSubscriptions(
    $input: CreateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    createSubscriptions(input: $input, condition: $condition) {
      id
      subscriptionId
      customerEmail
      priceId
      eventType
      createdAt
      updatedAt
      status
    }
  }
`;
export const updateSubscriptions = /* GraphQL */ `
  mutation UpdateSubscriptions(
    $input: UpdateSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    updateSubscriptions(input: $input, condition: $condition) {
      id
      subscriptionId
      customerEmail
      priceId
      eventType
      createdAt
      updatedAt
      status
    }
  }
`;
export const deleteSubscriptions = /* GraphQL */ `
  mutation DeleteSubscriptions(
    $input: DeleteSubscriptionsInput!
    $condition: ModelSubscriptionsConditionInput
  ) {
    deleteSubscriptions(input: $input, condition: $condition) {
      id
      subscriptionId
      customerEmail
      priceId
      eventType
      createdAt
      updatedAt
      status
    }
  }
`;
