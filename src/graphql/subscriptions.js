/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onCreateApplication(filter: $filter) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onUpdateApplication(filter: $filter) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onDeleteApplication(filter: $filter) {
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
export const onCreateSubscriptions = /* GraphQL */ `
  subscription OnCreateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onCreateSubscriptions(filter: $filter) {
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
export const onUpdateSubscriptions = /* GraphQL */ `
  subscription OnUpdateSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onUpdateSubscriptions(filter: $filter) {
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
export const onDeleteSubscriptions = /* GraphQL */ `
  subscription OnDeleteSubscriptions(
    $filter: ModelSubscriptionSubscriptionsFilterInput
  ) {
    onDeleteSubscriptions(filter: $filter) {
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
